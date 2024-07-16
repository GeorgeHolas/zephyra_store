# 🛍️ Zephyra Store

<div align="center">
  <p><em>A cutting-edge e-commerce experience built with Next.js and React</em></p>
</div>

## 🌟 Features

- 🔐 Secure user authentication and authorization with Clerk
- 🔍 Advanced product browsing and searching capabilities
- 🛒 Intuitive shopping cart functionality
- 💖 Personalized wishlist management
- 📦 Streamlined order processing
- 📱 Fully responsive design for all devices
- 💳 Secure payment processing by stripe

## 🛠️ Technologies Used

- ⚛️ Next.js 14.2.4 & React 18
- 🍃 MongoDB with Mongoose ORM
- 🔒 Clerk for authentication
- 🎨 Tailwind CSS for sleek styling
- 🐻 Zustand for efficient state management
- 🚀 TypeScript for type safety

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies
3. npm install
4. Set up environment variables
  - **NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY**=your_clerk_publishable_key
  - **CLERK_SECRET_KEY**=your_clerk_secret_key
  - **MONGODB_URI**=your_mongodb_connection_string
  - **NEXT_PUBLIC_CLERK_SIGN_IN_URL**=/sign-in=/sign-in
  - **NEXT_PUBLIC_CLERK_SIGN_UP_URL**=/sign-up=/sign-up
  - **NEXT_PUBLIC_CLERK_FALLBACK_REDIRECT_URL**=/
  - **NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL**=/
  - **NEXT_PUBLIC_API_URL**=http://localhost:3000/api

5. Start the development server
6. npm run dev
7. Open http://localhost:3001 in your browser

## Project Structure

- `app/`: Next.js app router and API routes
- `components/`: React components
- `lib/`: Utility functions, hooks, and models
- `public/`: Static assets

## API Routes

- `/api/users`: User management
- `/api/products`: Product management
- `/api/orders`: Order processing

## 🚀 Deployment
Zephyra Admin is optimized for deployment on Vercel. For alternative platforms, please refer to the Next.js deployment documentation.

## 🤝 Contributing
We welcome contributions! Feel free to submit a Pull Request.
