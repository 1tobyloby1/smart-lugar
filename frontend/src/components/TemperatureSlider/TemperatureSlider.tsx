import Controller from "shared/Models/Controller";
import "./TemperatureSlider.css";
import CircularSlider from "@fseehawer/react-circular-slider";
import { useEffect, useMemo, useState } from "react";
import Interact from "../../functions/Interact";
import { toast } from "react-toastify";
import useVariableListener from "../../hooks/useVariableListener";

function TemperatureSlider(props: Controller) {
  const [temperature, setTemperature] = useState<number | null>(null);
  const [currentTemp, setcurrentTemp] = useState(0);
  const [isDragging, setisDragging] = useState(false);
  useVariableListener(props.ActualValue!, setcurrentTemp);

  console.log(currentTemp);

  useEffect(() => {
    (async () => {
      const response = await Interact(props.nodeId, props.SetPoint!);
      console.log(response.data);

      if (response.successful) {
        setTemperature(response.data as number);
      }
    })();
  }, [props.nodeId, props.SetPoint]);

  useMemo(async () => {
    if (isDragging) return;

    const response = await Interact(props.nodeId, props.SetPoint!, temperature);
    if (!response.successful) {
      toast.error("Unable to change value");
    }
  }, [isDragging, temperature, props.nodeId, props.SetPoint]);

  if (temperature === null) return <div>loading...</div>;

  return (
    <div className="temperature-wrapper">
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
          progressColorTo="#e66210"
          trackColor="#E0E6E6"
          knobColor="#F58014"
          progressSize={22}
          trackSize={22}
          knobSize={60}
        />
      </div>
    </div>
  );
}

export default TemperatureSlider;
