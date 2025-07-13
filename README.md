# Chat UI with Interactive Information Display

A responsive web application built with Next.js and shadcn/ui featuring a split-screen layout with a chat interface and interactive information display.

## Features

- **Split-Screen Layout**: 60/40 split on desktop (information/chat)
- **Responsive Design**: Stacked layout on mobile with toggle between views
- **Real-Time Chat Interface**: Send and receive messages with timestamps
- **Interactive Information Display**: Dynamic content with filters and data visualization
- **Theme Support**: Light/dark mode toggle
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS

## Tech Stack

- **Framework**: Next.js 15.3.5 with TypeScript
- **UI Library**: shadcn/ui
- **Styling**: Tailwind CSS
- **Theme Management**: next-themes
- **Icons**: Built-in SVG icons

## Getting Started

### Prerequisites

- Node.js 18+ and npm installed

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles and Tailwind directives
│   ├── layout.tsx        # Root layout with theme provider
│   └── page.tsx          # Main page with split-screen layout
├── components/
│   ├── ui/               # shadcn/ui components
│   ├── chat/             # Chat interface components
│   ├── info-display/     # Information display components
│   ├── theme-provider.tsx # Theme provider wrapper
│   └── theme-toggle.tsx   # Theme toggle button
├── lib/
│   └── utils.ts          # Utility functions (cn helper)
└── public/               # Static assets
```

## Key Components

### ChatInterface
- Message display with sender alignment
- Real-time message updates
- Input field with Enter key support
- Timestamp display for each message
- Simulated responses for demo purposes

### InfoDisplay
- Interactive filters that update data
- Data visualization placeholders
- Responsive grid layout
- Animated transitions on interactions

## Responsive Behavior

- **Desktop (≥768px)**: Side-by-side panels with 60/40 split
- **Mobile (<768px)**: Stacked layout with toggle button to switch views

## Customization

### Adding New Content Types
1. Create new components in `components/info-display/`
2. Import and use them in the InfoDisplay component
3. Add corresponding state management as needed

### Extending Chat Features
1. Modify `components/chat/chat-interface.tsx`
2. Add features like:
   - File uploads
   - Typing indicators
   - Read receipts
   - Message reactions

### API Integration
The current implementation uses local state. To connect to a backend:
1. Replace mock data with API calls
2. Implement WebSocket connection for real-time chat
3. Add authentication and user management

## Performance Optimizations

- Component-based architecture for code splitting
- React.memo and useCallback for optimized re-renders
- Lazy loading for heavy components
- Tailwind CSS for minimal CSS bundle size

## Accessibility

- ARIA labels on interactive elements
- Keyboard navigation support
- Screen reader friendly components
- Proper heading hierarchy
- Color contrast compliance

## Future Enhancements

- WebSocket integration for real-time updates
- User authentication and profiles
- File upload support in chat
- Advanced data visualizations
- Offline support with service workers
- Internationalization (i18n)

## License

This project is built as per the provided PRD specifications.