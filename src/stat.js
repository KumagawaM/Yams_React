import './stat.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import {Badge, Container, ListGroup} from "react-bootstrap";
import {Result} from "./tools/result";

export class Stat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pair : 0, brelan: 0, carre: 0, yams: 0 };
  }


  render() {
    console.log("STAT pair: ", this.state.pair);
    const res = this.props.result;
    return(
      <Container>
        <br/>
        <ListGroup variant="flush">
          { res.map((val,id) => {
            return <ListGroup.Item key={id}> Nombre de {val.hand} cumulés: <Badge variant="primary">{val.value}</Badge></ListGroup.Item>
          })}
        </ListGroup>
      </Container>
    )
  }
}
