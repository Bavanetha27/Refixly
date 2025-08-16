# Development Guide

This document provides detailed information for developers working on the Refixly project.

## 🏗️ Architecture Overview

Refixly is a full-stack web application with the following architecture:

### Frontend (React + Vite)
- **Framework**: React 19 with Vite
- **Styling**: Tailwind CSS
- **State Management**: React hooks and context
- **Testing**: Vitest + React Testing Library
- **Build Tool**: Vite

### Backend (Node.js + Express)
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (planned)
- **Testing**: Jest + Supertest
- **Authentication**: Firebase Auth

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm 8+
- Git
- MongoDB (for local development)

### Initial Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Bavanetha27/refixly.git
   cd refixly
   ```

2. **Install dependencies**
   ```bash
   npm run install:all
   ```

3. **Environment configuration**
   ```bash
   cp env.example .env
   # Edit .env with your configuration
   ```

4. **Start development servers**
   ```bash
   npm run dev
   ```

This will start both the client (port 5173) and server (port 5000) in development mode.

## 📁 Project Structure

```
refixly/
├── client/                    # React Frontend
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   │   ├── AIDamageDetection.jsx
│   │   │   ├── AIResponseSection.jsx
│   │   │   ├── FAQAccordion.jsx
│   │   │   ├── FluidCursor.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── HomeFAQ.jsx
│   │   │   ├── NavBar.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   ├── ScrollTop.jsx
│   │   │   └── Tour.jsx
│   │   ├── Pages/            # Page components
│   │   │   ├── Community.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── LandingPage.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── ProfilePage.jsx
│   │   │   ├── ScanPage.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── Tutorial.jsx
│   │   │   └── TutorialsPage.jsx
│   │   ├── hooks/            # Custom React hooks
│   │   │   ├── useAuth.js
│   │   │   └── useFluidCursor.js
│   │   ├── assets/           # Static assets
│   │   ├── test/             # Test files
│   │   ├── App.jsx           # Main App component
│   │   ├── main.jsx          # Entry point
│   │   └── firebase.js       # Firebase configuration
│   ├── public/               # Public assets
│   ├── vitest.config.js      # Test configuration
│   ├── vite.config.js        # Vite configuration
│   ├── tailwind.config.js    # Tailwind configuration
│   └── package.json
├── server/                   # Node.js Backend
│   ├── Controllers/          # Route controllers
│   │   ├── aidamdet.Conrtroller.js
│   │   └── tutorialController.js
│   ├── routes/               # API routes
│   │   ├── aidamdet.route.js
│   │   └── tutorials.js
│   ├── test/                 # Test files
│   ├── server.js             # Main server file
│   ├── jest.config.js        # Jest configuration
│   ├── .eslintrc.js          # ESLint configuration
│   └── package.json
├── .github/                  # GitHub workflows
│   └── workflows/
│       ├── ci.yml            # CI pipeline
│       └── deploy.yml        # Deployment pipeline
├── .prettierrc              # Prettier configuration
├── .gitignore               # Git ignore rules
├── package.json             # Root package.json
├── README.md                # Project documentation
├── CONTRIBUTING.md          # Contribution guidelines
├── CODE_OF_CONDUCT.md       # Community guidelines
└── DEVELOPMENT.md           # This file
```

## 🧪 Testing

### Frontend Testing (Vitest)

```bash
# Run all tests
npm run test:client

# Run tests in watch mode
npm run test:client -- --watch

# Run tests with coverage
npm run test:client -- --coverage

# Run tests with UI
npm run test:client -- --ui
```

### Backend Testing (Jest)

```bash
# Run all tests
npm run test:server

# Run tests in watch mode
npm run test:server -- --watch

# Run tests with coverage
npm run test:server -- --coverage
```

### Test Structure

#### Frontend Tests
- **Location**: `client/src/test/`
- **Framework**: Vitest + React Testing Library
- **Coverage**: Components, hooks, utilities

#### Backend Tests
- **Location**: `server/test/`
- **Framework**: Jest + Supertest
- **Coverage**: Controllers, routes, utilities

## 🔍 Code Quality

### Linting

```bash
# Check for linting issues
npm run lint

