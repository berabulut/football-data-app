import React from 'react';
import Fixture from './fixture';

const FixtureTable  = (props) => (
    <div className = "premierLeagueFixtureTable__container">
        <h3 className = "premierFixtureTitle">FİKSTÜR</h3>
        <div>
            <table className = "premierLeagueFixtureTable">
                <thead>
                    <tr>
                        <th>SAAT</th>
                        <th>EV SAHİBİ</th>
                        <th>DEPLASMAN</th>
                        <th>TARİH</th>
                    </tr>
                    {
                        props.home.map((data, index) => (
                            <Fixture
                                key = {data}
                                count = { index + 1 }
                                fixtureHome = {data}
                                fixtureAway = {props.away[index]}
                                fixtureDate = {props.date[index]}
                                fixtureTime = {props.time[index]}
                            />
                        ))       
                    }   
                </thead>
            </table>     
        </div>
    </div>
);

export default FixtureTable;