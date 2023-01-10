import React from 'react';

// eslint-disable-next-line react/prop-types
function ExerciceCard({ id, nom, muscleCible }) {
    return (

        <div className="flex justify-center mr-5 md:w-1/6 w-full mt-3 md:mr-3">
            <div className="flex flex-col w-full md:w-full bg-orange-100 rounded-lg shadow-lg ">
                <div className="p-6 flex flex-col justify-start">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{nom}</h5>
                    <p className="text-gray-700 text-base mb-4">
                        Nbr Rep : 6
                    </p>
                    <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
                </div>
            </div>
        </div>
    );
}

export default ExerciceCard;