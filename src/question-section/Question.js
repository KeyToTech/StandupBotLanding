import React, { Component } from 'react';
import './question.css';
import image from '../image/question/img.png';
import { Alert, Button, Collapse } from 'react-bootstrap';

class Question extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            accordion: [true, false, false],
            // { open: false },
            // { open: false },

        };
    }

    toggleAccordion(tab) {

        const prevState = this.state.accordion;
        const state = prevState.map((x, index) =>
            tab === index ? !x : false
        );

        this.setState({
            accordion: state,
        });
    }

    render() {
        const { open } = this.state;
        // const { openel2 } = this.state.collapse[1].open;
        // const { openel3 } = this.state.collapse[2].open;

        return (
            <div className="section-question">
                <div className="container-context-question">
                    <div className="tx-p">Frequently Asked Questions</div>
                    <div className="desct-p">Innovative solutions with the best.  Incididunt dolor sit amet,
                        consectetur adipiscing elitsed tempor  vel metus scelerisque ante sollicitudin.
                    </div>
                </div>
                <div className="wrapper-main-contain">
                    <div className="accordion">
                        <div className="collapse-container">
                            <Alert
                                className="alert-btn"
                                onClick={() => this.toggleAccordion(0)}
                                aria-controls="headingOne"
                                aria-expanded={open}>

                                <div className="question">How can i buy this landing?</div>

                                {this.state.accordion[0]
                                    ? <i class="fas fa-plus"></i>
                                    : <i class="fas fa-minus"></i>}
                            </Alert>
                            <Collapse in={this.state.accordion[0]} data-parent="#accordion" aria-labelledby="headingOne">
                                <div id="example-collapse-text">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                    labore wes anderson cred nesciunt sapiente ea proident.
                                </div>
                            </Collapse>
                        </div>

                        <div className="collapse-container">
                            <Alert
                                className="alert-btn"
                                onClick={() => this.toggleAccordion(1)}
                                aria-controls="headingOne"
                                aria-expanded={open}>

                                <div className="question">How can i order this?</div>

                                {this.state.accordion[1]
                                    ? <i class="fas fa-plus"></i>
                                    : <i class="fas fa-minus"></i>}
                            </Alert>
                            <Collapse in={this.state.accordion[1]} data-parent="#accordion" aria-labelledby="headingOne">
                                <div id="example-collapse-text">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                    labore wes anderson cred nesciunt sapiente ea proident.
                                </div>
                            </Collapse>
                        </div>

                        <div className="collapse-container">
                            <Alert
                                className="alert-btn"
                                onClick={() => this.toggleAccordion(2)}
                                aria-controls="headingOne"
                                aria-expanded={open}>

                                <div className="question">Is it refunadable?</div>

                                {this.state.accordion[2]
                                    ? <i class="fas fa-plus"></i>
                                    : <i class="fas fa-minus"></i>}
                            </Alert>
                            <Collapse in={this.state.accordion[2]} data-parent="#accordion" aria-labelledby="headingOne">
                                <div id="example-collapse-text">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                    labore wes anderson cred nesciunt sapiente ea proident.
                                </div>
                            </Collapse>
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