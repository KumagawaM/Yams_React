import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import {Badge, Button, Container, Form} from "react-bootstrap";

import { lanceYams } from "./tools/play";


export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tab : [], nbLancer : 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let tabTmp = lanceYams();
    this.setState({
      nbLancer : this.state.nbLancer + 1,
      tab : tabTmp
    });

    this.props.onYamsUpdate(this.state.tab);
  }

  render() {
    console.log("HOME: ", this.state.tab);
    return (
      <Container>
        <br />
        <Form>
          <Form.Label>Nombre de lancer : <Badge variant="primary">{this.state.nbLancer}</Badge></Form.Label>
          <br />
          <Button variant="primary" type="button" onClick={this.handleClick} > Jouer </Button>
        </Form>
      </Container>

    )
  }
}

