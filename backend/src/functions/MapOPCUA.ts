import FindAllCabins from "../helpers/FindAllCabins";
import FindControllersByRoom from "../helpers/FindControllersByRoom";
import FindMeasurementByRoom from "../helpers/FindMeasurementByRoom";
import FindRoomsByZone from "../helpers/FindRoomsByZone";
import OPCUA, { OPCUAProps } from "../services/OPCUA";
import FindAllZones from "../helpers/FindAllZones";
import Cabin from "shared/Models/Cabin";
import Zone from "shared/Models/Zone";

const MapOPCUA = async (): Promise<Cabin[]> => {
    const opcuaInstance = OPCUA();
    await opcuaInstance.connect();

    let cabins = await FindAllCabins(opcuaInstance, "ns=5;i=185");
    for (let i = 0; i < cabins.length; i++) {
        let cabin = cabins[i];
        cabin.zones = await MapZones(opcuaInstance, cabin);

        cabins[i] = cabin;
    }
    return cabins;
}

const MapZones = async (opcuaInstance: OPCUAProps, cabin: Cabin): Promise<Zone[]> => {
    const zones = await FindAllZones(opcuaInstance, cabin);

    cabin.zones = await Promise.all(zones.map(async (zone) => {
        const rooms = await FindRoomsByZone(opcuaInstance, zone);

        zone.rooms = await Promise.all(rooms.map(async (room) => {
            const controllers = await FindControllersByRoom(opcuaInstance, room, "Controllers");
            room.controllers = controllers;

            const measurement = await FindMeasurementByRoom(opcuaInstance, room, "Measurements");
            room.measurements = measurement;

            return room;
        }));
        return zone;
    }));

    return zones;
}

export default MapOPCUA;