import { useRef, useState, useMemo, useEffect } from "react";
import { usePinch } from 'react-use-gesture';
import useIntersectionObserver from "../useIntersectionObserver";
import { useWindowSize } from "../useWindowSize.js";
import { Container, Grid, LoadingDiv } from "./Styled";
import { getUserDocument } from "../firebase";
import PixelSettings from "./PixelSettings";
import Pixel from './Pixel';
import { toast, ToastContainer } from 'react-toastify';
import { useSala } from "../App";
import Load from "./Animation.json";
import { useHistory } from "react-router-dom";
import ReactLoading from 'react-loading';

const initialGridSize = 1500;
const cellsNumber = 50;
const cells = [...Array(cellsNumber ** 2)];

const getxy = i => {
  const y = Math.trunc(i / cellsNumber);
  const x = i - (cellsNumber * y)
  return { x, y }
}

const SALEUID = 'sala';

export default function Prenotazioni () {
  const history = useHistory();
  const [data, setData] = useState({});

  useEffect(() => {
    async function doStuff () {
      try {
        toast.info("🚀🚀🚀🚀🚀🚀🚀🚀🚀", {
          autoClose: 3000,
          closeOnClick: true,
          draggable: true,
        });
        const res = await getUserDocument(SALEUID);
        if (!res) throw "ERRORE 😞, ricarica";
        toast.info("Stanza creata 🤪", {
          autoClose: 3000,
          closeOnClick: true,
          draggable: true,
        });
        console.log("HO FINITO LA CHIAMATA", res?.sale)
        setData(res?.sale['SAGRA']);
      } catch (error) {
        toast.error(error, {
          autoClose: 5000,
          closeOnClick: true,
          draggable: true,
        });
        history.replace('/');
      }
    }
    doStuff();
  }, []);
  if (Object.keys(data).length === 0) return <Loading />;
  return <MappaPrenotazioni data={data} />
}

function MappaPrenotazioni ({ data }) {
  const history = useHistory();
  const { height, width } = useWindowSize();
  const { prenotazioni: [, setPrenotazioni], user: [user], orario: [orario] } = useSala();

  const [[gridSize, pixelSize], setSize] = useState([initialGridSize, initialGridSize / cellsNumber]);
  
  const [selected, setSelected] = useState({});

  const DrawingGrid = useRef(null);

  usePinch(({ vdva }) => {
    setSize(([currentGridSize]) => {
      if (width < currentGridSize + vdva[0] * 50 && height < currentGridSize + vdva[0] * 50) {
        const newGridSize = currentGridSize + vdva[0] * 50;
        return [newGridSize, gridSize / cellsNumber];
      } else return [currentGridSize, gridSize / cellsNumber];
    });
  }, {
    domTarget: DrawingGrid,
    eventOptions: { passive: false },
  });

  const select = (i) => {
    console.log('ho prenotato il posto ', i, getxy(i));
    setSelected(current => ({ ...current, [i]: { type: 'default' } }));
  };

  const grid = useMemo(() => cells.map((_, i) => (
    <ObservedPixel key={i}>
      {ref => <Pixel i={i} data={data[i]} selected={selected[i]} setSelected={setSelected} orario={orario} onSelect={select} ref={ref} />}
    </ObservedPixel>
  )), [data, selected]);

  const confirm = () => {
    setPrenotazioni([data, selected]);
  }
  
  if (!orario.data || !user) {
    toast.error("Hai perso lo stack di prenotazione, RIPROVA");
    console.log("ERRORE, REDIRECT")
    history.replace('/');
  }

  return (
    <>
      <PixelSettings onClick={confirm} data={orario} selected={selected} setSize={setSize} gridSize={gridSize} pixelSize={pixelSize} />
      <Container ref={DrawingGrid}>
        <Grid gridSize={gridSize} pixelSize={pixelSize} tabIndex={0}>
          {grid}
        </Grid>
      </Container>
    </>
  );
}

const Loading = () => (
  <LoadingDiv>
    <ReactLoading type={"bubbles"} color={"#adaeff"} height={200} width={200} />
  </LoadingDiv>
);

function ObservedPixel({ children }) {
  const ref = useRef();
  const [, setVisible] = useState(false);

  const entry = useIntersectionObserver(ref);
  const isVisible = !!entry?.isIntersecting;

  useEffect(() => { if (isVisible) setVisible(true) }, [isVisible]);
  return isVisible ? children(ref) : <div ref={ref} style={{ backgroundColor: 'hsl(218, 24%, 15%)', borderColor: 'var(--line)' }} />;
}
