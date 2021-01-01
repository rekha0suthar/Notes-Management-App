import React, { Component } from 'react';
import { connect } from 'react-redux';
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { format } from 'date-fns'


class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
            filter: ""
        };
    }
    componentDidMount() {
        this.getDate();
    }
    getDate() {
        var date = format(new Date(), 'yyyy-MM-dd')
        this.setState({ date });
    }
    render() {
        return (
            <div className="note">

                <h2 className="note_title">{this.props.note.title}</h2>
                <p className="note_content">{this.props.note.content}</p>
                <div className="icon">
                    {/* <button className="edit" onClick={() => this.props.dispatch({ type: 'EDIT_NOTE', id: this.props.note.id })}> Edit </button> */}
                    <span style={{ margin: "-20px 55px" }}>{this.props.note.date}</span>
                    <IconButton className="edit" aria-label="Edit" style={{ color: "blue", textAlign: "right", margin: " 10px 50px 10px" }} onClick={() => this.props.dispatch({ type: 'EDIT_NOTE', id: this.props.note.id })}>
                        <EditIcon />
                    </IconButton>
                    {/* <button className="delete" onClick={() => this.props.dispatch({ type: 'DELETE_NOTE', id: this.props.note.id })}> Delete </button> */}
                    <IconButton className="delete" aria-label="Delete" style={{ color: "red", margin: " -10px -5px" }} onClick={() => this.props.dispatch({ type: 'DELETE_NOTE', id: this.props.note.id })}>
                        <DeleteIcon />
                    </IconButton>
                </div>
            </div>
        );
    }
}
export default connect()(Note);