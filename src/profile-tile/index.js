import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export default ({ id, firstname, surname }) => {
    return (
        <div className="profile-tile">
            <div className="avator">
                <img alt="avator" src="../../assests/men.jpg" />
            </div>
            <div className="profile-information">
                <p>Name:{firstname}</p>
                <p>Id:{id}</p>
                <p>surname:{surname}</p>
                <Link to={`/profile/${id}`}>view complete profile</Link>
            </div>
        </div>
    )
}