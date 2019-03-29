import React, { Component } from 'react';
import './question.css';
import image from '../image/question/img.png';

class Question extends Component {

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
                    <div className="collapse-container">
                        <div className="panel panel-danger">
                            <div className="panel-heading">
                                <a data-toggle="collapse" href="#hide">Js Collapse</a>
                            </div>
                        </div>
                        <div className="collapse" id="hide">nfjdsfmlsmdlfsld</div>
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