import React from 'react';
import styled from "styled-components";
import { Container, Button } from 'react-bootstrap';

const PlayPauseButtonStyle = {
    backgroundColor: "var(--neutral-60)",
    width: 65,
    height: 65,
    border: "none",
}

const PlayerContainer = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
}

const PlayPauseButton = () => {
    return (
        <Container style={PlayerContainer}>
            <Button style={PlayPauseButtonStyle}>
            <img src="/icons/pause.svg" alt="SVG" width="24" height="28" />
            </Button>
        </Container>
    )
}

const PlayerOnly = () => {
    return (
        <Container style={{backgroundColor: "white", border: "1px solid var(--primary-10)", width: 950, height: 65, marginLeft: 24}}>
            <img src="/icons/sound.png" alt="PNG" width="905" height="31.6" />
        </Container>
    )
}

const Player = () => {
    return (
        <Container style={PlayerContainer}>
            <PlayPauseButton/>
            <PlayerOnly />
        </Container>
    );
}

export default Player;