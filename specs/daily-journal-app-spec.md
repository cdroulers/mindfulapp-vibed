# Daily Journaling App - Project Specification

## Overview
An offline-first web application for daily mood journaling using ReactJS, Service Workers, and PouchDB as the browser database.

## Data Model
Each journal entry consists of:
- **Primary Mood**: Good, Neutral, Bad
- **Secondary Mood**: Multiple options based on selected primary mood (e.g., Excited, Energetic, Joyful, Proud, Happy)
- **Description**: Free-text multiline entry for detailed thoughts
- **Behavioral Activation**: One-line entry for planned action for the next day
- **Behavioral Activation Timestamp**: Date entry for the planned action
- **Behavioral Activation Done**: Boolean flag indicating completion status of the action

## Pages & Features

### Main Page
- List of all journal entries in descending order (newest first)
- Entries grouped by week
- "Create New Entry" button in top right corner
- Each entry displays:
  - Date
  - Primary mood (with visual indicator)
  - Secondary mood(s)
  - Description (truncated if necessary)
  - Behavioral activation with timestamp
  - "I did it!" button (disabled if already marked as done)

### Add Entry Modal
- Form with fields for all entry data points
- Primary mood selection (Good, Neutral, Bad)
- Dynamic secondary mood options based on primary mood selection
- Description text area
- Behavioral activation input field
- Date picker for behavioral activation timestamp
- Save and Cancel buttons

### Edit Entry Modal
- Same form as Add Entry Modal, pre-populated with existing entry data
- Ability to modify any field
- Save and Cancel buttons

## Project Tasks

### Setup & Configuration
1. Create React project structure using Vite.js
2. Set up Service Workers for offline functionality
3. Configure PouchDB for local data storage
4. Set up project dependencies:
   - Install and configure React Router for navigation
   - Set up Mantine UI component library
   - Configure necessary Mantine hooks and utilities
5. Create environment configurations (dev/prod)

### Data Layer
1. Create PouchDB database schema and initialization
2. Implement CRUD operations for journal entries
3. Set up data synchronization for offline-first capability
4. Create data validation utilities
5. Implement data migration strategies (if needed for future updates)

### UI Components (using Mantine)
1. Create reusable mood selection component using Mantine SegmentedControl
2. Design and implement entry card component with Mantine Card
3. Develop modal dialog component using Mantine Modal
4. Build form components using Mantine:
   - TextInput for single-line text
   - Textarea for descriptions
   - DatePicker for activation timestamp
   - Checkbox for activation completion
5. Create week separator component with Mantine Divider
6. Implement "I did it!" button with Mantine Button component

### Pages Implementation
1. Develop Main Page layout and functionality
   - Entry listing with week grouping
   - Create new entry button
   - Entry interaction (edit, mark activation as done)
2. Build Add Entry Modal
   - Form validation using Mantine form hooks
   - Dynamic secondary mood options
   - Save functionality
3. Implement Edit Entry Modal
   - Pre-population of existing data
   - Update functionality

### Service Worker Implementation
1. Configure cache strategies for offline access
2. Implement background sync for deferred operations
3. Set up push notifications (optional, for behavioral activation reminders)
4. Handle offline data mutations

### Testing
1. Unit tests for critical components
   - Set up Jest and React Testing Library
   - Test individual components in isolation
   - Test custom hooks and utility functions
2. Integration tests for data flow
   - Test interactions between components
   - Test data persistence and retrieval
3. End-to-end tests using Playwright
   - Set up Playwright test environment
   - Create test fixtures and helpers
   - Test core user flows:
     - Creating a new journal entry
     - Editing an existing entry
     - Marking behavioral activation as done
     - Offline usage and data persistence
     - Syncing data when coming back online
   - Test across multiple browsers (Chrome, Firefox, Safari)
   - Test responsive design with different viewport sizes
   - Test accessibility compliance
4. Offline functionality tests
   - Test application behavior with network disconnected
   - Verify data persistence during offline usage
   - Test synchronization when network is restored
5. Cross-browser compatibility testing
6. Performance testing
   - Load time metrics
   - Interaction responsiveness
   - Database query performance

### Deployment
1. Build optimization with Vite.js
   - Configure optimal build settings for performance
   - Set up code splitting and lazy loading
   - Implement proper caching strategies for static assets
   - Configure service worker in production build
2. Set up CI/CD pipeline using GitHub Actions
   - Create workflow files (.github/workflows)
   - Configure build job:
     - Check out code
     - Set up Node.js environment
     - Install dependencies
     - Run linting and type checking
     - Build application with Vite
   - Configure test job:
     - Run unit and integration tests
     - Execute Playwright tests
     - Generate and publish test reports
   - Configure deployment job:
     - Deploy to staging on PR merge to develop branch
     - Deploy to production on PR merge to main branch
     - Configure environment-specific variables
3. Configure Vercel for hosting
4. GitHub Actions Integration with Vercel
5. Configure Deployment Previews
   - Enable Preview Deployments for pull requests
   - Set up comment bot for PR deployment links
6. Monitoring and Analytics
   - Enable Vercel Analytics in Project Settings
   - Set up performance monitoring for Core Web Vitals
   - Configure error tracking with Sentry integration

## Technical Requirements
- ReactJS for UI components
- Vite.js for build tooling
- Mantine for UI component library
- Service Workers for offline capabilities
- PouchDB for local data storage
- Playwright for end-to-end testing
- GitHub Actions for CI/CD
- Vercel for hosting and deployment
- Responsive design for mobile and desktop use

## Timeline
- Phase 1: Setup basic flow with Vercel deployment
- Phase 2: Setup basic end-to-end tests with Playwright
- Phase 3: Setup basic add entry modal
- Phase 4: Setup main page
- Phase 5: Setup behavioral activation + edit page

## Success Criteria
- Application works completely offline
- Users can create, view, and edit journal entries
- Behavioral activation tracking functions correctly
- Data persists between sessions
- Interface is intuitive and responsive
- All Playwright tests pass across target browsers
- CI/CD pipeline successfully builds and deploys changes
- Vite.js optimized build performs well on performance metrics
- Vercel deployment provides fast loading times globally
