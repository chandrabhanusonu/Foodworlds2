import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
    };
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Profile Class Based Component</h1>
        <p>Name : {this.props.name}</p>
        <p>Count : {count}</p>
        <button
          onClick={() => {
            this.setState({
              count: 1,
            });
          }}
        >
          Counting
        </button>
      </div>
    );
  }
}

export default Profile;
