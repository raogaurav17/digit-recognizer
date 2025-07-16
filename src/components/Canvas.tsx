import React, { useRef, useEffect, useState } from 'react';


const Header: React.FC = () => (
  <div className="w-full flex flex-col items-center py-3">
    <h1 className="text-4xl font-extrabold text-blue-600 drop-shadow mb-2 tracking-wide">Digit Predictor</h1>
    <p className="text-lg text-gray-600">Draw a digit below and click Predict!</p>
  </div>
);

const Canvas: React.FC<{
  onPredict: (imageData: ImageData) => void;
  setPrediction: React.Dispatch<React.SetStateAction<number | null>>;
}> = ({ onPredict, setPrediction }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    ctx.lineWidth = 20;
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'white';
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const getPosition = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    if ('touches' in e) {
      const touch = e.touches[0];
      return {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top
      };
    }
    return {
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY
    };
  };

  const startDraw = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    const ctx = canvasRef.current!.getContext('2d')!;
    const { x, y } = getPosition(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    e.preventDefault();
    const ctx = canvasRef.current!.getContext('2d')!;
    const { x, y } = getPosition(e);
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const endDraw = () => {
    setIsDrawing(false);
  };

  const handleClear = () => {
    const ctx = canvasRef.current!.getContext('2d')!;
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvasRef.current!.width, canvasRef.current!.height);
    setPrediction(null);
  };

  const handlePredict = () => {
    const ctx = canvasRef.current!.getContext('2d')!;
    const imageData = ctx.getImageData(0, 0, canvasRef.current!.width, canvasRef.current!.height);
    console.log("Sending image data for prediction...");
    onPredict(imageData);
  };

  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <Header />
      <canvas
        ref={canvasRef}
        width={280}
        height={280}
        className="border-4 border-blue-300 rounded-lg bg-black shadow-lg"
        onMouseDown={startDraw}
        onMouseMove={draw}
        onMouseUp={endDraw}
        onMouseLeave={endDraw}
        onTouchStart={startDraw}
        onTouchMove={draw}
        onTouchEnd={endDraw}
      />
      <div className="flex gap-4 mt-4">
        <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-lg font-semibold shadow hover:scale-105 transition-transform duration-150" onClick={handlePredict}>
          Predict
        </button>
        <button className="bg-gradient-to-r from-red-500 to-red-700 text-white px-6 py-2 rounded-lg font-semibold shadow hover:scale-105 transition-transform duration-150" onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Canvas;