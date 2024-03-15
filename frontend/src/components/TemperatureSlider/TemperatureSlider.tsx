import Component from "shared/Models/Component";
import "./TemperatureSlider.css";
import CircularSlider from "@fseehawer/react-circular-slider";

function TemperatureSlider(props: Component) {
  return (
    <div className="temperature-slider-parent">
      <CircularSlider
        initialValue={props.value as number}
        onChange={(value: any) => console.log(value)}
        min={0}
        max={30}
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
