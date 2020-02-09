import React from 'react';
import Teams from './teams';
import pLogo from '../styles/pics/pleague.png'

const LeagueTable = (props) => (
    <div className = "premierLeagueTable__container">
        <h3 className = "premierLeagueTitle">PREMIER LEAGUE</h3>
        <div>
            <table className = "premierLeagueTable" >
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
        <img id = "pLogo" src = {pLogo} />
    </div>
)

export default LeagueTable;