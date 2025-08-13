# Azure Static Web Apps Custom Auth Test

A simple React application to test custom authentication with Azure Static Web Apps.

## Features

This app provides three authentication buttons that redirect to Azure Static Web Apps' built-in authentication endpoints:

- **Microsoft (Azure AD)**: `/.auth/login/aad`
- **Google**: `/.auth/login/google`
- **GitHub**: `/.auth/login/github`

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Deployment to Azure Static Web Apps

1. Push this code to a GitHub repository
2. Create an Azure Static Web Apps resource in the Azure portal
3. Connect it to your GitHub repository
4. Configure the build settings:
   - App location: `/`
   - Build location: `build`
   - API location: (leave empty)

## Authentication Configuration

Make sure to configure the authentication providers in your Azure Static Web Apps resource:

1. Go to your Static Web Apps resource in Azure portal
2. Navigate to Authentication
3. Add identity providers for Microsoft, Google, and GitHub
4. Configure the redirect URLs and client credentials

## Project Structure

```
src/
├── App.js          # Main component with authentication buttons
├── App.css         # Styling for the app
├── index.js        # React app entry point
└── index.css       # Global styles

public/
├── index.html                    # HTML template
└── staticwebapp.config.json     # Azure Static Web Apps configuration
```
