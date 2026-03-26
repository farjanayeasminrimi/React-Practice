function Food({ name, isHungry }) {
  // Option 1
  // if (isHungry) {
  //   return (
  //     <div>
  //       <p> Hunger Name List</p>
  //       <p>Name: {name}</p>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div style={{ margin: "10px" }}>
  //       <p>Not Hunger List:</p>
  //       <p>Name: {name}</p>
  //     </div>
  //   );
  // }
  // option 2
  // if (isHungry) {
  //   return (
  //     <div>
  //       <p> Hunger Name List</p>
  //       <p>Name: {name}</p>
  //     </div>
  //   );
  // }
  // return (
  //   <div style={{ margin: "10px" }}>
  //     <p>Not Hunger List:</p>
  //     <p>Name: {name}</p>
  //   </div>
  // );
  // Option 3
  // return isHungry ? (
  //   <div>
  //     <p> Hunger Name List</p>
  //     <p>Name: {name}</p>
  //   </div>
  // ) : (
  //   <div style={{ margin: "10px" }}>
  //     <p>Not Hunger List:</p>
  //     <p>Name: {name}</p>
  //   </div>
  // );
  // Option 4
  return (
    <>
      {isHungry && (
        <div>
          <p> Hunger Name List</p>
          <p>Name: {name}</p>
        </div>
      )}
    </>
  );
}
export default Food;
