import React, { useState, useEffect } from 'react';


import PaginatedTable from '../components/MatchesTable';
import schedule from "../images/RLCS_Format.jpg"

import { fetchMatchesPlayed } from '../data/highest_match_played'

import './Details.css'

const Details = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      const getData = async () => {
        const fetchedData = await fetchMatchesPlayed();
        setData(fetchedData);
      };
      getData();
    }, []);

    return (
        <div className="main-content">
          <div className="events-list" id="season_format">
            <h2>Season Format</h2>
            <ul>
              <h3>Fall Split</h3>
                <ul>
                  <li>Regionals 1, 2, 3 (All regions - Invitational Qualifiers, Closed Qualifiers, Main Events)</li>
                  <li>Fall Major - Asia-Pacific Qualifier</li>
                  <li>Fall Major - North America Tiebreaker (Complexity Gaming vs. Spacestation Gaming)</li>
                  <li>Fall Major - Main Events</li>
                </ul>
              <h3>Winter Split</h3>
                <ul>
                  <li>Regionals 1, 2, 3 (All regions - Closed Qualifiers and Main Events)</li>
                  <li>Winter Major - Asia-Pacific Qualifier</li>
                  <li>Winter Major - Main Events</li>
                </ul>
              <h3>Spring Split</h3>
                <ul>
                  <li>Regional 1, 2, 3 (All regions - Closed Qualifiers and Main Events)</li>
                  <li>Spring Major - Asia-Pacific Qualifier</li>
                  <li>Spring Major - Main Event</li>
                </ul>
              <h3>World Championship</h3>
                <ul>
                  <li>Wildcard Stage (Play-In)</li>
                  <li>Group Stage</li>
                  <li>Playoffs</li>
                </ul>
            </ul>
          </div>
          <div className="events-schedule" id="season_schedule">
            <h2>Season Schedule</h2>
            <ul>
              <h3>Fall Split</h3>
                <ul>October 15 - 17: Regional #1 NA, MENA, OCE, APAC S</ul>
                <ul>October 22 - 24: Regional #1 EU, SAM, APAC N</ul>
                <ul>October 29 - 31: Regional #2 NA, MENA, OCE, APAC S</ul>
                <ul>November 5 - 7: Regional #2 EU, SAM, APAC N</ul>
                <ul>November 12 - 14: Regional #3 NA, MENA, OCE, APAC S</ul>
                <ul>November 19 - 21: Regional #3 EU, SAM, APAC N</ul>
                <ul>December 8 - 12: Major</ul>
                <ul>December 13, 2021 - January 2, 2022: Transfer Window</ul>
                <br></br>
              <h3>Winter Split</h3>
                <ul>January 14 - 16: Regional #1 NA, MENA, OCE, APAC S</ul>
                <ul>January 21 - 23: Regional #1 EU, SAM, APAC N</ul>
                <ul>January 28 - 30: Regional #2 NA, MENA, OCE, APAC S</ul>
                <ul>February 4 - 6: Regional #2 EU, SAM, APAC N</ul>
                <ul>February 18 - 20: Regional #3 NA, MENA, OCE, APAC S</ul>
                <ul>February 25 - 27: Regional #3 EU, SAM, APAC N</ul>
                <ul>March 24 - 27: Major</ul>
                <ul>March 28 - April 17: Transfer Window</ul>
              <h3>Spring Split</h3>
                <ul>April 29 - May 1: Regional #1 NA, MENA, OCE, APAC S</ul>
                <ul>May 6 - 8: Regional #1 EU, SAM, APAC N</ul>
                <ul>May 13 - 15: Regional #2 NA, MENA, OCE, APAC S</ul>
                <ul>May 20 - 22: Regional #2 EU, SAM, APAC N</ul>
                <ul>May 27 - 29: Regional #3 NA, MENA, OCE, APAC S</ul>
                <ul>June 3 - 5: Regional #3 EU, SAM, APAC N</ul>
                <ul>June 30 - July 3: Major</ul>
              
              <h3>World Championship</h3>
                <ul>July 22 - 24: Wildcard</ul>
                <ul>July 26 - 31: Main Event</ul>
            </ul>
          </div>
          <img className="scheduleImage" src ={schedule} alt="RLCS 2021-2022 Schedule"></img>
          <PaginatedTable data={data} rowsPerPage={15} />
        </div>
    )
}

export default Details;