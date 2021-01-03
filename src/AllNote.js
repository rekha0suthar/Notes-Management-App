import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Note from './Note';
import EditComponent from './EditComponent';

const AllNote = (props) => {
    const [filterdata, setFilterdata] = useState([props.notes.reverse()])
    const [sorttext, setSorttext] = useState('newest_to_oldest')
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
    const Fitler = async(e) => {
         if (e.target.value === 'all') {
            if(sorttext === 'newest_to_oldest'){
            setFilterdata(props.notes.reverse())
            }
            else if(sorttext === 'oldest_to_newest'){
                 setFilterdata(props.notes)
            }
        }
        // let data = []
        if (e.target.value === 'daily') {
            const filteredDates = await props.notes.filter(d => {
                return DiffDate(d.date) <= 1
            });
            // console.log(DiffDate(props.notes[0].date))
            if(sorttext === 'newest_to_oldest'){
            setFilterdata(filteredDates.reverse())
            }
            else if(sorttext === 'oldest_to_newest'){
                 setFilterdata(filteredDates)
            }
        }
        else if (e.target.value === 'weekly') {
            const filteredDates = props.notes.filter(d => {
                return DiffDate(d.date) <= 7 
            });
            console.log(filteredDates)
            if(sorttext === 'newest_to_oldest'){
            setFilterdata(filteredDates.reverse())
            }
            else if(sorttext === 'oldest_to_newest'){
                 setFilterdata(filteredDates)
            }
        }
        else if (e.target.value === 'monthly') {
            const filteredDates = props.notes.filter(d => {
                return DiffDate(d.date) <= 31 
            });
            console.log(filteredDates)
            if(sorttext === 'newest_to_oldest'){
            setFilterdata(filteredDates.reverse())
            }
            else if(sorttext === 'oldest_to_newest'){
                 setFilterdata(filteredDates)
            }
        }
        else if (e.target.value === 'yearly') {
            const filteredDates = props.notes.filter(d => {
                return DiffDate(d.date) <= 365
            });
            console.log(filteredDates)
            if(sorttext === 'newest_to_oldest'){
            setFilterdata(filteredDates.reverse())
            }
            else if(sorttext === 'oldest_to_newest'){
                 setFilterdata(filteredDates)
            }

        }
    }
    const HandleSortedChange = (e) =>{
        if(e.target.value === "newest_to_oldest"){
            setFilterdata(filterdata.reverse())
            setSorttext(e.target.value)
        }
        else if (e.target.value === "oldest_to_newest"){
            setFilterdata(filterdata)
            setSorttext(e.target.value)
        }
    }
     console.log(filterdata)
    console.log(props.notes)
    return (
        <div className="note-container">
            <select style={{ padding: "3px 5px 3px 5px" }} onChange={Fitler}>
                <option value='all'>All</option>
                <option value='daily'>Daily</option>
                <option value='weekly'>Weekly</option>
                <option value='monthly'>Monthly</option>
                <option value='yearly'>Yearly</option>
            </select>
             <select style={{ padding: "3px 5px 3px 5px" }} onChange={HandleSortedChange} >
                <option value='newest_to_oldest'>Newest to Oldest</option>
                <option value='oldest_to_newest'>Oldest to Newest</option>
            </select>
            <h1 className="all_note_heading" style={{ fontWeight: '900' }}>All Notes</h1>

            {filterdata.reverse().map((note,index) => (
                <div key={note.id}>
                    {note.editing ? <EditComponent note={note} key={note.id} /> :
                        <Note key={note.id} note={note} setdata={setFilterdata}/>}
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
