export default function Friend({ friend }) {
  const { name, email, phone } = friend;
  // console.log(name);
  return (
    <div style={{ border: "1px solid gray", padding: "15px", margin: "5px" }}>
      <h4>Name: {name}</h4>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
}
