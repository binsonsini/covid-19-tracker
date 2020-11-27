import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Statedata from "./Statedata";
import axios from "axios";
class India extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IndiaData: []
    };
  }
  componentDidMount() {
    axios.get("https://corona.lmao.ninja/v2/countries/india").then(response => {
      console.log(response.data);
      this.setState({ IndiaData: response.data });
    });
    // this.scrollToBottom();
  }

  render() {
    return (

      <div >
             <div className="col-md-12">
          <img src=" https://www.countryflags.io/in/shiny/64.png" />
          <h3>India</h3>
        </div>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-3">
              <Card className="badge badge-danger" style={{ width: "10rem" }}>
                <Card.Body className="text-centre">
                  <Card.Title>TOTAL CASES</Card.Title>
                  <h3>[{this.state.IndiaData.cases}]</h3>
                  <Card.Text>
                    Today :[{this.state.IndiaData.todayCases}]
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3">
              <Card className="badge badge-primary" style={{ width: "10rem" }}>
                <Card.Body className="text-centre">
                  <Card.Title>ACTIVE CASES</Card.Title>
                  <h3>[{this.state.IndiaData.active}]</h3>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3">
              <Card className="badge badge-success" style={{ width: "10rem" }}>
                <Card.Body className="text-centre">
                  <Card.Title>RECOVERED </Card.Title>
                  <h3>[{this.state.IndiaData.recovered}]</h3>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3">
              <Card className="badge badge-danger" style={{ width: "10rem" }}>
                <Card.Body className="text-centre">
                  <Card.Title> DEATHS</Card.Title>
                  <h3>[{this.state.IndiaData.deaths}]</h3>
                  <Card.Text>
                    Today : [{this.state.IndiaData.todayDeaths}]
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <Statedata />
      </div>
    );
  }
}
export default India;
