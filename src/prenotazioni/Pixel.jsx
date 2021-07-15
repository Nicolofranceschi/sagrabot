import { memo, useCallback, forwardRef } from "react";
import useDoubleClick from 'use-double-click';
import { HoverablePixelTavolo, OnlyTavolo, Pixelstyle, PixelTavolo, TestoPixel } from "./Styled";
import { Sedia } from "./Svg";

const Pixel = memo(forwardRef(({ color, type, i, selected, onSelect, getxy, onDoubleClick }, ref) => {
  const selectPixel = useCallback(() => {
    console.log("ciao")
  }, [color, type, selected]);

  const pixelProps = { ref, rotation: selected?.rotation, border: selected?.border };

  const PixelNonSelezionatoTipo0 = () => <Pixelstyle {...pixelProps} selectedColor={color} />;
  const PixelNonSelezionatoTipo1 = () => (
    <HoverablePixelTavolo {...pixelProps} selectedColor={color}>
      <OnlyTavolo />
      <Sedia color={color} selectedColor={color} />
    </HoverablePixelTavolo>
  );
  const PixelNonSelezionatoTipo2 = () => <TestoPixel {...pixelProps} selectedColor={color} />;

  const PixelSelezionatoTipo0 = () => <Pixelstyle {...pixelProps} pixelColor={selected?.color} selectedColor={color} />;
  const PixelSelezionatoTipo1 = () => (
    <PixelTavolo {...pixelProps} selectedColor={color}>
      <OnlyTavolo pixelColor={selected?.color} border={selected?.border} />
      <Sedia color={selected?.color} selectedColor={color} />
    </PixelTavolo>
  );
  const PixelSelezionatoTipo2 = () => <TestoPixel {...pixelProps} contentEditable={true} pixelColor={selected?.color} selectedColor={color}>T</TestoPixel>;

  useDoubleClick({
    onSingleClick: selectPixel,
    ref,
    latency: 250
  });

  if (!selected && type === 2) return <PixelNonSelezionatoTipo2 />;
  if (!selected && type === 1) return <PixelNonSelezionatoTipo1 />;
  if (!selected && type === 0) return <PixelNonSelezionatoTipo0 />;
  if (selected) return (
    <div style={{ overflow: 'hidden' }}>
      {
        selected.type === 2 ? <PixelSelezionatoTipo2 />
          : selected.type === 1 ? <PixelSelezionatoTipo1 />
            : <PixelSelezionatoTipo0 />
      }
      <div />
    </div>
  )
  else return null;
}));

export default Pixel;