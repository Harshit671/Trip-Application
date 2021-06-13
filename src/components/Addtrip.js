import { Button, FormControl, MenuItem,InputLabel, Select, makeStyles } from '@material-ui/core';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTrip } from '../store/actions';
import "./addtrip.css"
import { Input } from '@material-ui/core';

import Trips from './Trips'

export default function Addtrip() {
    const trips = useSelector(state => state.trips);
    const dispatch = useDispatch();

    const [date, setDate] = useState('')
    const [place, setPlace] = useState('')
    const [type, setType] = useState('trek')
    const falsyList = ['', null, 'null', ' ', undefined];
    const validateForm = () => {
        if (falsyList.includes(date) || falsyList.includes(place) || falsyList.includes(type)) {
            return false;
        }
        return true;
    }
    const reset=()=>{
       
        setDate("");
        setPlace('') ;
        setType("") ;
    }
    const handleAddTrip = (e) => {
        e.preventDefault();
        let trip = {
            tripDate: date, place, type
        }
        if (validateForm()) {
            reset();
            dispatch(addTrip(trip));
            console.log("hellllloooooo");
          
        }
        
        }
      
        const useStyles = makeStyles((theme) => ({
            formControl: {
              margin: theme.spacing(1),
              minWidth: 120,
            },
            selectEmpty: {
              marginTop: theme.spacing(2),
            },
          }));       
          const classes = useStyles();
       

    return (
        <div className="Addtrip_page">
            <h1>Add a Trip</h1>
            <form>
                <label>Date:</label>
                <Input  type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                <label>Place:</label>
                <Input type="text" value={place} onChange={(e) => setPlace(e.target.value)} />
                <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={type} 
          onChange={(e) => setType(e.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="trek">Trek</MenuItem>
          <MenuItem value="tropic">Tropic</MenuItem>
          <MenuItem value="Club">Club</MenuItem>
        </Select>
      </FormControl>
                <Button variant="contained" color="primary" onClick={(e) => handleAddTrip(e)}>Addtrip</Button>
            </form>

        </div>
    )
}


