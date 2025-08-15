# Contributing to Refixly

We love your input! We want to make contributing to Refixly as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm 8+
- Git

### Setup Development Environment

1. **Fork and Clone**
   ```bash
   git clone https://github.com/YOUR_USERNAME/refixly.git
   cd refixly
   ```

2. **Install Dependencies**
   ```bash
   npm run install:all
   ```

3. **Environment Setup**
   ```bash
   cp env.example .env
   # Edit .env with your configuration
   ```

4. **Start Development Servers**
   ```bash
   npm run dev
   ```

## 🧪 Testing

### Run All Tests
```bash
npm run test
```

### Run Tests with Coverage
```bash
npm run test:coverage
```

### Run Tests in Watch Mode
```bash
# Client tests
npm run test:client

# Server tests  
npm run test:server
```

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

## 📝 Development Workflow

### 1. Create a Feature Branch
```bash
git checkout -b feature/your-feature-name
```

### 2. Make Your Changes
- Write your code
- Add tests for new functionality
- Update documentation if needed

### 3. Quality Checks
```bash
# Run all quality checks
npm run lint
npm run test
npm run format:check
```

### 4. Commit Your Changes
```bash
git add .
git commit -m "feat: add your feature description"
```

### 5. Push and Create PR
```bash
git push origin feature/your-feature-name
```

## 📋 Pull Request Guidelines

### Before Submitting
- [ ] All tests pass
- [ ] Code is linted and formatted
- [ ] Documentation is updated
- [ ] No console.log statements in production code
- [ ] Environment variables are properly configured

### PR Template
Use the provided PR template and fill in all sections:
- Description of changes
- Type of change (bug fix, feature, etc.)
- Testing instructions
- Screenshots (if applicable)

## 🐛 Bug Reports

### Creating a Bug Report
1. Use the bug report template
2. Provide detailed reproduction steps
3. Include expected vs actual behavior
4. Add screenshots/videos if applicable
5. Specify your environment (OS, browser, Node version)

### Example Bug Report
```markdown
**Bug Description**
Brief description of the issue

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. See error

**Expected Behavior**
What should happen

**Actual Behavior**
What actually happens

**Environment**
- OS: Windows 10
- Browser: Chrome 120
- Node: 18.17.0
```

## ✨ Feature Requests

### Creating a Feature Request
1. Use the feature request template
2. Describe the problem you're solving
3. Propose a solution
4. Consider implementation complexity
5. Discuss alternatives

## 🏗️ Project Structure

```
refixly/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── Pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   └── test/          # Test files
│   ├── vitest.config.js   # Test configuration
│   └── package.json
├── server/                # Node.js Backend
│   ├── Controllers/       # Route controllers
│   ├── routes/           # API routes
│   ├── test/             # Test files
│   ├── jest.config.js    # Test configuration
│   └── package.json
├── .github/              # GitHub workflows
├── .prettierrc          # Code formatting
├── package.json         # Root package.json
└── README.md
```

## 🎯 Good First Issues

Look for issues labeled with:
- `good first issue`
- `help wanted`
- `beginner-friendly`

### Suggested First Contributions
- Add unit tests for existing components
- Improve documentation
- Fix minor UI issues
- Add error handling
- Implement accessibility improvements

## 🔧 Development Tools

### Recommended VS Code Extensions
- ESLint
- Prettier
- Jest Runner
- GitLens
- Auto Rename Tag

### VS Code Settings
```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript", "javascriptreact"]
}
```

## 📚 Code Style Guide

### JavaScript/React
- Use functional components with hooks
- Prefer const over let
- Use template literals for string interpolation
- Use destructuring for props and state
- Add PropTypes or TypeScript for type checking

### Naming Conventions
- Components: PascalCase (e.g., `UserProfile`)
- Files: PascalCase for components, camelCase for utilities
- Variables: camelCase
- Constants: UPPER_SNAKE_CASE

### Comments
- Use JSDoc for function documentation
- Add inline comments for complex logic
- Keep comments up to date with code changes

## 🚨 Common Issues

### Build Failures
- Check Node.js version compatibility
- Clear node_modules and reinstall
- Verify environment variables

### Test Failures
- Run tests locally before pushing
- Check for flaky tests
- Verify test environment setup

### Linting Errors
- Use `npm run lint:fix` for auto-fixable issues
- Check ESLint configuration
- Verify Prettier integration

## 🤝 Community Guidelines

### Communication
- Be respectful and inclusive
- Use clear, constructive language
- Ask questions when unsure
- Help others learn

### Code Reviews
- Be constructive and specific
- Focus on the code, not the person
- Suggest improvements respectfully
- Celebrate good work

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 🙏 Acknowledgments

Thank you for contributing to Refixly! Your efforts help make this project better for everyone.

---

**Need Help?** Open an issue or reach out to the maintainers!
