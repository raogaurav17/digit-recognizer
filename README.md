# Digit Recognizer

Digit Recognizer is a modern web application that allows users to draw a digit (0-9) on a canvas and predicts the digit using a trained machine learning model. The app is built with React, TypeScript, Vite, and TensorFlow.js, and features a beautiful, responsive UI with touch and mouse support.

## Features

- Draw digits on a canvas using mouse or touch (mobile-friendly)
- Predicts the drawn digit using a TensorFlow.js model
- Visually appealing and responsive design
- Modern header and contact info section
- Easy to clear and redraw

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/raogaurav17/digit-recognizer.git
   cd digit-predictor
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Model Files

Place your trained TensorFlow.js model files (`model.json` and `.bin` files) in the `public/model/` directory. The app loads the model from `/model/model.json`.

## Project Structure

```
├── public/
│   └── model/
│       ├── model.json
│       └── group1-shard1of1.bin
├── src/
│   ├── components/
│   │   ├── Canvas.tsx
│   │   ├── Card.tsx
│   │   └── ContactInfo.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Technologies Used

- React
- TypeScript
- Vite
- TensorFlow.js
- Tailwind CSS

## Customization

- Update your contact information in `src/components/ContactInfo.tsx`.
- Replace the demo model with your own trained model for digit recognition.

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements, bug fixes, or new features.

## License

This project is licensed under the MIT License.

## Contact

For questions, feedback, or collaboration, reach out via:

- Email: ydv17gaurav@gmail.com
- GitHub: [raogaurav17](https://github.com/raogaurav17)
- LinkedIn: [ydv17gaurav](https://linkedin.com/in/ydv17gaurav)
