# Financial Web Application

A modern financial planning web application built with Next.js that helps users calculate their emergency fund requirements based on their financial profile.

## 🚀 Features

- **Emergency Fund Calculator**: Calculate 6x and 12x emergency fund requirements
- **Financial Profile Input**: Input salary, rent, utilities, loans, personal expenses, and investments
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS
- **Real-time Calculations**: Instant calculation updates as you input financial data

## 🏗️ Architecture

### Frontend Stack
- **Next.js 11.1.2**: React framework for production
- **React 17.0.2**: UI library
- **Tailwind CSS 2.2.15**: Utility-first CSS framework
- **PostCSS**: CSS processing

### Project Structure
```
financial-web/
├── pages/                 # Next.js pages directory
│   ├── _app.js           # App wrapper component
│   ├── index.js          # Main emergency fund calculator page
│   └── api/              # API routes
│       └── hello.js      # Example API endpoint
├── public/               # Static assets
├── styles/               # Global styles
│   └── globals.css       # Global CSS with Tailwind imports
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
└── next.config.js        # Next.js configuration
```

### Key Components

#### Emergency Fund Calculator (`pages/index.js`)
- **State Management**: Uses React hooks (`useState`) for form data
- **Form Inputs**: Salary, rent, utilities, EMI/loans, personal expenses, investments
- **Calculation Logic**: Computes 6x and 12x emergency fund requirements
- **Responsive Grid**: Uses Tailwind's grid system for responsive layout

#### Styling Architecture
- **Tailwind CSS**: Utility-first approach for rapid UI development
- **Responsive Design**: Mobile-first responsive breakpoints
- **Component Styling**: Inline Tailwind classes for consistent design

## 🛠️ Technology Stack

### Core Dependencies
- **Next.js**: 11.1.2 - React framework with SSR/SSG capabilities
- **React**: 17.0.2 - UI library
- **React DOM**: 17.0.2 - React rendering for web

### Development Dependencies
- **ESLint**: 7.32.0 - Code linting
- **ESLint Config Next**: 11.1.2 - Next.js specific linting rules
- **Tailwind CSS**: 2.2.15 - Utility-first CSS framework
- **PostCSS**: 8.3.6 - CSS processing
- **Autoprefixer**: 10.3.4 - CSS vendor prefixing

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd financial-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📊 How It Works

### Emergency Fund Calculation
The application calculates emergency fund requirements based on the following formula:
- **6x Emergency Fund**: 6 times your monthly salary
- **12x Emergency Fund**: 12 times your monthly salary

### Input Fields
- **Salary**: Monthly income
- **Rent**: Monthly rent payment
- **Utilities, Food, Gas**: Monthly utility and living expenses
- **EMI/Loan**: Monthly loan payments
- **Personal Expenses**: Other monthly personal expenses
- **Investment**: Monthly investment contributions

## 🎨 UI/UX Features

- **Clean Interface**: Minimalist design focused on functionality
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile
- **Form Validation**: Input fields with proper styling and focus states
- **Instant Feedback**: Real-time calculation updates
- **Accessibility**: Proper labels and semantic HTML structure

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS for styling with a custom configuration in `tailwind.config.js`:
- Purge CSS for production builds
- Custom theme extensions available
- Responsive breakpoints configured

### Next.js
- API routes support for backend functionality
- Static file serving from `public/` directory
- Optimized builds with automatic code splitting

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms
The application can be deployed to any platform that supports Node.js:
- Netlify
- AWS Amplify
- Heroku
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔮 Future Enhancements

- [ ] Add more financial calculators (retirement, investment, etc.)
- [ ] Implement data persistence with local storage
- [ ] Add charts and visualizations
- [ ] Create user accounts and profile management
- [ ] Add export functionality for financial reports
- [ ] Implement dark mode theme
- [ ] Add unit tests and integration tests

## 📞 Support

For support and questions, please open an issue in the GitHub repository or contact https://ravindrasinghshah.com/.