# Fix auto-fixable issues
npm run lint:fix
```

### Formatting

```bash
# Format all files
npm run format

# Check formatting
npm run format:check
```

### Configuration Files

- **ESLint**: `.eslintrc.js` (server), `eslint.config.js` (client)
- **Prettier**: `.prettierrc`
- **Git Hooks**: Configured via package.json scripts

## 🚀 Development Workflow

### 1. Feature Development

```bash
# Create feature branch
git checkout -b feature/your-feature-name

# Make changes
# ... your code changes ...

# Run quality checks
npm run lint
npm run test
npm run format:check

# Commit changes
git add .
git commit -m "feat: add your feature"

# Push and create PR
git push origin feature/your-feature-name
```

### 2. Bug Fixes

```bash
# Create fix branch
git checkout -b fix/bug-description

# Fix the bug
# ... your fixes ...

# Add tests for the fix
# ... test code ...

# Commit and push
git add .
git commit -m "fix: resolve bug description"
git push origin fix/bug-description
```

## 🔧 Development Tools

### VS Code Extensions

Recommended extensions for development:

```json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "ms-vscode.vscode-typescript-next",
    "bradlc.vscode-tailwindcss",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense",
    "ms-vscode.vscode-json"
  ]
}
```

### VS Code Settings

Create `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript", "javascriptreact"],
  "tailwindCSS.includeLanguages": {
    "javascript": "javascript",
    "html": "HTML"
  },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  }
}
```

## 🌐 Environment Configuration

### Required Environment Variables

#### Client (.env)
```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_MEASUREMENT_ID=your_measurement_id
```

#### Server (.env)
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
YOUTUBE_API_KEY=your_youtube_api_key
```

### Development vs Production

- **Development**: Uses local environment variables
- **Production**: Uses deployment platform environment variables
- **Testing**: Uses test-specific environment variables

## 📦 Build and Deployment

### Local Build

```bash
# Build both client and server
npm run build

# Build client only
npm run build:client

# Build server only
npm run build:server
```

### Deployment

The project uses GitHub Actions for CI/CD:

1. **CI Pipeline** (`.github/workflows/ci.yml`)
   - Runs on every push and PR
   - Lints code
   - Runs tests
   - Checks formatting
   - Builds project

2. **Deployment Pipeline** (`.github/workflows/deploy.yml`)
   - Deploys to Vercel (frontend)
   - Deploys to Render (backend)
   - Runs on main branch pushes

## 🔍 Debugging

### Frontend Debugging

1. **Browser DevTools**
   - React Developer Tools
   - Network tab for API calls
   - Console for errors

2. **Vite DevTools**
   - Hot module replacement
   - Build analysis
   - Performance profiling

### Backend Debugging

1. **Node.js Debugging**
   ```bash
   # Start server in debug mode
   node --inspect server.js
   ```

2. **Logging**
   - Use console.log for development
   - Implement proper logging for production

## 🚨 Common Issues and Solutions

### Build Issues

**Problem**: Build fails with dependency errors
**Solution**: 
```bash
npm run clean
npm run install:all
```

**Problem**: ESLint configuration conflicts
**Solution**: 
```bash
npm run lint:fix
```

### Test Issues

**Problem**: Tests fail in CI but pass locally
**Solution**: 
- Check environment variables
- Verify Node.js version
- Clear test cache

**Problem**: Coverage reports not generating
**Solution**: 
```bash
npm run test:coverage
```

### Development Server Issues

**Problem**: Port conflicts
**Solution**: 
- Change ports in environment variables
- Kill processes using the ports

**Problem**: Hot reload not working
**Solution**: 
- Check file watching limits
- Restart development server

## 📚 Additional Resources

### Documentation
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Express.js Documentation](https://expressjs.com/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Vitest Documentation](https://vitest.dev/)

### Community
- [GitHub Issues](https://github.com/Bavanetha27/refixly/issues)
- [Discussions](https://github.com/Bavanetha27/refixly/discussions)

---

**Need Help?** 
- Check the [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines
- Open an issue for bugs or feature requests
- Join the community discussions
