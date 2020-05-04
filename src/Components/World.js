import React, { Component } from "react";
import axios from "axios";
class World extends Component {
  constructor() {
    super();
    this.state = {
      Worlddata: []
    };
  }
  componentDidMount() {
    axios.get("https://corona.lmao.ninja/v2/countries").then(response => {
      console.log(response.data);
      this.setState({ Worlddata: response.data });
    });
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="row">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <td>Country</td>
                <td>Total Cases</td>
                <td>active</td>
                <td>Recovered</td>
                <td>Death</td>
              </tr>
            </thead>
            <tbody>
              {this.state.Worlddata.map((itm, ky) => {
                return (
                  <tr>
                    <td>{itm.country}
                
                    <img  style={{width:'64px',marginLeft:'10px'}} src={itm.countryInfo.flag}/>
                    
                    </td>
                    <td>{itm.cases}</td>
                    <td>{itm.active}</td>
                    <td>{itm.recovered}</td>
                    <td>{itm.deaths}</td>
                  </tr>
                )
              
              })}
              
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default World;
