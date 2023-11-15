import React from 'react';
import styled from "styled-components";
import ReactPlayer from './components/react-player';


function ReactPlayer() {
  return (
    <ReactPlayerContainer>
            <h2> ReactPlayer </h2>
            <ReactPlayer url="" />
    </ReactPlayerContainer>
  )
}

export default ReactPlayer;

const ReactPlayerContainer = styled.div``;

const ReactPlayer = styled.div``;