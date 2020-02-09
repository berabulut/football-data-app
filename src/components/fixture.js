import React from 'react';

const  Fixture = (props) => (
    <tr>
        <td>{props.fixtureTime}</td>
        <td>{props.fixtureHome}</td>
        <td>{props.fixtureAway}</td>
        <td>{props.fixtureDate}</td>
    </tr>
);

export default Fixture;