import { useRef, useState, lazy, Suspense, useMemo, useEffect } from "react";
import { usePinch } from 'react-use-gesture';
import useIntersectionObserver from "../useIntersectionObserver";
import { useWindowSize } from "../useWindowSize.js";
import { Container, Grid } from "./Styled";
import { updateUserDocument, getUserDocument } from "../firebase";
import PixelSettings from "./PixelSettings";
import { ToastContainer, toast } from 'react-toastify';

const Pixel = lazy(() => import('./Pixel.jsx'));

const initialGridSize = 2500;
const cellsNumber = 50;
const cells = [...Array(cellsNumber ** 2)];

const getIndexFromXY = (x, y) => cellsNumber * y + x;

const getxy = i => {
  const y = Math.trunc(i / cellsNumber);
  const x = i - (cellsNumber * y)
  return { x, y }
}

function getClosePlaces(i) {
  const { x, y } = getxy(i);
  return [
    getIndexFromXY(x + 1, y + 0),
    getIndexFromXY(x + 1, y + 1),
    getIndexFromXY(x + 1, y - 1),
    getIndexFromXY(x + 0, y + 1),
    getIndexFromXY(x + 0, y - 1),
    getIndexFromXY(x - 1, y + 0),
    getIndexFromXY(x - 1, y + 1),
    getIndexFromXY(x - 1, y - 1),
  ]
}

const SALEUID = 'sala';

const getCovidPixels = (occupied, available) => Object.entries(occupied).reduce((acc, [i, spot]) => ({
  ...acc,
  [i]: spot,
  ...(getClosePlaces(i).filter(close => {
    if (!available[close] || available[close].type !== 1) return false;
    if (occupied[close]) return false;
    else return true;
  }).reduce((internalAcc, j) => ({ ...internalAcc, [j]: { type: 'covid' } }), {}))
}), {});

export default function Prenotazioni() {
  const [[gridSize, pixelSize], setSize] = useState([initialGridSize, initialGridSize / cellsNumber]);
  const [data, setData] = useState({});
  const [selected, setSelected] = useState({});

  console.log(getCovidPixels(selected, data));

  const DrawingGrid = useRef(null);
  const { height, width } = useWindowSize();

  useEffect(async ()=> {
  try {
        const res = await getUserDocument(SALEUID);
        if (!res) throw "No connection"
        setData(res?.sale['SAGRA']); 
    } catch (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 2000,
        closeOnClick: true,
        draggable: true,
      });
    }
  }, []);

  console.log(data);
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
    setSelected(current => ({ ...current, [i]: { type: 'default' } }))
  };

  const grid = useMemo(() => cells.map((_, i) => (
    <ObservedPixel key={i}>
      {ref => <Pixel i={i} data={data[i]} selected={selected[i]} onSelect={select} ref={ref} />}
    </ObservedPixel>
  )), [data, selected]);

  const confirm = async () => {
    const covidPixels = getCovidPixels(selected, data);
    const newData = Object.entries(data).reduce((acc, [key, value]) => {
      const selectedSpot = covidPixels[key];
      return {
        ...acc,
        [key]: { ...value, prenotazioni: [
          ...value?.prenotazioni ?? [],
          ...(selectedSpot ? [{ ...selectedSpot, time: new Date(), user: '3495141095' }] : [])
        ] }
      };
    }, {});
    try {
      console.log(newData)
      const res = await updateUserDocument({ uid: SALEUID }, newData);
      console.log('risultato firebase salvataggio dati', res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Suspense fallback={<Loading />}>
       <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <PixelSettings onClick={confirm} />
      <Container ref={DrawingGrid}>
        <Grid gridSize={gridSize} pixelSize={pixelSize} tabIndex={0}>
          {grid}
        </Grid>
      </Container>
    </Suspense>
  );
}

const Loading = () => <span>Loading...</span>;

function ObservedPixel({ children }) {
  const ref = useRef();
  const [, setVisible] = useState(false);

  const entry = useIntersectionObserver(ref);
  const isVisible = !!entry?.isIntersecting;

  useEffect(() => { if (isVisible) setVisible(true) }, [isVisible]);
  return isVisible ? children(ref) : <div ref={ref} style={{ backgroundColor: 'hsl(218, 24%, 15%)' }} />;
}