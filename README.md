
# Trendigo E-Commerce

Welcome to **Trendigo E-Commerce**, a responsive and modern e-commerce platform built with **React**, **Vite**, and **Tailwind CSS**. This project aims to deliver a fast, stylish, and user-friendly online shopping experience. The backend is set up with a Node.js server, providing a complete full-stack solution.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Features

- 🚀 **Fast Development**: Built using Vite for lightning-fast development.
- 🌐 **Responsive UI**: Styled with Tailwind CSS for a clean and mobile-friendly design.
- 🛒 **E-Commerce Functionality**: Supports cart, product management, and more.
- 🔐 **Authentication Ready**: Secure user authentication (setup required in the backend).
- 📈 **Scalable Architecture**: Organized and modular codebase for easy scalability.

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Node.js, Express (check the `server` folder)
- **Database**: To be configured (e.g., PostgreSQL, MongoDB)
- **Others**: ESLint, PostCSS for extended configurations

## Project Structure

```
trendigo-ecommerce
├── client                # Frontend code
│   ├── dist              # Production build files
│   ├── public            # Static assets
│   ├── src               # Source code
│   │   ├── components    # Reusable components
│   │   ├── assets        # Images, icons, etc.
│   │   ├── styles        # Global and component-specific styles
│   ├── index.html        # Entry point for the frontend
│   └── vite.config.js    # Vite configuration
│
└── server                # Backend code
    ├── controllers       # Business logic for routes
    ├── helpers           # Utility functions
    ├── models            # Database models
    ├── routes            # API endpoints
    └── server.js         # Main server file
```

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/trendigo-ecommerce.git
   cd trendigo-ecommerce
   ```

2. **Install dependencies**:

   - For the frontend:
     ```bash
     cd client
     npm install
     ```

   - For the backend:
     ```bash
     cd ../server
     npm install
     ```

## Usage

1. **Run the frontend**:
   ```bash
   cd client
   npm run dev
   ```

2. **Run the backend**:
   ```bash
   cd ../server
   npm start
   ```

3. Open your browser and go to `http://localhost:3000` (or the port specified by Vite) to view the frontend. The backend should be accessible on a separate port (default: `http://localhost:5000`).

## Configuration

- **Environment Variables**: Create an `.env` file in the `server` folder with the necessary environment variables:
  ```plaintext
  PORT=5000
  DATABASE_URL=your_database_url
  JWT_SECRET=your_jwt_secret
  ```

- **Vite Configuration**: Customize `vite.config.js` in the `client` folder if needed for proxying API requests or for additional Vite plugins.

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make your changes and commit (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
