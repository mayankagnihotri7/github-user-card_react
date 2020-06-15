import React from "react";

const UserProfile = (props) => {
  console.log(props, "here we hav");
  return (
    <div>
      <img src={props.details.avatar_url} alt="" />
      <h1>{props.details.login}</h1>
      <h2>{props.details.bio}</h2>
      <a href={props.details.blog}>{props.details.blog}</a>
      <h2>{props.details.followers}</h2>
      <label>Following:</label>
      <h2>{props.details.following}</h2>
      <a href={props.details.url}>{props.details.url}</a>
    </div>
  );
};

export default UserProfile;
