import React, { useRef, useState, useEffect, useCallback } from 'react';
import styled from "styled-components";
import { Button } from 'react-bootstrap';

import WaveSurfer from 'https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.esm.js'
import RegionsPlugin from 'https://unpkg.com/wavesurfer.js@7/dist/plugins/regions.esm.js'

// WaveSurfer hook
const useWavesurfer = (containerRef, options) => {
    const [wavesurfer, setWavesurfer] = useState(null)
  
    // Initialize wavesurfer when the container mounts
    // or any of the props change
    useEffect(() => {
      if (!containerRef.current) return
  
      const ws = WaveSurfer.create({
        ...options,
        container: containerRef.current,
      })
  
      setWavesurfer(ws)
  
      return () => {
        ws.destroy()
      }
    }, [options, containerRef])
  
    return wavesurfer
}

const WaveSurferPlayer = (props) => {
    const containerRef = useRef()
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const wavesurfer = useWavesurfer(containerRef, props)
  
    // On play button click
    const onPlayClick = useCallback(() => {
      wavesurfer.isPlaying() ? wavesurfer.pause() : wavesurfer.play()
    }, [wavesurfer])
  
    // Initialize wavesurfer when the container mounts
    // or any of the props change
    useEffect(() => {
      if (!wavesurfer) return
  
      setCurrentTime(0)
      setIsPlaying(false)
  
      const subscriptions = [
        wavesurfer.on('play', () => setIsPlaying(true)),
        wavesurfer.on('pause', () => setIsPlaying(false)),
        wavesurfer.on('timeupdate', (currentTime) => setCurrentTime(currentTime)),
      ]
  
      return () => {
        subscriptions.forEach((unsub) => unsub())
      }
    }, [wavesurfer])
  
    return (
      <div class="waveform" style={PlayerContainer}>
        <Button onClick={onPlayClick} style={PlayPauseButtonStyle}>
          { isPlaying ? (
            <img src="/icons/pause.svg" alt="SVG" width="24" height="28" />) : (
            <img src="/icons/play.svg" alt="SVG" width="55" height="63" />)
          }
        </Button>

        <div ref={containerRef} style={PlayerStyle}/>
      </div>
    )
  }

const PlayPauseButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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

const PlayerStyle = {
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

const PlayPauseButton = () => {
    return (
        <Button style={PlayPauseButtonStyle}>
        {/*<img src="/icons/pause.svg" alt="SVG" width="24" height="28" />*/}
        <img src="/icons/svg/play.svg" alt="SVG" width="24" height="28" />
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

const Player = ({ audio_file }) => {
  console.log("Player audio: ", audio_file);

  const audioUrl = `http://localhost:8000${audio_file}`;
  //const audioUrl = `../../backend${audio_file}`;
  console.log("Edited full audio url: ", audioUrl);

  const sample_audio = '/sample_audio/sample_audio.mp3';

    return (
        <WaveSurferPlayer
            width={950}
            height={60}
            waveColor='#4A42FF'
            progressColor='grey'
            barWidth='4'
            barGap='9'
            barRadius='4'
            url={sample_audio}
        />
    );
}

export default Player;