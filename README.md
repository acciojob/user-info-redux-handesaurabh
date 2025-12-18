# User Information Management with Redux

A React application that allows users to enter and update their name and email, with state managed using Redux.

## Features

- Enter and update user name
- Enter and update user email
- Redux state management for user information
- Live display of updated values
- Responsive and clean UI

## Implementation Details

### Redux Setup

- **Action Types**: Defined constants for UPDATE_NAME and UPDATE_EMAIL
- **Action Creators**: Functions that create actions to update name and email
- **Reducer**: Manages user state updates based on dispatched actions
- **Store**: Configured Redux store with the user reducer

### Components

- **App Component**: Main component that connects to Redux store
- Uses `useSelector` to access state values
- Uses `useDispatch` to dispatch actions
- Implements controlled components for form inputs

### UI Elements

- Header with "User Information" title
- Text input for name entry
- Email input for email entry
- Output section displaying current name and email values

## How to Run

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm start
   ```

3. Open your browser to `http://localhost:8080`

## Redux Flow

1. User types in name/email fields
2. onChange events dispatch update actions
3. Reducer updates the state
4. useSelector retrieves updated state
5. UI re-renders with new values

## Testing

The application includes Cypress tests to verify:
- Header presence
- Input field existence
- Correct value updates
- Dynamic display of values