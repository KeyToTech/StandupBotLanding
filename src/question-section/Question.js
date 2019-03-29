import React, { Component } from 'react';
import './question.css';
import image from '../image/question/img.png';
import { Alert } from 'react-bootstrap';

class Question extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isCollapse: true
        }
    }

    changeIsCollapse() {
        if (this.state.isCollapse == false) {
            this.setState({
                isCollapse: true
            })
        } else {
            this.setState({
                isCollapse: false
            })
        }
    }

    render() {
        return (
            <div className="section-question">
                <div className="container-context-question">
                    <div className="tx-p">Frequently Asked Questions</div>
                    <div className="desct-p">Innovative solutions with the best.  Incididunt dolor sit amet,
                        consectetur adipiscing elitsed tempor  vel metus scelerisque ante sollicitudin.
                    </div>
                </div>
                <div className="wrapper-main-contain">
                    <div className="collapse-wrapper">
                        <div className="collapse-container">
                            <a className="ref-question" data-toggle="collapse" href="#hide"
                            >
                                <Alert variant="light" className="alert-btn">
                                    <div className="question">How can i buy this landing?</div>
                                    {this.state.isCollapse
                                        ? <i class="fas fa-plus"></i>
                                        : <i class="fas fa-minus"></i>}
                                </Alert>
                            </a>
                            <div className="collapse" id="hide">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                        </div>
                        <div className="collapse-container">
                            <a className="ref-question" data-toggle="collapse" href="#hide-two">
                                <Alert variant="light" className="alert-btn">
                                    <div className="question">How can i order this?</div>
                                    <i class="fas fa-plus"></i>
                                </Alert>
                            </a>
                            <div className="collapse" id="hide-two">Innovative solutions with the best.  Incididunt dolor sit amet,</div>
                        </div>
                        <div className="collapse-container">
                            <a className="ref-question" data-toggle="collapse" href="#hide-three">
                                <Alert variant="light" className="alert-btn"   >
                                    <div className="question">Is it refunadable?</div>  <i class="fas fa-plus"></i>
                                </Alert>
                            </a>
                            <div className="collapse" id="hide-three">Innovative solutions with the best.  Incididunt dolor sit amet,</div>
                        </div>
                    </div>
                    <div className="picture-cotainer-question">
                        <img src={image} alt="img" className="image-question" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Question;