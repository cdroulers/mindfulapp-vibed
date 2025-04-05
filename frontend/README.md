# Daily Journal App

An offline-first web application for daily mood journaling using ReactJS, Service Workers, and PouchDB.

## Features

- Offline-first functionality
- Daily mood tracking
- Behavioral activation tracking
- Responsive design
- Modern UI with Mantine components

## Tech Stack

- React + TypeScript
- Vite.js
- Mantine UI
- PouchDB
- Service Workers

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start development server:

   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
  ├── features/           # Feature-based modules
  │   ├── journal/       # Journal feature
  │   └── auth/          # Authentication feature
  ├── shared/            # Shared resources
  │   ├── components/    # Reusable components
  │   ├── hooks/         # Custom hooks
  │   ├── utils/         # Utility functions
  │   ├── types/         # TypeScript types
  │   └── services/      # Services (API, DB, etc.)
  └── App.tsx            # Root component
```

## Development

- The app uses ESLint and Prettier for code formatting
- TypeScript for type safety
- Service Workers for offline functionality
- PouchDB for local data storage

## Testing

```bash
npm run test
```

## License

MIT
