import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Note from './Note';
import EditComponent from './EditComponent';

const AllNote = (props) => {
    const [filterdata, setFilterdata] = useState([props.notes])
    const DiffDate = (date) => {
        const date1 = new Date()
        const date2 = new Date(date)
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays
    }
    useEffect(() => {
        setFilterdata(props.notes)
    }, [])
    const Fitler = (e) => {
        // let data = []
        if (e.target.value === 'daily') {
            const filteredDates = props.notes.filter(d => {
                return DiffDate(d.id) <= 1
            });
            // console.log(filteredDates)
            setFilterdata(filteredDates)
        }
        else if (e.target.value === 'weekly') {
            const filteredDates = props.notes.filter(d => {
                return DiffDate(d.id) <= 8
            });
            // console.log(filteredDates)
            setFilterdata(filteredDates)
        }
        else if (e.target.value === 'monthly') {
            const filteredDates = props.notes.filter(d => {
                return DiffDate(d.id) <= 31
            });
            // console.log(filteredDates)
            setFilterdata(filteredDates)
        }
        else if (e.target.value === 'yearly') {
            const filteredDates = props.notes.filter(d => {
                return DiffDate(d.id) <= 365
            });
            // console.log(filteredDates)
            setFilterdata(filteredDates)

        }
    }
    console.log(filterdata)
    return (
        <div className="note-container">
            <select style={{ padding: "3px 5px 3px 5px" }} onChange={Fitler}>
                <option value='daily'>Daily</option>
                <option value='weekly'>Weekly</option>
                <option value='monthly'>Monthly</option>
                <option value='yearly'>Yearly</option>
            </select>
            <h1 className="all_note_heading" style={{ fontWeight: '900' }}>All Notes</h1>

            {props.notes.reverse().map((note) => (
                <div key={note.id}>
                    {note.editing ? <EditComponent note={note} key={note.id} /> :
                        <Note key={note.id} note={note} />}
                </div>
            ))}
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        notes: state
    }
}

export default connect(mapStateToProps)(AllNote);
