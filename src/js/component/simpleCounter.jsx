import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

function SimpleCounter({ digitSix, digitFive, digitFour, digitThree, digitTwo, digitOne }) {
    return (
        <div className="bigCounter">
            <div className="calendar">
                <img src="https://img.icons8.com/m_outlined/512/FFFFFF/clock.png" alt="Imagen" />
            </div>
            <div className="six">{digitSix % 10}</div>
            <div className="five">{digitFive % 10}</div>
            <div className="four">{digitFour % 10}</div>
            <div className="three">{digitThree % 10}</div>
            <div className="two">{digitTwo % 10}</div>
            <div className="one">{digitOne % 10}</div>
        </div>
    );
}

export default SimpleCounter;

