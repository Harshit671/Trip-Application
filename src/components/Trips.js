import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "./trip.css";


const tablelist = [

    { Date: "27/4/21", place: "bangalore", type: "trek" },
    { Date: "28/4/21", place: "mumbai", type: "club" },
    { Date: "29/4/21", place: "delhi", type: "tropic" }


]

function Trips() {
    const [filterName, setFilterName] = useState('all');
    const trips = useSelector((state) => {
        console.log("state in Trip.js: ", state)
        return state.trips
    });
    console.log({ trips })
    const [filterData, setFilterData] = useState([]);
    useEffect(() => {

        handleFilterData({ target: { value: 'all' } })
        return () => {
            //cleanup
        }
    }, [])
    const handleFilterData = ({ target: { value: type } }) => {
        console.log({ type })
        setFilterName(type);
        let allTrips = [...trips];
        if (type == 'all') {
            setFilterData(allTrips)
            return true;
        }
        let filter = allTrips.filter(item => item.type === type)
        setFilterData(filter);
    }
    return (
        <div>
            <div className="contain">
                <h1>{`${filterName} Trips`}</h1>

                <table>
                    <tr>
                        <th>Date</th>
                        <th>Place</th>
                        <th>Type</th>
                    </tr>

                    {filterData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.tripDate}</td>
                            <td>{item.place}</td>
                            <td>{item.type}</td>

                        </tr>
                    )
                    )}

                </table>

                <div className="filter_list">

                    <FormControl component="fieldset">
                        <FormLabel component="legend">Filter By</FormLabel>
                        <RadioGroup aria-label="gender" name="filter" value={filterName} onChange={(e) => { setFilterName(e.target.value); handleFilterData(e) }} row>
                            <FormControlLabel value="all" control={<Radio />} label="All" />
                            <FormControlLabel value="club" control={<Radio />} label="Club" />
                            <FormControlLabel value="trek" control={<Radio />} label="Trek" />
                            <FormControlLabel value="tropic" control={<Radio />} label="Tropic" />

                        </RadioGroup>
                    </FormControl>

                </div>
            </div>
        </div >
    )
}

export default Trips
