# FinTech Ecommerce Platform

A modern, responsive ecommerce platform for financial products built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Beautiful Homepage**: Engaging hero section, product showcase, testimonials, and feature highlights
- **BI Dashboard**: Comprehensive analytics with charts, tables, and data visualization
- **AI Assistant**: Interactive chat assistant powered by OpenAI to help users with financial questions
- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, professional design with animations and transitions

## Tech Stack

- **Frontend Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Chart.js with react-chartjs-2
- **Icons**: React Icons
- **Animations**: Framer Motion
- **UI Components**: Headless UI
- **AI Integration**: OpenAI API

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/fintech-ecommerce.git
cd fintech-ecommerce
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
   - Create a `.env.local` file in the root directory
   - Add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
fintech-ecommerce/
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── api/              # API routes
│   │   │   └── chat/         # OpenAI integration API
│   │   ├── dashboard/        # Dashboard pages
│   │   ├── products/         # Product pages
│   │   ├── cart/             # Shopping cart
│   │   ├── checkout/         # Checkout process
│   │   ├── about/            # About page
│   │   ├── solutions/        # Solutions page
│   │   ├── contact/          # Contact page
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Homepage
│   ├── components/           # React components
│   │   ├── dashboard/        # Dashboard components
│   │   ├── home/             # Homepage components
│   │   ├── layout/           # Layout components
│   │   └── AIAssistant.tsx   # AI chat assistant
├── public/                   # Static assets
├── .env.local                # Environment variables (OpenAI API key)
├── tailwind.config.js        # Tailwind CSS configuration
├── next.config.js            # Next.js configuration
└── package.json              # Project dependencies
```

## Key Pages

- **Homepage**: `/` - Showcases financial products with engaging sections
- **Dashboard**: `/dashboard` - BI dashboard with analytics and insights
- **Products**: `/products` - Browse and filter financial products
- **Product Detail**: `/products/[id]` - Detailed product information
- **Cart**: `/cart` - Shopping cart with product management
- **Checkout Success**: `/checkout/success` - Order confirmation
- **About**: `/about` - Company information and team
- **Solutions**: `/solutions` - Financial solutions offered
- **Contact**: `/contact` - Contact form and office locations

## Components

### Dashboard Components

- **OverviewCards**: Key metrics display
- **SalesChart**: Interactive sales performance chart
- **PerformanceMetrics**: Product distribution and performance visualization
- **RecentTransactions**: Searchable transactions table
- **CustomerInsights**: Customer demographics and acquisition data
- **ProductPerformance**: Detailed product performance analysis

### Homepage Components

- **ProductShowcase**: Featured financial products with filtering
- **TestimonialSlider**: Customer testimonials carousel
- **FeatureSection**: Highlighted platform features
- **CTASection**: Call-to-action section

### Other Components

- **AIAssistant**: Interactive chat assistant modal powered by OpenAI
- **Header**: Navigation header with responsive menu
- **Footer**: Site footer with links and information
- **Cart**: Shopping cart functionality
- **Checkout**: Checkout process with order confirmation

## AI Assistant Integration

The platform includes an AI-powered financial assistant that uses OpenAI's API to provide helpful information to users. The assistant can answer questions about financial products, investment strategies, retirement planning, and more.

### How It Works

1. The AI Assistant is implemented as a chat interface component (`AIAssistant.tsx`)
2. When a user sends a message, it's forwarded to the OpenAI API via the `/api/chat` endpoint
3. The API response is displayed in the chat interface
4. The assistant includes suggested questions to help users get started

### Customizing the AI Assistant

You can customize the AI assistant's behavior by modifying the system message in `/src/app/api/chat/route.ts`. The system message provides context to the AI about its role and capabilities.

## License

This project is licensed under the MIT License - see the LICENSE file for details.