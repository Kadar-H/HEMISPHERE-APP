import React from "react";
import ReactDOM from "react-dom";
import HemisphereDisplay from "./HemisphereDisplay";

class App extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = { latitude: null, longitude: null, errorMessage: "" };
  //   }

  state = { latitude: null, errorMessage: "" };

  //LifeCycle Methods
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      //NetWork Request

      (position) => {
        this.setState({ latitude: position.coords.latitude });
        this.setState({ longitude: position.coords.longitude });
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  render() {
    if (
      this.state.errorMessage &&
      !this.state.latitude &&
      !this.state.longitude
    ) {
      return <> {this.state.errorMessage} </>;
    }
    if (
      !this.state.errorMessage &&
      this.state.latitude &&
      this.state.longitude
    ) {
      return (
        <>
          <HemisphereDisplay
            latitude={this.state.latitude}
            longitude={this.state.longitude}
          />
        </>
      );
    } else {
      return <>Loading...</>;
    }
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
