import React from "react";

import $ from "jquery";
import {Row, Col, Card} from "antd";
class Athletes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ath: []
        }
    }

    componentDidMount() {
        this.setState({
            ath: [
                {
                    "id": 1,
                    "name": "jordan",
                    "decoration": "篮球之神",
                    "image": "images/jordan.jpg"
                },
                {
                    "id": 2,
                    "name": "kobe",
                    "decoration": "坚持训练",
                    "image": "images/kobe.jpg"
                },
                {
                    "id": 3,
                    "name": "詹姆斯",
                    "decoration": "小皇帝",
                    "image": "images/james.jpg"
                },
                {
                    "id": 4,
                    "name": "艾弗森",
                    "decoration": "crossover",
                    "image": "images/ai.jpg"
                },
                {
                    "id": 5,
                    "name": "杜兰特",
                    "decoration": "快准狠",
                    "image": "images/kd.jpg"
                }
            ]
        })
    }

    render() {
        var result = this.state.ath.map(function (item, i) {
            return (
                i ?
                    <Col span={4} offset={1} key={i}>
                        <Card>
                            <img src={item.image} style={{width: "100%", height: "200px"}}/>
                            <p><a>{item.name}</a></p>
                            <p><a>{item.decoration}</a></p>
                            <p style={{height: "10px"}}></p>
                        </Card>
                    </Col>
                    :
                    <Col span={4} key={i}>
                        <Card>
                            <img src={item.image} style={{width: "100%", height: "200px"}}/>
                            <p><a>{item.name}</a></p>
                            <p><a>{item.decoration}</a></p>
                            <p style={{height: "10px"}}></p>
                        </Card>
                    </Col>
            )
        });
        return (
            <div className="athlete">
                <Row>
                    {result}
                </Row>
            </div>
        )
    }
}
export default Athletes;
