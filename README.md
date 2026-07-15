# Frontend Lifecycle

A modern React monorepo demonstrating how a frontend application moves from development to production using a scalable project structure, shared packages, automated quality checks, CI/CD pipelines, semantic versioning, and AWS deployment.

The purpose of this repository is to serve as a reference implementation of a production-ready frontend workflow rather than just a React application.

---

## Overview

This project explores the complete lifecycle of a frontend application:

```
Development
      │
      ▼
Monorepo Architecture
      │
      ▼
Shared Packages
      │
      ▼
Type Checking
      │
      ▼
Linting
      │
      ▼
Unit Testing
      │
      ▼
GitHub Actions
      │
      ▼
SonarCloud Analysis
      │
      ▼
Semantic Release
      │
      ▼
AWS S3 Deployment
      │
      ▼
CloudFront CDN
```

---

# Project Structure

```
.
├── apps/
│   └── enduser-portal
│
├── packages/
│   ├── ui
│   ├── eslint-config
│   ├── jest-config
│   └── typescript-config
│
├── .github/
│   └── workflows/
│
├── pnpm-workspace.yaml
├── lerna.json
├── sonar-project.properties
└── package.json
```

---

# Technologies Used

## Frontend

- React
- TypeScript
- Vite

## Monorepo

- pnpm Workspaces
- Lerna

## Code Quality

- ESLint
- TypeScript
- SonarCloud

## Testing

- Jest
- React Testing Library

## CI/CD

- GitHub Actions
- Semantic Release

## Deployment

- AWS S3
- AWS CloudFront
- Origin Access Control (OAC)

---

# What This Repository Demonstrates

## Monorepo Architecture

The repository is organized using **pnpm workspaces** and **Lerna**.

Instead of placing everything inside a single React application, common functionality is extracted into reusable packages.

Examples include:

- Shared UI components
- Shared ESLint configuration
- Shared Jest configuration
- Shared TypeScript configuration

This approach keeps multiple applications consistent while avoiding duplicated configuration.

---

## Shared Packages

The `packages/` directory contains reusable modules shared across applications.

```
packages/

ui/
Reusable React components

eslint-config/
Shared lint rules

jest-config/
Shared testing configuration

typescript-config/
Shared tsconfig presets
```

---

## Type Safety

A base TypeScript configuration is shared across the repository.

Each application extends the base configuration instead of maintaining its own independent setup.

Benefits include:

- consistent compiler settings
- reusable configuration
- easier maintenance

---

## Code Quality

ESLint is configured once and shared across all workspaces.

This ensures every project follows the same coding standards.

---

## Testing

Unit testing is configured using:

- Jest
- React Testing Library

The repository includes sample tests and coverage generation to validate application behavior during CI.

---

## Continuous Integration

GitHub Actions automatically validates every Pull Request.

Quality gates include:

- TypeScript compilation
- ESLint
- Unit Tests
- Production Build
- SonarCloud Analysis

No code should be merged unless every quality check succeeds.

---

## SonarCloud

Static code analysis is integrated using SonarCloud.

The analysis provides:

- Code smells
- Bugs
- Security hotspots
- Maintainability metrics
- Quality Gate validation

---

## Semantic Release

Releases are automated using Semantic Release.

The workflow:

- analyzes commit messages
- determines the next version
- generates release notes
- publishes GitHub releases automatically

---

## Deployment

Production builds are deployed automatically.

Deployment flow:

```
GitHub
    │
    ▼
GitHub Actions
    │
    ▼
Production Build
    │
    ▼
AWS S3
    │
    ▼
CloudFront
    │
    ▼
End Users
```

The application is hosted using:

- Amazon S3
- CloudFront CDN
- Origin Access Control (OAC)

The S3 bucket remains private while CloudFront securely serves the application.

---

# CI/CD Workflows

The repository contains multiple GitHub Actions workflows.

## Pull Request

Runs quality checks for incoming pull requests.

---

## Quality Gates

Executes:

- TypeScript
- ESLint
- Unit Tests
- Build
- SonarCloud

---

## Release

Handles:

- Semantic Versioning
- GitHub Releases

---

## Deploy

Deploys the production build to AWS.

---

# Key Learnings

Working on this repository helped me understand:

- Monorepo architecture
- Workspace management
- Shared package design
- Reusable configurations
- GitHub Actions
- CI/CD pipelines
- Branch protection workflows
- Automated testing
- Static code analysis
- Semantic Versioning
- Production deployment
- AWS S3
- CloudFront
- Origin Access Control (OAC)

---

# Running Locally

Install dependencies

```bash
pnpm install
```

Start the development server

```bash
pnpm dev
```

Run tests

```bash
pnpm test
```

Run lint

```bash
pnpm lint
```

Build the project

```bash
pnpm build
```

---

# Future Improvements

- Add additional applications to the monorepo
- Expand shared UI components
- Increase unit test coverage
- Add end-to-end testing
- Automate infrastructure provisioning
- Add monitoring and performance reporting