import React from 'react';
import {Link} from 'react-router-dom';

function LinkPage (props) {

    return (
        <React.Fragment>
            <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
            </ul>
            <hr />
        </React.Fragment>
    );
}


export default LinkPage;
