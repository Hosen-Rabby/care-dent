import React from 'react';
import { useParams } from 'react-router';

const SerItem = () => {

    const {seritemId} = useParams();

    return (
        <div>
            {seritemId}
        </div>
    );
};

export default SerItem;