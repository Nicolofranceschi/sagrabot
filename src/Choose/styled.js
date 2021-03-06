import styled from "styled-components";
import { motion } from "framer-motion";
  

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 20vh;
  gap: 20px;
  padding: 20px;
`;

export const Line = styled.div`
  height: 35vh;
  width: 1200px;
  display: flex;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
`;


export const Logo = styled.div`
  height: 10vh;
  width: 100vw;
  overflow: hidden;
`;

export const Backdrop = styled.div`
  backdrop-filter: blur(10px);
  border-radius: 0px 0px 20px 20px;
`;

export const Card = styled.div`
  height: 80%;
  width: 200px;
  background-color: var(--line);
  border-radius: 20px;
  color:white;
  margin: 15vh 40px 40px 40px;
  p{
     color: ${props => props.color};
  }
  :hover{
      p{ 
          color:${props => props.color};
      }
  }
`;

export const CardBig = styled.div`
  height: 80%;
  width: 200px;
  background-color: var(--line);
  border-radius: 20px;
  color:white;
  margin: 15vh 40px 40px 40px;
  p{
     color: ${props => props.color};
  }
  :hover{
      p{ 
          color:${props => props.color};
      }
  }
`;

export const CardMenu = styled.div`
  height: 80%;
  width: 300px;
  background-color: white;
  border-radius: 20px;
  margin: 20px;
  p{
      z-index: 1;
      margin-top: -20px;
      margin-bottom: 30px;
      border-radius: 20px;
      margin-left:10px;
      font-size: 30px;
      word-wrap: break-word;
      font-family: Arial, Helvetica, sans-serif;
  }
  :hover{
      p{ 
          color:#ffade3;
      }
  }
`;

export const Giorni = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 110px;
  padding-left: 10px;
  color: white;
`;

export const Orari = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: ${props => props.size};
  padding: ${props => props.padding};
  margin-bottom: auto;
  margin-top: auto;
  color: white;
`;

export const Mese = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 10px;
  padding:15px;
  color: white;
`;

export const Descrizione = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  padding-left:10px;
  margin: 10px;
  color: white;
  z-index:3;
  position: fixed;
  top: ${props => props.vh};
  left: 10px;
`;

export const ButtonTavoli = styled.button`
  position: absolute;
  bottom:2vh;
  left:5vw;
  height: 15vh;
  width: 90vw;
  color: #ffade3;
  font-weight: bold;
  border-radius: 20px;
  background-color: var(--line);
  z-index:10;
`;

export const Data = styled.div`
  position: absolute;
  text-align: center;
  vertical-align: middle;
  line-height: 50px;
  color: white;
  top:20px;
  right:10px;
  height: 50px;
  width: 200px;
  border-radius: 20px;
  backdrop-filter: blur(30px);
  z-index:10;
  p{
    padding-left: 10px;
    font-weight: bold;
  }
`;

export const Back = styled.div`
  position: absolute;
  top:20px;
  left:10px;
  height: 50px;
  width: 50px;
  border-radius: 20px;
  backdrop-filter: blur(30px);
  z-index:10;
  :hover{ 
    transform: scale(1.2);
  }
`;

export const Popup = styled.div`
  position: absolute;
  top:0px;
  left:0px;
  height: 100vh;
  width: 100vw;
  border-radius: 20px;
  backdrop-filter: blur(30px);
  z-index:1000;
 
`;

export const Warinig = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top:10vh;
  left:10vw;
  height: 80vh;
  width: 80vw;
  border-radius: 20px;
  background-color: var(--line);
  z-index:1001;
  
`;

export const FlexButton = styled.div`

  position: absolute;
  display: flex;
  flex-direction: row;
  bottom: 0;
  left : 0;
  height: 20vh;
  width: 80vw;
  border-radius: 20px;
  z-index:1001;
  
`;

export const Scroll = styled.div`

  overflow: scroll;
  max-height: 45vh;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
  
  
`;
export const A = styled.a`

  height: 100%;
  width: 50%;
  
  
`;
export const Hyperlink = styled.a`

  color: #adaeff;
  
  
`;
export const Button = styled.div`

  display: flex;
  flex-direction: column;
  font-size: 50px;
  height: 100%;
  font-weight: bold;
  background-color: ${props => props.bg};
  color: ${props => props.color};
  border-radius: 20px;
  width: ${props => props.width}; ;
  align-items: center;
  align-content: center;
  justify-content: center;
  z-index:1001;

  p{
    font-size: 30px;
    padding-left: 10px;
  }
  span{ 
    font-size: 10px;
    color: white;
    padding: 10px;
  }

  svg{ 
   
    height: 40px;
    :hover{ transform : scale(0.9)}
  }
  
`;

export const Ops = styled.p`
  
  padding: 20px;
  color: white;
  font-size:20px;
  font-weight: bold;
  z-index:1001;
  
`;

export const Text = styled.p`
  
  padding: 20px;
  color: white;
  font-size:15px;
  z-index:1001;
  
  
`;

export const Alert = styled.button`
    position: absolute;
    bottom:5vh;
    left:5vw;
    height: 10vh;
    width: 90vw;
    border-radius: 20px;
    background-color: #adaeff;
    color:white;
    font-weight: bold;
    z-index:10;
`;


export const Svg = styled.svg`
  margin:15px;
  height:20px;
  width:20px;
  stroke: white;
`;




