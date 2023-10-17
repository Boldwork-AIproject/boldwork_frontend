import React from 'react';
import styled from "styled-components";
import { Button } from 'react-bootstrap';

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
    alignSelf: "center",
    marginBottom: 80
}

const PlayerOnlyStyle = {
    position: "relative",
    backgroundColor: "white", 
    border: "1px solid var(--primary-10)", 
    width: 950, 
    height: 65, 
    marginLeft: 24, 
    display: "flex", 
    justifyContent: "flex-start", 
    alignItems: "center",
    borderRadius: 8
}

const ProgressContainer = {
    display: "flex", 
    alignItems: "center", 
    justifyContent: "flex-start"
}

const Progress = {
    position: 'absolute', 
    backgroundColor: 'var(--primary-100', 
    width: '274px', 
    height: '65px', 
    borderRadius: '8px', 
    display: "flex", 
    justifyContent:"flex-start"
}

const PlayPauseButton = () => {
    return (
        <Button style={PlayPauseButtonStyle}>
        <img src="/icons/pause.svg" alt="SVG" width="24" height="28" />
        </Button>
    )
}

const SoundWaveStyle = {
    position: "relative", 
    paddingLeft: 19, 
    paddingRight: 19,
}

const PlayerOnly = () => {
    return (
        <div style={PlayerOnlyStyle}>
            <div style={ProgressContainer}>
                <div style={Progress}></div>
            </div>
            <img src="/icons/sound.png" alt="PNG" width="950" height="31.6" style={SoundWaveStyle}/>
        </div>
    )
}

const Player = () => {
    return (
        <div style={PlayerContainer}>
            <PlayPauseButton/>
            <PlayerOnly />
        </div>
    );
}

export default Player;