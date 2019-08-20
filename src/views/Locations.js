import React, { useState } from "react";
import styled from "styled-components";

const Locations = () => {
    const [location, setLocation] = useState([
        {
            name: "Los Angeles",
            imgUrl:
                "https://upload.wikimedia.org/wikipedia/commons/3/30/Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg"
        },
        {
            name: "New York",
            imgUrl:
                "https://thenypost.files.wordpress.com/2019/03/190309-nyc-bankrupt.jpg?quality=90&strip=all&w=618&h=410&crop=1"
        },
        {
            name: "Dallas",
            imgUrl:
                "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2019/04/18/1532/Hyatt-Regency-Dallas-P173-Downton-on-River.jpg/Hyatt-Regency-Dallas-P173-Downton-on-River.16x9-V1.jpg?imwidth=1920"
        },
        {
            name: "Albany",
            imgUrl:
                "https://livability.com/sites/default/files/AlbanyNY-DowntownDistrict.jpg"
        }
    ]);

    const [name, setName] = useState("");
    const [imgUrl, setImgUrl] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        // alert(`Submitting Name ${name}`);
        const tempName = {
            name,
            imgUrl
        };
        setLocation(oldLocation => [...oldLocation, tempName]);
    };

    return (
        <LocationContainer>
            <form onSubmit={handleSubmit}>
                <label>
                    Location:
                    <input
                        type="text"
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                </label>
                <label>
                    Image URL:
                    <input
                        type="text"
                        value={imgUrl}
                        onChange={event => setImgUrl(event.target.value)}
                    />
                </label>
                <button type="submit">submit</button>
            </form>
            <div>
                <CardContainer>
                    {location.map(place => {
                        return (
                            <Card>
                                <h3>{place.name}</h3>
                                <img src={place.imgUrl} alt="location" />
                            </Card>
                        );
                    })}
                </CardContainer>
            </div>
        </LocationContainer>
    );
};

const CardContainer = styled.div`
    /* border: 1px solid red; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-self: center;
    margin-top: 30px;
    width: 100%;
    height: auto;
    /* margin: 0 auto; */
`;

const Card = styled.div`
    border: 1px solid black;
    margin: 20px;
    width: 300px;
    height: auto;

    h3 {
        color: blue;
    }

    img {
        width: 90%;
        height: 65%;
    }
`;

const LocationContainer = styled.div`
    display: flex;
    flex-direction: column;

    form {
        position: absolute;
        margin-left: 3%;
    }
`;

export default Locations;
