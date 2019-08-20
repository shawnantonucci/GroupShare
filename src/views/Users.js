import React from "react";
import styled from "styled-components";

const Users = () => {
    return (
        <Container>
            <h4>-Users Online-</h4>
            <p>Shawn Antonucci</p>
        </Container>
    );
};

export default Users;

const Container = styled.div`
    border: 1px solid black;
    background: #ccc;
    display: flex;
    flex-direction: column;
    right: 0;
    width: 20%;
    margin-right: 4%;
    height: auto;
    position: fixed;
    top: 20;

    h4 {
        margin: 0;
    }
    p {
        width: 100%;
        padding: 0;
        margin: 0;
        margin-top: 5px;
    }
`;
