import React, { useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import Canvas from './components/Canvas';
import Card from './components/Card';

const App: React.FC = () => {
  const [model, setModel] = useState<tf.GraphModel | null>(null);
  const [prediction, setPrediction] = useState<number | null>(null);

  useEffect(() => {
    const load = async () => {
      const loadedModel = await tf.loadGraphModel("/model/model.json");
      setModel(loadedModel);
      console.log("Model loaded");
    };
    load();
  }, []);


  const handlePredict = (imageData: ImageData) => {
    if (!model) return;
    setPrediction(null);

    const img = tf.browser.fromPixels(imageData, 1)
      .resizeNearestNeighbor([28, 28])
      .toFloat()
      .div(tf.scalar(255.0))
      .reshape([1, 28, 28, 1]);

    const pred = model.predict(img) as tf.Tensor;
    const index = pred.argMax(1).dataSync()[0];
    
    setPrediction(index);
    
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-teal-500">
      <h1 className="text-3xl font-bold">Digit Recognizer</h1>
      <Canvas onPredict={handlePredict} setPrediction = {setPrediction}/>
      {prediction !== null && (
        <Card text={`Predicted Digit: ${prediction}`} />
      )}
    </div>
  );
};

export default App;

