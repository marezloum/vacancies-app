import "./ComponentsDemo.scss"
import Like from "../../components/shared/Like";
import Tag from "../../components/shared/Tag";
import RadioButtonGroup from "../../components/shared/RadioButtonGroup";

function ComponentsDemo() {
  return (
    <div className="components-demo-wrapper">
      <h1>ComponentsDemo</h1>
      <div>
        <h2>Like component</h2>
        <Like liked={true}></Like>
        <Like liked={false}></Like>
      </div>
      <div>
        <h2>Tag component</h2>
        <Tag name="CSS"/>
        <Tag name="React"/>
      </div>
      <div>
        <h2>RadioButtonGroup component</h2>
        <RadioButtonGroup buttons={["button1", "button2"]}/>
      </div>
    </div>
  );
}

export default ComponentsDemo;
