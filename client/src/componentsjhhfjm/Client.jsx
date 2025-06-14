import React from "react";
import Avatar from "react-avatar";
const Client = ({ name }) => {
  return (
    <div className="mb-1 flex items-center">
      <Avatar name={name.toString()} size="30px" round="50%" />
      <span className="ml-2">{name}</span>
    </div>
  );
};

export default Client;
