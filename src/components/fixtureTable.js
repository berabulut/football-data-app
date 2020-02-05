import React from 'react';
import Fixture from './fixture';

const FixtureTable  = (props) => (
    <div>
        <div className = "fixture-table-header">
            <h3 className = "fixture-table__title">FİKSTÜR</h3>
        </div>
        <div className = "fixture-table-container">
            <table className = "fixture-table">
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
                                className = "fixture-container"
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