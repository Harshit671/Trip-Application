import React, { useEffect, useState } from 'react'
import "./home.css"
import { RiSunFill } from "react-icons/ri"
import { GiMountains, GiGasPump } from "react-icons/gi"
import { useSelector } from 'react-redux';
function Home() {

    const trips = useSelector((state) => {
        console.log("state in Trip.js: ", state)
        return state.trips
    });
    const [club, setClub] = useState([]);
    const [trek, setTrek] = useState([]);
    const [tropic, setTropic] = useState([]);
    useEffect(() => {
        let club = [], tropic = [], trek = [];
        trips.map((item) => {
            if (item.type == 'club') {
                club.push(item);
            }
            if (item.type == 'tropic') {
                tropic.push(item)
            }
            if (item.type == 'trek') {
                trek.push(item)
            }
        })
        setTrek(trek);
        setClub(club);
        setTropic(tropic);
    }, [])

    return (
        <>
            <div className="Heading_wrapper">
                <div className="main_heading">
                    <p>{trips.length}  <span>trips</span> </p>

                </div>
                <div className="extra">
                    <p>{club.length}  <span><RiSunFill fontSize="1rem" /></span></p>
                    <p>{trek.length} <span><GiMountains fontSize="1rem" /></span></p>
                    <p>{tropic.length} <span><GiGasPump fontSize="1rem" /></span></p>
                </div>
            </div>
        </>
    )
}

export default Home
