import "./App.css";

function App() {
  return (
    <>
      <ShowName></ShowName>
      <ShowName></ShowName>
      <Daynamic></Daynamic>
      <UlList></UlList>
      <Box name="Rimi" title="Full-Stack Dev"></Box>
      <Box name="Ruba" title="Front-end Dev"></Box>
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
export default App;
