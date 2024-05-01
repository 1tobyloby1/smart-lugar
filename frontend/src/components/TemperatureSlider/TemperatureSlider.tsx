import Controller from "shared/Models/Controller";
import "./TemperatureSlider.css";
import CircularSlider from "@fseehawer/react-circular-slider";
import { useEffect, useMemo, useState } from "react";
import Interact from "../../functions/Interact";

function TemperatureSlider(props: Controller) {
  const [temperature, setTemperature] = useState<number | null>(null);
  const [isDragging, setisDragging] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await Interact(props.nodeId, props.SetPoint!);
      console.log(data);
      
      if (data !== null) {
        setTemperature(data as number);
      }
    })();
  }, [props.nodeId, props.SetPoint]);

  useMemo(async () => {
    if (isDragging) return;

    await Interact(props.nodeId, props.SetPoint!, temperature);
  }, [isDragging, temperature, props.nodeId, props.SetPoint]);

  if (temperature === null) return <div>loading...</div>;

  return (
    <div className="temperature-slider-parent">
      <CircularSlider
        initialValue={temperature}
        onChange={(value: number) => setTemperature(value)}
        isDragging={(isDragging: boolean) => setisDragging(isDragging)}
        min={17}
        max={24}
        width={300}
        direction={1}
        knobPosition="left"
        appendToValue="°C"
        valueFontSize="70px"
        labelFontSize="22px"
        label="Temperature"
        labelColor="rgba(40,94,97,.68)"
        progressColorFrom="#F58014"
        progressColorTo="#F58014"
        trackColor="#E0E6E6"
        knobColor="#F58014"
        progressSize={20}
        trackSize={20}
        knobSize={60}
      />
    </div>
  );
}

export default TemperatureSlider;
