import React from 'react';

const  Fixture = (props) => (
    <tr>
        <td className = "fixture__text">{props.fixtureTime}</td>
        <td className = "fixture__text">{props.fixtureHome}</td>
        <td className = "fixture__text">{props.fixtureAway}</td>
        <td className = "fixture__text">{props.fixtureDate}</td>
    </tr>
);

export default Fixture;