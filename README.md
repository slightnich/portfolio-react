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
git clone https://github.com/slightnich/portofolio-react
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

## Deployment

### Deploying to Vercel (Website Method)

1. Push your code to GitHub:
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. Go to [Vercel.com](https://vercel.com) and sign up/login with your GitHub account

3. Deploy your project:
   - Click "Add New Project"
   - Import your GitHub repository
   - Select the repository you want to deploy
   - Configure your project:
     - Framework Preset: Vite
     - Build Command: `npm run build`
     - Output Directory: `dist`
     - Install Command: `npm install`

4. Environment Variables (if using email service):
   - Go to Project Settings > Environment Variables
   - Add your environment variables:
     ```
     EMAIL_USER=your.email@gmail.com
     EMAIL_PASS=your_app_password
     ```

5. Click "Deploy" and wait for the build to complete

6. Your site will be available at: `https://your-project-name.vercel.app`

7. For custom domains:
   - Go to Project Settings > Domains
   - Add your custom domain and follow the DNS configuration instructions

### Automatic Updates
- Vercel will automatically deploy when you push changes to your GitHub repository
- You can view deployment history and logs in the Vercel dashboard
- To disable automatic deployments:
  - Go to Project Settings > Git
  - Configure the auto-deployment settings

### Deploying to cPanel

1. Build your project:
```bash
npm run build
```

2. Prepare your files:
   - Compress the `dist` folder into a ZIP file
   - If you're using the email service, also include the `api` folder

3. cPanel Setup:
   - Log in to your cPanel account
   - Navigate to File Manager
   - Go to the directory where you want to deploy your website (usually `public_html` or a subdirectory)
   - Upload and extract the ZIP file

4. For the Node.js API (if using email service):
   - In cPanel, go to Setup Node.js App
   - Click "Create Application"
   - Set your application path (e.g., `/api`)
   - Set your application URL (e.g., `yourdomain.com/api`)
   - Set Node.js version (recommended: 18.x or latest LTS)
   - Set the application startup file: `index.js`
   - Set application mode: Production
   - Click "Create"

5. Configure environment variables in cPanel:
   - In the Node.js app settings, find the "Environment Variables" section
   - Add your environment variables:
     ```
     EMAIL_USER=your.email@gmail.com
     EMAIL_PASS=your_app_password
     ```
   - Save changes and restart the application

6. Update API endpoint:
   - In your frontend code, update the API endpoint to match your domain
   - Rebuild and reupload the frontend if necessary

Note: Make sure your hosting provider supports Node.js if you're planning to use the email service. Some shared hosting plans might not include Node.js support.

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

## Copyright

Copyright 2025 Kens Ransyah. All rights reserved.

This portfolio website and its contents are protected by copyright law. Any unauthorized use, reproduction, or distribution of the content without permission is strictly prohibited.
