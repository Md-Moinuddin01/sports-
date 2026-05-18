#!/bin/bash

# SportsPulse Development Server Startup Script

echo "🚀 Starting SportsPulse Development Server..."
echo ""
echo "Installing dependencies (if needed)..."
npm install

echo ""
echo "Starting Vite development server..."
echo "The app will open at http://localhost:5173"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

npm run dev
