import { use } from "react";
import Friend from "./Friend";
export default function Friends({ FriendsRes }) {
  const Friends = use(FriendsRes);
  // console.log(Friends);
  return (
    <div>
      <h1>Friends: </h1>
      {Friends.map((friend) => (
        <Friend key={friend.id} friend={friend}></Friend>
      ))}
    </div>
  );
}
