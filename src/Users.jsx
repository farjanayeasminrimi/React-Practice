import { use } from "react";

export default function Users({ UsersData }) {
  const users = use(UsersData);
  // console.log(users);
  return (
    <div>
      <h1>Users: {users.length}</h1>
    </div>
  );
}
