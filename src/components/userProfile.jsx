import React from "react";
import "./userProfile.component.css";

const UserProfile = (props) => {
  console.log(props, "here we hav");
  return (
    <div className="container grid">
      <div>
        <img src={props.details.avatar_url} alt="" />
      </div>
      <div>
        <h1>{props.details.login}</h1>
        <h2>{props.details.bio}</h2>
        <a href={props.details.blog}>{props.details.blog}</a>
        <h2>{props.details.followers}</h2>
        <label>Following:</label>
        <h2>{props.details.following}</h2>
        <a href={props.details.url}>{props.details.url}</a>
      </div>
    </div>
  );
};

export default UserProfile;
