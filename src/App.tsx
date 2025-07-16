import React, { useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import Canvas from './components/Canvas';
import ContactInfo from './components/ContactInfo';

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
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-teal-400 to-blue-300">
      <Canvas onPredict={handlePredict} setPrediction={setPrediction} />
      {prediction !== null && (
        <div className="flex flex-col items-center mt-2">
          <div className="bg-white rounded-xl shadow-lg px-8 py-6 border-2 border-blue-400 flex flex-col items-center animate-fade-in">
            <span className="text-5xl font-extrabold text-teal-500 drop-shadow mb-2">{prediction}</span>
            <span className="text-gray-500">Predicted Digit</span>
          </div>
        </div>
      )}
      <ContactInfo />
    </div>
  );
};

export default App;

