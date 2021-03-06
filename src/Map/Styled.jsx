import styled from 'styled-components';
import { motion } from "framer-motion";
import Lottie from 'react-lottie';

export const Animation = styled(Lottie)`
  width: 400px;
  bottom: 45vh;
`;

export const Container = styled.div`
  height: 80vh;
  position: absolute;
  top: 20vh;
  border-radius: 20px;
  left: 5vw;
  width: 90vw;
  overflow: scroll;
  //display: flex;
  //justify-content: center;
  //align-items: center;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
  
`;

export const PixelContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const Grid = styled.div.attrs(props => ({
  style: {
    height: `${props.gridSize}px`,
    width: `${props.gridSize}px`,
    gridTemplateColumns: `repeat(50, ${props.pixelSize}px)`,
    gridTemplateRows: `repeat(50, ${props.pixelSize}px)`,
    fontSize: `${props.pixelSize}px`,
  },
}))`
  background-color: var(--black-light);
  display: grid;
`;

export const Pixelstyle = styled.div`
  height: 100%;
  cursor: pointer;
  transform: rotate( ${({ rotation }) => rotation ?? '0'}deg);
  border-radius: ${({ border }) => border ?? '0px'};
  background-color: ${({ pixelColor }) => pixelColor ?? 'var(--black-light)'};
  box-shadow: 0 0 ${({ pixelColor }) => pixelColor ?? 'var(--black-light)'};
`;

export const Title = styled.div`
    
      color: #adaeff;
      font-size: 20px;  
      font-weight: 900;
      
        
`;


export const LoadingDiv= styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-content: space-around;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Inter", sans-serif;
	background-color: mix(#fff, #e91e63, 82%);
`;

export const BottomPopup = styled(motion.div)`
  width: ${props => props.width};
  height: ${props => props.height};
  background: white;
  position: absolute;
  border-radius: 20px 20px 0 0;
  z-index: 50;
  margin-top: ${({ marginBottom }) => marginBottom ? `${-marginBottom}px` : 0};
  bottom: ${({ bottom }) => bottom ? `${bottom}px` : 0};
  @media (min-width: 768px) {
    border-radius: 20px;
    top: 20px;
    right: 20px;  
  }
`;

export const Action = styled.div`
  position: relative;
  top : 0;
  right : 0;
  width: 100%;
  height: 50px;
`;

export const Positiondiv = styled.div`
  position: relative;
  margin-top : 20px;
  padding-left: 5%;
`;

export const Svg = styled.svg`
  position: absolute;
  top : 10px;
  right : 10px;
  height: 30px;
  width: 30px;
  stroke: var(--medium-gray);
  :hover {
    stroke: var(--black-light);
  }
`;

export const InfoText = styled.h3`
  padding-bottom: 10px;
  color:var(--medium-gray);
`;

export const Infodiv = styled.div`
  height: 50px;
  width: 100vw;
  background-color: var(--medium-gray);
  display: flex;
  flex-direction: row;
  border-radius: 20px 20px 0 0;
  opacity: 0.5;
  line-height: 50px;
  text-align: center;
  svg{
    position: relative;
    top : 10px;
    height: 30px;
    width: 30px;
    stroke: var(--black-light);
  }
`;

export const Icon = styled.div`
  height: 50px;
  width: 50px;
  padding-left:5px;
`;

export const Text = styled.h3`
  color:var(--black-light);
`;

export const SelezionaOggetto = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const Quadrato = styled.div`
  height: 50px;
  width: 50px;
  margin-right: 5%;
  border-radius: 5px 5px 5px 5px;
 
  background-color: var(--black-light);
  :hover{
    transform: scale(1.08);
  }
`;

export const Testo = styled.div`
  height: 50px;
  width: 50px;
  margin-right: 5%;
  border-radius: 5px 5px 5px 5px;
  
  text-align: center;
  padding: 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  :hover{
    transform: scale(1.08);
  }
`;

export const TestoPixel = styled.div`
  
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 100%;
  cursor: pointer;
  text-align: center;
  vertical-align: middle;
  padding: 1px;
  line-height: 90%; 
  font-size: 80%;
  font-family: Arial, Helvetica, sans-serif;
  transform: rotate( ${({ rotation }) => rotation ?? '0'}deg);
  border-radius: ${({ border }) => border ?? '0px'};
  color: ${({ pixelColor }) => pixelColor ?? 'var(--black-light)'};
`;


export const Tavolo = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  flex-direction: row;
  svg {
    height: 100%;
    width: 50%;
  }
  :hover {
    transform: scale(1.08);
  }

`;
export const PixelTavolo = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  transform: rotate(${({ rotation }) => rotation ?? '0'}deg);
  border-radius: ${({ border }) => border ?? '0px'};
  svg { width: 50%; }
`;

export const OnlyTavolo = styled.div`
  height: 100%;
  border-radius: ${({ border }) => border ?? '0px'};
  flex-grow: 1;
  box-sizing: border-box;
  background-color: ${({ pixelColor }) => pixelColor ?? 'var(--black-light)'};
`;

export const Posto = styled.div`
  height: 50px;
  width: 25px;
  border-radius: 5px 5px 5px 5px;
  background-color: var(--black-light);
`;

export const PixelRotation = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  top:20px;
  left:70px;
  height: 50px;
  width: 300px;
  border-radius: 20px;
  backdrop-filter: blur(30px);
  z-index:10;
`;


export const HoverablePixelTavolo = styled(PixelTavolo)`
  svg {
    width: 0;
    height: 0;
  }
  :hover > svg {
    width: 50%;
    height: 100%;
  }
`;

export const ColorCircle = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${({ color }) => color};
  margin-right: 7px;
  margin-bottom: 7px;
`;

export const ColorContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;