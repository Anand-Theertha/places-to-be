import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: 1,
      name: "Max",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
      places: 4,
    },
    {
      id: 2,
      name: "Chris",
      image: "https://images.pexels.com/photos/91228/pexels-photo-91228.jpeg",
      places: 6,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
