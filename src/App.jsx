import "./App.css";

function App() {
  return (
    <>
      <ShowName></ShowName>
      <ShowName></ShowName>
      <ShowName></ShowName>
      <ShowName></ShowName>
      <Daynamic></Daynamic>
      <UlList></UlList>
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
export default App;
