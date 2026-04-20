# 3D Web Project

A modern 3D web application built with React, Vite, and Three.js for rendering interactive 3D models and visualizations.

## Project Structure

```
lastTry3d/
├── client/              # React + Vite frontend application
│   ├── src/
│   │   ├── components/
│   │   │   ├── Background/   # Background and environment components
│   │   │   └── models/       # 3D model components (Lantern, Video, etc.)
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/
│   │   ├── images/      # Image assets
│   │   └── models/      # 3D model files
│   └── vite.config.js
└── README.md            # This file
```

## Technologies

- **React** - UI library
- **Vite** - Fast build tool and development server
- **Three.js** - 3D graphics library (implied from project structure)
- **JavaScript/JSX** - Application code

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd lastTry3d
   ```

2. Install dependencies:
   ```bash
   cd client
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (default Vite port).

### Build

Create a production build:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Linting

Check code quality with ESLint:

```bash
npm run lint
```

## Project Features

- Interactive 3D model rendering
- Background and environment setup
- Video and visual components
- Responsive design with Vite's HMR (Hot Module Replacement)

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source. See LICENSE file for details.
