import React from 'react';
import Teams from './teams';

const LeagueTable = (props) => (
    <div>
        <div className = "league-table-header">
            <h3 className = "league-table__title">LİG TABLOSU</h3>
        </div>
        <div className = "league-table-container">
            <table className = "league-table" >
                <thead>
                    <tr>
                        <th>SIRA</th>
                        <th>TAKIM</th>
                        <th>Atılan Gol</th>
                        <th>Yenilen Gol</th>
                        <th>AVERAJ</th>
                        <th>PUAN</th> 
                    </tr>
                    {
                        props.teams.map((data, index) => (
                            <Teams 
                                className = "teams-container"
                                key = {data}
                                count = { index + 1 }
                                team = {data}
                                points = {props.points[index]} 
                                mGoal = {props.mGoal[index]}
                                pGoal = {props.pGoal[index]}
                                avarage = {props.avarage[index]}
                                
                            />
                        ))
                    }
                </thead>
            </table>       
        </div>
    </div>
)

export default LeagueTable;