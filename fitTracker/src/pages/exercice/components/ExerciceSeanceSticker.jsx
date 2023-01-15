/* eslint-disable react/prop-types */
import React from 'react';

function ExerciceSeanceSticker({seanceName}) {
    return (
        <div className='w-30 m-1'>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium  px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ">{seanceName}</span>
        </div>
    );
}

export default ExerciceSeanceSticker;