import React from "react";
import UserProfile from "./components/userProfile.jsx";

class App extends React.Component {
  constructor(props) {
    console.log("constructor");

    super(props);
    this.state = {
      users: ["maxagno3", "sanjibroy360"],
      userInfo: null,
      userIndex: 0,
    };
  }

  componentDidMount() {
    fetch(`https://api.github.com/users/maxagno3`)
      .then((response) => response.json())
      .then((data) => this.setState({ userInfo: data }));
  }

  async handleClick(username, e) {
    try {
      var fetchedData = await fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        .then((data) => this.setState({userInfo: data}));
    } catch (error) {
      console.log({ error });
    }
  }

  render() {
    console.log({ info: this.state.userInfo });
    return (
      <>
         {this.state.users.map(data => <button onClick={() => this.handleClick(data) } > {data}  </button>)}
          {this.state.userInfo ? <UserProfile details={this.state.userInfo}/> : "..Loading"}
      </>
      );
    }
}

export default App;
