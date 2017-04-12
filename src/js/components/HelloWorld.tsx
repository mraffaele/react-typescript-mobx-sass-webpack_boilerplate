import React from 'react';
import { observer } from "mobx-react";
import Store from '../stores/Store';
import { Message } from '../models/Message';

interface HelloWorldState {
}

interface HelloWorldProps {
    store: Store
}

@observer
class HelloWorld extends React.Component<HelloWorldProps, HelloWorldState> {
    constructor(props:HelloWorldProps) {
        super(props);

        this.state = {};

        this.handleNextClick = this.handleNextClick.bind(this);
        this.handlePrevClick = this.handlePrevClick.bind(this);
    }

    handleNextClick(e) {
        e.preventDefault;
        this.props.store.selectNextMessage();
    }

    handlePrevClick(e) {
        e.preventDefault;
        this.props.store.selectPrevMessage();
    }

    render() {
        const { currentMessageIndex, currentMessage, messages } = this.props.store;

        return (
            <div className="helloWorld">
                <h1 className="helloWorld__msg" id={`message_${currentMessageIndex}`}>{currentMessage.text}</h1>
                <button className="helloWorld__btn helloWorld__btn--prev" onClick={this.handlePrevClick}>Prev Message</button>
                <div className="helloWorld__progress">{(currentMessageIndex+1)} / {messages.length}</div>
                <button className="helloWorld__btn helloWorld__btn--next" onClick={this.handleNextClick}>Next Message</button>
            </div>
        )
    }
}

export default HelloWorld;