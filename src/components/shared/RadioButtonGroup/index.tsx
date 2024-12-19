import { useState } from "react";
import "./RadioButtonGroup.scss";

// prop should have a property named buttons.
// the buttons property is an array of strings
// we do a map method on this array and call RadioButtonComponent component with these strings
//
function RadioButtonGroup({
  buttons = [],
  name,
  onChange,
  initialValue = "",
}: {
  buttons: string[];
  name: string;
  onChange: any;
  initialValue?: string;
}) {
  const [current, setCurrent] = useState(initialValue);
  return (
    <div className="radioButton_group">
      {buttons.length > 0
        ? buttons.map((button) => (
            <label key={button}>
              <input
                type="radio"
                name={name}
                onChange={(e) => {
                  onChange(e.target.value);
                  setCurrent(button);
                }}
                value={button}
                checked={current === button}
              />
              {button}
            </label>
          ))
        : null}
    </div>
  );
}

export default RadioButtonGroup;
