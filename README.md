# Meal Planner Frontend

A React-based frontend application for the Meal Planner backend API. This application provides a user-friendly interface for managing meals and users.

## Features

- **Meal Management**: Create, read, update, and delete meals
- **User Management**: Manage user profiles and preferences
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern UI**: Clean and intuitive user interface
- **Real-time Updates**: Immediate feedback for all operations

## Tech Stack

- **React 18**: Modern React with hooks
- **JavaScript**: ES6+ features
- **Context API**: State management
- **React Router**: Client-side routing
- **Axios**: HTTP client for API communication
- **Vite**: Fast build tool and development server
- **CSS3**: Modern styling with flexbox and grid

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Backend API running on port 5000

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd meal_planner_fe
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Home.jsx        # Home page
│   ├── MealList.jsx    # Meal listing component
│   ├── MealForm.jsx    # Meal form (add/edit)
│   ├── UserList.jsx    # User listing component
│   ├── UserForm.jsx    # User form (add/edit)
│   └── Navbar.jsx      # Navigation component
├── context/            # Context API
│   └── MealContext.jsx # Meal state management
├── services/           # API services
│   └── api.js         # API communication
├── App.jsx            # Main application component
├── App.css            # Application styles
├── main.jsx           # Application entry point
└── index.css          # Global styles
```

## API Integration

The frontend communicates with the backend API through the following endpoints:

### Meals
- `GET /api/meals` - Get all meals
- `GET /api/meals/:id` - Get meal by ID
- `POST /api/meals` - Create new meal
- `PUT /api/meals/:id` - Update meal
- `DELETE /api/meals/:id` - Delete meal

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

## State Management

The application uses React Context API for state management:

- **MealContext**: Manages meal data, loading states, and errors
- **Local State**: Component-specific state for forms and UI interactions

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
