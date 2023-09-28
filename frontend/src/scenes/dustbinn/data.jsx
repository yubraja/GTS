import React, { useEffect, useState } from 'react';
import { getDistanceValue } from './getDatabase';

function Data() {
    const [distance, setDistance] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const distanceValue = await getDistanceValue();
                setDistance(distanceValue);
            } catch (err) {
                setError(err.message);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            {error ? (
                <p>Error: {error}</p>
            ) : (
                <p>Distance: {distance !== null ? `${distance} cm` : 'Loading...'}</p>
            )}
        </div>
    );
}

export default Data;
