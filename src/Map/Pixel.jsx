import { memo, useCallback, forwardRef } from "react";
import { OnlyTavolo, Pixelstyle, PixelTavolo, TestoPixel } from "./Styled";
import { Sedia } from "./Svg";

const PixelNonSelezionatoTipo0 = forwardRef((props, ref) => <div style={{ overflow: 'hidden' , height: "100% "}}><Pixelstyle ref={ref} {...props} /></div>);

const PixelSelezionatoTipo0 = forwardRef(({ color, ...props }, ref) => <Pixelstyle {...props} ref={ref} pixelColor={color} />);

const PixelSelezionatoTipo1 = forwardRef(({ selectPixel, border, color, ...props }, ref) => (
  <div style={{ overflow: 'hidden' , height: "100% "}}>
    <PixelTavolo {...props} ref={ref}>
      <OnlyTavolo pixelColor={color} border={border} />
      <Sedia color={color} />
    </PixelTavolo>
  </div>
));
const PixelSelezionatoTipo2 = forwardRef(({ color, text, ...props }, ref) => <div style={{ overflow: 'hidden',height: "100% " }}><TestoPixel {...props} ref={ref} pixelColor={color}>{text}</TestoPixel></div>);

const PixelPrenotato = forwardRef(({ border, ...props }, ref) => (
  <div style={{ overflow: 'hidden',height: "100% " }}>
    <PixelTavolo {...props} ref={ref}>
      <OnlyTavolo pixelColor={"var(--line)"} border={border} />
      <Sedia color={"var(--line)"} />
    </PixelTavolo>
  </div>
));
const PixelPrenotatoCovidTipo1 = forwardRef(({ ...props }, ref) => (
  <div style={{ overflow: 'hidden' ,height: "100% "}}>
    <PixelTavolo {...props} ref={ref} >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="red">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </PixelTavolo>
  </div>
));

const Pixel = memo(forwardRef(({ i, data, fluo, orario , setWho}, ref) => {

  const pixelProps = { ref, rotation: data?.rotation, border: data?.border };

  const pixelSelezionatoTipo1Props = { ...pixelProps, color: data?.color  };

  const fluoprops = { ...pixelProps, color: "#cfff04" };


  if (!data) return <PixelNonSelezionatoTipo0 {...pixelProps} />;
  if (data.type === 0) return <PixelSelezionatoTipo0 {...pixelProps} color={data?.color} />;
  if (data.type === 2) return <PixelSelezionatoTipo2 color={data?.color} text={data?.text} {...pixelProps} />;
  if (fluo && Object.entries(fluo).some( ([,value]) => value.pixel===i.toString())) return <PixelSelezionatoTipo1 {...fluoprops} />;
  if (!data.prenotazioni || data.prenotazioni.length === 0) return <PixelSelezionatoTipo1 {...pixelSelezionatoTipo1Props} />;
  const prenotazione = data.prenotazioni.find(prenotazione => prenotazione.orario === orario.orario && prenotazione.data === orario.data);
  if (!prenotazione) return <PixelSelezionatoTipo1 {...pixelSelezionatoTipo1Props} />;
  if (prenotazione.type === 'default') return <PixelPrenotato onClick={()=>setWho(data)} border={data?.border} {...pixelProps} />;
  else if (prenotazione.type === 'covid') return <PixelPrenotatoCovidTipo1 {...pixelProps} />;
  else null;
}))

export default Pixel;