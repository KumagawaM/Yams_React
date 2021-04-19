import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import {Home} from "./home";
import {Stat} from "./stat";
import {Result} from "./tools/result";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nb_lancer: 0,
      tab: [],
      result: [
        new Result("pair", 0),
        new Result("brelan", 0),
        new Result("carre", 0),
        new Result("yams", 0)
      ]
    };
    this.handleYamsUpdate = this.handleYamsUpdate.bind(this);
  }


  handleYamsUpdate(tab) {
    this.setState({tab : tab});
  }


  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.tab != this.state.tab) {

      let count = {};
      let resTab = this.state.result;

      this.state.tab.forEach((x) => {
        count[x] = (count[x] || 0) + 1;
      });

      for (const value in count) {
        switch (count[value]) {
          case 2:
            resTab[0].value = resTab[0].value + 1;
            break;
          case 3:
            resTab[1].value = resTab[1].value + 1;
            break;
          case 4:
            resTab[2].value = resTab[2].value + 1;
            break;
          case 5:
            resTab[3].value = resTab[3].value + 1;
            break;
          default:
        }
      }
      console.log(resTab);
      this.setState({result: resTab});
    }
  }

  render() {
    console.log("APP: ", this.state.result);
    return(
      <Router>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/"> Jeux </Navbar.Brand>
              <Nav.Link> <Link to="/yams">Yams</Link></Nav.Link>
              <Nav.Link> <Link to="/stat"> Statistic</Link></Nav.Link>
          </Navbar>

        <Switch>
          <Route exact path="/yams">
            <Home onYamsUpdate={this.handleYamsUpdate}/>
          </Route>
          <Route exact path="/stat">
            <Stat result={this.state.result} />
          </Route>
        </Switch>
      </Router>

    );
  }
}


export default App;
