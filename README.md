# Portfolio Website with React and Node.js

A modern portfolio website built with React, TypeScript, Tailwind CSS, and Node.js. Features include dark/light theme, animations, and a contact form with email functionality.

## Features

- Dark/Light theme
- Smooth animations with Framer Motion
- Fully responsive design
- Contact form with email functionality
- Modern UI with Tailwind CSS
- TypeScript support

## Installation

### Frontend Setup

1. Clone the repository:
```bash
git clone [your-repo-url]
cd portfolio-react
```

2. Install frontend dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

### Backend Setup (Email Service)

1. Navigate to the API directory:
```bash
cd api
```

2. Install backend dependencies:
```bash
npm install
```

3. Configure environment variables:
   - Create a `.env` file in the `api` directory
   - Add the following variables:
```env
EMAIL_USER=your.email@gmail.com
EMAIL_PASS=your_app_password
PORT=3001
```

4. Set up Gmail App Password:
   - Go to your Google Account settings
   - Enable 2-Step Verification if not already enabled
   - Generate an App Password:
     1. Go to Security settings
     2. Under "2-Step Verification", click on "App passwords"
     3. Select "Mail" and "Other (Custom name)"
     4. Generate and copy the password
     5. Paste it in your `.env` file as EMAIL_PASS

5. Start the backend server:
```bash
npm start
```

## Project Structure

```
portfolio-react/
├── src/
│   ├── components/        # React components
│   ├── context/          # Context providers
│   ├── assets/           # Static assets
│   └── App.tsx           # Main application
├── api/
│   ├── server.js         # Backend server
│   └── .env              # Environment variables
└── package.json          # Project dependencies
```

## Available Scripts

In the project directory, you can run:

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Backend
- `npm start` - Start the email server
- `npm run dev` - Start server with hot-reload (requires nodemon)

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Node.js
- Express
- Nodemailer
- Vite

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
