import "./App.css";
import ToDo from "./ToDo";
import Food from "./Food";
import Handler, { Button3Handler, Button4Handler } from "./EventHandler";
function App() {
  return (
    <>
      <Buttons></Buttons>
      <ShowName></ShowName>
      <ShowName></ShowName>
      <Daynamic></Daynamic>
      <UlList></UlList>
      <Box name="Rimi" title="Full-Stack Dev"></Box>
      <Box name="Ruba" title="Front-end Dev"></Box>
      <BoxDestructuring name="Saleha" title="Full Time Mom"></BoxDestructuring>
      <BoxDestructuring name="Khorshed Alam" title="Accountant"></BoxDestructuring>
      <BoxDestructuring name="Rasel" title="Student"></BoxDestructuring>
      <ToDo task="React Js" isDone={false} duration="50"></ToDo>
      <ToDo task="Revise Js" isDone={true}></ToDo>
      <ToDo task="Shower" isDone={false}></ToDo>
      <ToDo task="Sleep" isDone={true}></ToDo>
      <Food name="Rimi" isHungry={true}></Food>
      <Food name="Ruba" isHungry={false}></Food>
      <Food name="Rasel" isHungry={true}></Food>
      <Food name="Raihan" isHungry={true}></Food>
    </>
  );
}

function Buttons() {
  return (
    <div>
      <button onClick={Handler} style={{ margin: "7px", padding: "10px" }}>
        Button1
      </button>
      <button
        onClick={function Button2() {
          alert("Button2 has clicked just now!!");
        }}
        style={{ margin: "7px", padding: "10px" }}
      >
        Button2
      </button>
      <button onClick={Button3Handler} style={{ margin: "7px", padding: "10px" }}>
        Button3
      </button>
      <button
        onClick={() => {
          alert("Clicked in button four");
        }}
        style={{ margin: "7px", padding: "10px" }}
      >
        Button4
      </button>

      <button onClick={() => Button4Handler("Rimi")} style={{ margin: "7px", padding: "10px" }}>
        Button5
      </button>
    </div>
  );
}
function ShowName() {
  return <h1>Hello World</h1>;
}
const name = "Farjana";
function Daynamic() {
  return <h1>Name : {name}</h1>;
}
const list = {
  color: "red",
};
function UlList() {
  return (
    <ul>
      <li>ati</li>
      <li style={list}>bati</li>
      <li>khati</li>
    </ul>
  );
}
const boxStyle = {
  border: "1px solid white",
  margin: "5px",
  padding: "10px",
};
function Box(props) {
  return (
    <div style={boxStyle}>
      <h2>Developer Name: {props.name}</h2>
      <h2>Designation: {props.title}</h2>
    </div>
  );
}
function BoxDestructuring({ name, title }) {
  console.log(name, title);
  return (
    <div style={boxStyle}>
      <h2>Name: {name}</h2>
      <h2>Designation: {title}</h2>
    </div>
  );
}
export default App;
