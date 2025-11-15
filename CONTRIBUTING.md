# Contributing to Notes App Frontend

Thank you for your interest in contributing to the Notes App! We welcome contributions from the community.

## How to Contribute

### Reporting Bugs

- Check if the bug has already been reported in Issues
- If not, create a new issue with:
  - Clear description of the bug
  - Steps to reproduce
  - Expected vs actual behavior
  - Screenshots if applicable
  - Your environment details

### Suggesting Features

- Open an issue with the `enhancement` label
- Describe the feature and its benefits
- Provide use cases

### Pull Requests

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Test your changes thoroughly
5. Commit with clear messages: `git commit -m "Add feature: description"`
6. Push to your fork: `git push origin feature/your-feature-name`
7. Open a Pull Request

### Code Style

- Follow existing code patterns
- Use ESLint and Prettier (configs will be added)
- Write meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

### Testing

- Write tests for new features
- Ensure existing tests pass
- Run `npm test` before submitting PR

### Commit Messages

- Use present tense: "Add feature" not "Added feature"
- Be descriptive but concise
- Reference issues when applicable: "Fix #123"

## Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR-USERNAME/notes-app-frontend.git
cd notes-app-frontend

# Install dependencies
npm install

# Create .env file
cp .env.example .env
# Edit .env with your backend API URL

# Start development server
npm run dev
```

## Code of Conduct

Please be respectful and inclusive. See CODE_OF_CONDUCT.md for details.

## Questions?

Feel free to open an issue or reach out to the maintainers.

Thank you for contributing! 🎉
