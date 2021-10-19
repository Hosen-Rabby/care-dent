import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import css from '../css/style.css'

const SerItem = (props) => {
   

    const {seritemId} = useParams();

    return (
        <div className = 'serItem'>
            {/* {patient} */}
            {seritemId}
        </div>
    );
};

export default SerItem;