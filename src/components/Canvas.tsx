import React, { useRef, useEffect, useState } from 'react';

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

  const startDraw = (e: React.MouseEvent) => {
    const ctx = canvasRef.current!.getContext('2d')!;
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent) => {
    if (!isDrawing) return;
    const ctx = canvasRef.current!.getContext('2d')!;
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
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
    <div className="flex flex-col items-center gap-2">
      <canvas
        ref={canvasRef}
        width={280}
        height={280}
        className="border border-gray-400 bg-black"
        onMouseDown={startDraw}
        onMouseMove={draw}
        onMouseUp={endDraw}
        onMouseLeave={endDraw}
      />
      <div className="flex gap-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handlePredict}>
          Predict
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Canvas;
