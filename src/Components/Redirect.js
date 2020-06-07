import React, {useEffect} from 'react';
import {withRouter} from "react-router-dom";

function Redirect (props) {

    useEffect(redirectToHome, []);

    function redirectToHome() {
        props.history.push("/home");
    }

    return <React.Fragment />;
}

export default withRouter(Redirect);
