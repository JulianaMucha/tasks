import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import img from "./img/Elden-Ring-Ranni-The-Witch.avif";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
                <br></br>
                <span style={{ color: "red" }}>Juliana Mucha</span>
                <br></br>
                <span style={{ font: "verdana" }}>
                    <h1>Halloween</h1>
                </span>
            </header>
            <br></br>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "25px",
                                backgroundColor: "red",
                            }}
                        ></div>
                        <br></br>
                        <img
                            src={img}
                            width="500"
                            height="300"
                            alt="A picture of Ranni the Witch from Elden Ring"
                        />
                        <br></br>
                        <br></br>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "25px",
                                backgroundColor: "red",
                            }}
                        ></div>
                        <ul>
                            <span style={{ color: "orange" }}>
                                Things I love about Halloween:
                            </span>
                            <li>pumpkin picking/carving</li>
                            <li>scary movies</li>
                            <li>cosplay</li>
                            <li>bonfires</li>
                            <li>making dessert</li>
                            <li>candy</li>
                            <li>scaring kids</li>
                            <li>hanging out with friends</li>
                        </ul>
                        <br></br>
                        <br></br>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "25px",
                                backgroundColor: "red",
                            }}
                        ></div>
                        <span style={{ color: "skyblue" }}>
                            Elden Ring Characters:
                        </span>
                        <br></br>Ranni
                        <br></br>Godfrey
                        <br></br>Radahn
                        <br></br>Placidusax
                        <br></br>Godskin Duo
                        <br></br>
                        <br></br>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "25px",
                                backgroundColor: "red",
                            }}
                        ></div>
                        <br></br>
                        <p>Hello World</p>
                        <Button
                            onClick={() => {
                                console.log("Hello World!");
                            }}
                        >
                            Log Hello World
                        </Button>
                        <br></br>
                        <br></br>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
