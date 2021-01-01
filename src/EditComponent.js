import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditComponent extends Component {
    handleEdit = (e) => {
        e.preventDefault();
        const newTitle = this.getTitle.value;
        const newContent = this.getContent.value;
        const data = {
            newTitle,
            newContent
        }
        this.props.dispatch({ type: 'UPDATE', id: this.props.note.id, data: data })
    }
    render() {
        return (
            <div key={this.props.note.id} className="note">
                <form className="form" onSubmit={this.handleEdit}>
                    <input required type="text" ref={(input) => this.getTitle = input}
                        defaultValue={this.props.note.title} placeholder="Enter Note Title" /><br /><br />
                    <textarea required rows="5" ref={(input) => this.getContent = input}
                        defaultValue={this.props.note.content} cols="28" placeholder="Enter Note" /><br /><br />
                    <div className="control-buttons"> <button style={{background: "grey"}}>Update</button></div>
                </form>
            </div>
        );
    }
}
export default connect()(EditComponent);
