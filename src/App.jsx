import "./App.css";
import ToDo from "./ToDo";
import Food from "./Food";
function App() {
  return (
    <>
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
