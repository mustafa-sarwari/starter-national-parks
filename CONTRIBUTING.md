# Contributing to National Parks Explorer

First off, thank you for considering contributing to National Parks Explorer! It's people like you that make this project a great tool for everyone.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Development Process](#development-process)
- [Style Guidelines](#style-guidelines)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to gm.sarwari@outlook.com.

## 🤝 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When creating a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples** to demonstrate the steps
- **Describe the behavior you observed** and what you expected
- **Include screenshots or GIFs** if possible
- **Include your environment details** (browser, OS, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear and descriptive title**
- **Provide a detailed description** of the suggested enhancement
- **Explain why this enhancement would be useful** to most users
- **List any similar features** in other applications if applicable

### Your First Code Contribution

Unsure where to begin? You can start by looking through issues tagged with:
- `good-first-issue` - Issues that are good for newcomers
- `help-wanted` - Issues that need assistance

## 🚀 Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/starter-national-parks.git
   cd starter-national-parks
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Create a new branch** for your feature or fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 💻 Development Process

1. **Make your changes** in your feature branch
2. **Test your changes** thoroughly:
   ```bash
   npm start
   ```
   - Test on multiple browsers (Chrome, Firefox, Safari, Edge)
   - Test responsive behavior on different screen sizes
   - Verify accessibility with screen readers if possible

3. **Ensure your code follows the style guidelines** (see below)

4. **Commit your changes** with clear commit messages (see below)

5. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request** from your fork to the main repository

## 🎨 Style Guidelines

### JavaScript Style Guide

- Use **ES6+** syntax when possible (const, let, arrow functions, etc.)
- Use **meaningful variable and function names**
- Add **JSDoc comments** for functions:
  ```javascript
  /**
   * Description of what the function does
   * @param {Type} paramName - Description of parameter
   * @returns {Type} Description of return value
   */
  function exampleFunction(paramName) {
    // function body
  }
  ```
- Follow **consistent indentation** (2 spaces)
- Use **semicolons** consistently
- Keep functions **small and focused** (single responsibility)

### HTML Style Guide

- Use **semantic HTML5** elements (`<header>`, `<main>`, `<section>`, etc.)
- Include proper **ARIA labels** for accessibility
- Keep **consistent indentation** (2 spaces)
- Use **lowercase** for element names and attributes

### CSS Style Guide

- Use **CSS custom properties** (variables) for repeated values
- Follow **BEM naming convention** when appropriate
- Keep **selectors simple and specific**
- Add **comments** for complex styling logic
- Group related properties together
- Use **mobile-first** approach for responsive design

### General Guidelines

- **Write clean, readable code** that others can easily understand
- **Remove commented-out code** before committing
- **Test edge cases** and error handling
- **Consider accessibility** in all implementations
- **Optimize for performance** when possible

## 📝 Commit Messages

Write clear and meaningful commit messages:

- Use the **present tense** ("Add feature" not "Added feature")
- Use the **imperative mood** ("Move cursor to..." not "Moves cursor to...")
- **Limit the first line to 72 characters** or less
- Reference issues and pull requests when relevant

Examples:
```
Add state filter dropdown functionality

Fix search input clearing on empty query

Update README with installation instructions

Refactor park card component for better reusability
```

## 🔄 Pull Request Process

1. **Update the README.md** if you've made changes that affect usage
2. **Update documentation** for any new features or changes
3. **Ensure all tests pass** and the app works correctly
4. **Link to relevant issues** in your PR description
5. **Request review** from maintainers
6. **Address review comments** promptly and professionally

### Pull Request Template

When creating a PR, include:

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
Describe how you tested your changes

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] My code follows the style guidelines
- [ ] I have tested my changes thoroughly
- [ ] I have updated the documentation
- [ ] My changes generate no new warnings
```

## 🙋 Questions?

Feel free to reach out if you have questions:
- Open an issue with the `question` label
- Email: gm.sarwari@outlook.com
- LinkedIn: [mustafa-sarwari](https://www.linkedin.com/in/gm-sarwari/)

## 🎉 Recognition

Contributors will be recognized in the project's README. Thank you for your contributions!

---

**Thank you for contributing to National Parks Explorer! 🏞️**
