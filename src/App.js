import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity_kiwifruit: 0,
      kiwiSeats: 0,
      percentage_kiwifruit: 0,
      quantity_banana: 0,
      bananaSeats: 0,
      percentage_banana: 0,
      quantity_orange: 0,
      oranageSeats: 0,
      percentage_orange: 0,
      fruit_sum: 0,
      mp_sum: 0,
      quantity_Kahu: 0,
      percentage_Kahu: 0,
      quantity_Ong: 0,
      percentage_Ong: 0,
      quantity_Button: 0,
      percentage_Button: 0,
      quantity_Ibrahim: 0,
      percentage_Ibrahim: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.sum = this.sum.bind(this);
  }
  sum(e) {
    var s = 0;

    e.forEach((element) => {
      s += +element;
    });
    return s;
  }

  handleChange(event) {
    const id = event.target.id;

    this.setState({ [id]: event.target.value }, () => {
      var s = this.sum([
        this.state["quantity_kiwifruit"],
        this.state["quantity_banana"],
        this.state["quantity_orange"],
      ]);
      var x = this.sum([
        this.state["quantity_Kahu"],
        this.state["quantity_Ong"],
        this.state["quantity_Button"],
        this.state["quantity_Ibrahim"],
      ]);
      console.log("x", x);
      if (s != 0) {
        this.setState({ fruit_sum: s }, () => {
          this.setState(
            {
              percentage_kiwifruit: this.percentage(
                this.state.quantity_kiwifruit,
                this.state.fruit_sum
              ),
            },
            () => {
              this.parlimentSeats("percentage_kiwifruit");
            }
          );
          this.setState(
            {
              percentage_banana: this.percentage(
                this.state.quantity_banana,
                this.state.fruit_sum
              ),
            },
            () => {
              this.parlimentSeats("quantity_banana");
            }
          );
          this.setState(
            {
              percentage_orange: this.percentage(
                this.state.quantity_orange,
                this.state.fruit_sum
              ),
            },
            () => {
              this.parlimentSeats("quantity_orange");
            }
          );
        });
      }

      if (x != 0) {
        this.setState({ mp_sum: x }, () => {
          this.setState({
            percentage_Kahu: this.percentage(
              this.state.quantity_Kahu,
              this.state.mp_sum
            ),
          });
          this.setState({
            percentage_Ong: this.percentage(
              this.state.quantity_Ong,
              this.state.mp_sum
            ),
          });
          this.setState({
            percentage_Ibrahim: this.percentage(
              this.state.quantity_Ibrahim,
              this.state.mp_sum
            ),
          });
          this.setState({
            percentage_Button: this.percentage(
              this.state.quantity_Button,
              this.state.mp_sum
            ),
          });
        });
      }
    });
  }

  percentage(vote, totalVote) {
    return ((+vote / +totalVote) * 100).toFixed(3);
  }
  parlimentSeats(e) {
    var kiwiSeats = (this.state.percentage_kiwifruit / 100) * 120;
    var bananaSeats = (this.state.percentage_banana / 100) * 120;
    var oranageSeats = (this.state.percentage_orange / 100) * 120;
    this.setState({
      kiwiSeats: kiwiSeats,
      bananaSeats: bananaSeats,
      oranageSeats: oranageSeats,
    });
  }
  renderSeats = () => {
    let green = {
      backgroundColor: "green",
      height: "25px",
      width: "25px",
      borderRadius: "50%",
      display: "inline-block",
    };
    let orange = {
      backgroundColor: "orange",
      height: "25px",
      width: "25px",
      borderRadius: "50%",
      display: "inline-block",
    };
    let yellow = {
      backgroundColor: "yellow",
      height: "25px",
      width: "25px",
      borderRadius: "50%",
      display: "inline-block",
    };
    let seats = [];
    for (var i = 0; i < Math.round(this.state.kiwiSeats); i++) {
      seats.push(<span style={green}></span>);
    }
    for (var i = 0; i < Math.round(this.state.oranageSeats); i++) {
      seats.push(<span style={orange}></span>);
    }
    for (var i = 0; i < Math.round(this.state.bananaSeats); i++) {
      seats.push(<span style={yellow}></span>);
    }
    return seats;
  };
  render() {
    return (
      <div style={{ margin: "2em" }}>
        <table>
          <tr>
            <th>Party Name</th>
            <th>Vote</th>
            <th>Vote Percentage</th>
            <th> Parliament Seats</th>
            <th>MP Nominee</th>
            <th>Vote</th>
            <th>Vote Percentage</th>
          </tr>
          <tr>
            <td>Kiwifruit</td>
            <td>
              <input
                type="number"
                value={this.state.Kiwifruit}
                id="quantity_kiwifruit"
                name="quantity"
                min="1"
                max="100"
                onChange={this.handleChange}
              />
            </td>
            <td>{Math.round(this.state.percentage_kiwifruit)}%</td>
            <td>{Math.round(this.state.kiwiSeats)}</td>
            <td>Kevin Kahu</td>
            <td>
              <input
                type="number"
                value={this.state.Kevin_Kahu}
                id="quantity_Kahu"
                name="quantity"
                min="1"
                max="100"
                onChange={this.handleChange}
              />
            </td>
            <td>{Math.round(this.state.percentage_Kahu)}%</td>
          </tr>
          <tr>
            <td>Banana </td>
            <td>
              <input
                type="number"
                value={this.state.Banana}
                id="quantity_banana"
                name="quantity"
                min="1"
                max="100"
                onChange={this.handleChange}
              />
            </td>
            <td>{Math.round(this.state.percentage_banana)}%</td>
            <td>{Math.round(this.state.bananaSeats)}</td>
            <td>Oliver Ong</td>
            <td>
              <input
                type="number"
                value={this.state.Oliver_Ong}
                id="quantity_Ong"
                name="quantity"
                min="1"
                max="100"
                onChange={this.handleChange}
              ></input>
            </td>
            <td>{Math.round(this.state.percentage_Ong)}%</td>
          </tr>
          <tr>
            <td>Orange</td>
            <td>
              <input
                type="number"
                value={this.state.Orange}
                id="quantity_orange"
                name="quantity"
                min="1"
                max="100"
                onChange={this.handleChange}
              />
            </td>
            <td>{Math.round(this.state.percentage_orange)}%</td>
            <td>{Math.round(this.state.oranageSeats)}</td>

            <td>Bindi Button</td>
            <td>
              <input
                type="number"
                value={this.state.Bindi_Button}
                id="quantity_Button"
                name="quantity"
                min="1"
                max="100"
                onChange={this.handleChange}
              />
            </td>
            <td>{Math.round(this.state.percentage_Button)}%</td>
          </tr>

          {/* {this.state.fruit_sum} */}

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Ivan Ibrahim</td>
            <td>
              <input
                type="number"
                value={this.state.Ivan_Ibrahim}
                id="quantity_Ibrahim"
                name="quantity"
                min="1"
                max="100"
                onChange={this.handleChange}
              />
            </td>
            <td>{Math.round(this.state.percentage_Ibrahim)}%</td>
          </tr>
        </table>
        {this.renderSeats()}
      </div>
    );
  }
}

export default App;
