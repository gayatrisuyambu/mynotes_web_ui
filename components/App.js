import React, { Component } from 'react';
import Header from './Header';
import NoteManager from './Notes/NoteManager';

export default class App extends Component {

    constructor(){
        super();

        this.state = {
            title: 'My Notes',
            description: ''
        };
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container mt-5">
                    <NoteManager />
                </div>
            </div>
        );
    }
}