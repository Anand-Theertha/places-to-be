import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: 1,
      name: "Max",
      image: "https://images.app.goo.gl/CZ2wXbcSTEY4C1vU6",
      places: 4,
    },
    {
      id: 1,
      name: "Chris",
      image: "https://images.app.goo.gl/q8DsnhAvspXeWxty6",
      places: 4,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
