import React from "react";
import Locations from "./Locations";
import Users from "./Users";
import styled from "styled-components";

const Dashboard = () => {
    return (
        <Container>
            <Locations />
            <Users />
        </Container>
    );
};

export default Dashboard;

const Container = styled.div`
    display: flex;
    width: 70%;
    height: auto;
    margin-top: 100px;
`;
