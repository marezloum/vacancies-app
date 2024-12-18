import "./RadioButtonGroup.scss"
// should have one prop like name
// this name is the text for radio button and value of radio button
function RadioButtonComponent({ value }: { value: string }) {
  return <div>radioButton</div>;
}

// prop should have a property named buttons.
// the buttons property is an array of strings
// we do a map method on this array and call RadioButtonComponent component with these strings
//
function RadioButtonGroup({ buttons = [] }: { buttons: string[] }) {
  return (
    <div>
      {buttons.length > 0
        ? buttons.map((button) => <RadioButtonComponent value={button} />)
        : null}
    </div>
  );
}

export default RadioButtonGroup;
