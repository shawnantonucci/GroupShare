import React, { useState } from "react";
import styled from "styled-components";

const Locations = () => {
    const [location, setLocation] = useState([
        {
            name: "Shawn"
        }
    ]);

    const [name, setName] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        // alert(`Submitting Name ${name}`);
        const tempName = {
            name
        };
        setLocation(oldLocation => [...oldLocation, tempName]);
    };

    return (
        <div>
            <h3>Locations</h3>
            <CardContainer>
                {location.map(place => {
                    return <Card>{place.name}</Card>;
                })}
            </CardContainer>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        First Name:
                        <input
                            type="text"
                            value={name}
                            onChange={event => setName(event.target.value)}
                        />
                    </label>
                    <button type="submit">submit</button>
                </form>
            </div>
        </div>
    );
};

const CardContainer = styled.div`
    /* border: 1px solid red; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-self: center;
    width: 80%;
    height: auto;
    margin: 0 auto;
`;

const Card = styled.div`
    border: 1px solid red;
    margin: 10px;
    width: 300px;
    height: auto;
`;

export default Locations;
