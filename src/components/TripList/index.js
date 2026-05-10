import React, { useCallback, useEffect, useState } from "react";
import "./index.css";
import useFetch from "../../hooks/useFetch";

export default function Index() {
    
    let [url, setUrl] = useState("http://localhost:3001/trips");
    let {data:trips, loading, error} = useFetch(url);
    

    return (
        <div className="container">
            {error && <p>{error}</p>}
            {!error && <div className="flex-container">
                <h1>Ready to go?</h1>
                {loading && <p>loading trips</p>}
                <div>
                    <button onClick={() => setUrl("http://localhost:3001/trips")}>
                        All
                    </button>
                    <button
                        onClick={() =>
                            setUrl("http://localhost:3001/trips?location=Myanmar")
                        }
                    >
                        Trips in Myanmar
                    </button>
                    <button
                        onClick={() =>
                            setUrl("http://localhost:3001/trips?location=Thailand")
                        }
                    >
                        Trips in Thailand
                    </button>
                </div>
                <ul className="trips-list">
                    {trips && trips.map((trip) => (
                        <li key={trip.id} className="trip">
                            <h3>{trip.name}</h3>
                            <p>{trip.price}mmk</p>
                        </li>
                    ))}
                </ul>
            </div>}
            
        </div>
    );
}
