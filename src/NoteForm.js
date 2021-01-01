import React, {  Component } from 'react';
import { connect } from 'react-redux';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const date = this.state.date
        const title = this.getTitle.value;
        const content = this.getContent.value;
        const data = {
            id: Math.random(),
            date: date,
            title,
            content,
            editing: false
        }
        this.props.dispatch({
            type: 'ADD_NOTE',
            data
        });
        this.getTitle.value = '';
        this.getContent.value = '';
    }
    render() {
        return (
            <div className="note-container">
                <h1 className="note_heading" style={{ fontWeight: '900' }}>Create Note</h1>
                <form className="form" onSubmit={this.handleSubmit}>
                    Title: <br />
                    <input required type="text" ref={(input) => this.getTitle = input}
                        placeholder="Enter Note Title" />
                    <br /><br />
                    Content: <br />
                    <textarea required rows="5" ref={(input) => this.getContent = input} cols="28"
                        placeholder="Enter Note.." />
                    <br /><br />
                     Due Date: <br />
                    <input type="date" id="start" onChange={(e) =>{this.setState({
                        date: e.target.value
                    })}} name="trip-start"
                        value={this.state.date}
                        />
                    <br></br>
                    <button style={{ color: "white", background: "purple" }}>Save Note</button>
                </form>
            </div>
        );
    }
}
export default connect()(NoteForm);