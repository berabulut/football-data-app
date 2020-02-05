import React from 'react';


const Team  = (props) => (
    <tr>
        <td className = "pLeague-team__text">{props.count}</td>
        <td className = "pLeague-team__text">{props.team}</td>
        <td className = "pLeague-team__text">{props.pGoal}</td>
        <td className = "pLeague-team__text">{props.mGoal}</td>
        <td className = "pLeague-team__text">{props.avarage}</td>
        <td className = "pLeague-team__text">{props.points}</td>   
    </tr>
)

export default Team;

 
 // console.log(data.team.name)
 // console.log(index + 1)