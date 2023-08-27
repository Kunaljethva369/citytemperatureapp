import React from 'react';
import styled from 'styled-components';
import Main from './Main';

function App() {
    return (
        <Container>
            <h1>Find Your City Temperature Here.</h1>
            <Main />
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    height:100vh;
    width:100%;

`

export default App;
