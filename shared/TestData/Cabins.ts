import Cabin from '../Models/Cabin';
import ComponentTypes from '../resources/ComponentTypes';

const TestDataCabins:Array<Cabin> = [
    {
        id: "1",
        controls: [
            {
                title: "Air Conditions",
                image: "air-condition",
                href: "air-condition",
                components: [
                    {
                        type: ComponentTypes.Temperature_Slider,
                        value: 20,
                        label: "Temperature"
                    }
                ]
            },
            {
                title: "Lighting",
                image: "lights",
                href: "lights",
                components: [
                    {
                        type: ComponentTypes.List_Item,
                        value: 0,
                        label: "Living room"
                    },
                    {
                        type: ComponentTypes.List_Item,
                        value: 1,
                        label: "Bathroom"
                    },
                    {
                        type: ComponentTypes.List_Item,
                        value: 1,
                        label: "Bedroom 2"
                    },
                    {
                        type: ComponentTypes.List_Item,
                        value: 0,
                        label: "Balcony"
                    }
                ]
            },
        ]
    }
];

export default TestDataCabins;