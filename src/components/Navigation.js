import React from "react";
import {Link} from "react-router-dom";
import "./Navigation.css";

function Navigation(){
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to={{
                pathname: "/about",
                state: {fromNavigation: true}
            }}>About</Link>
            {/* link는 라우터 안에만 있을 수 있다.  */}
        </div>
    );
}
export default Navigation;