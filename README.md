# Volksbank Insurance Analysis Application

A production-quality Next.js application implementing a multi-step insurance recommendation and analysis flow, matching the Volksbank design system.

## Overview

This application provides a complete user journey for personal insurance analysis, consisting of 5 distinct pages:

- **Homepage**: Landing page with features and call-to-action
- **Step 1**: Personal data collection (name, address, contact info)
- **Step 2**: Insurance selection (multi-select pills with search)
- **Step 3**: Life situation questionnaire (family, employment, housing)
- **Step 4**: Account setup (email, password, terms)
- **Step 5**: Dashboard with VB Score and insurance recommendations

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **UI**: React 19 with TypeScript
- **Styling**: Tailwind CSS v4
- **State Management**: Session Storage for multi-step form persistence
- **Deployment**: Vercel-ready

## Project Structure

```
/app
  ├── layout.tsx           # Root layout with metadata
  ├── globals.css          # Tailwind + Volksbank theme
  ├── page.tsx             # Homepage
  ├── step1/page.tsx       # Personal Data
  ├── step2/page.tsx       # Insurance Selection
  ├── step3/page.tsx       # Life Situation
  ├── step4/page.tsx       # Account Setup
  └── step5/page.tsx       # Dashboard

/components
  ├── header.tsx                    # Navigation header
  ├── stepper.tsx                   # Progress indicator
  └── form-components.tsx           # Reusable form elements

/lib
  └── utils.ts                      # Utility functions
```

## Components

### Header
Navigation with Volksbank branding and security/rating badges.

### Stepper
Visual progress indicator showing current step and completion status.

### Form Components
- **Input**: Text input with validation, icons, and password visibility toggle
- **Select**: Custom dropdown with styling
- **TogglePill**: Multi-select insurance buttons with active/inactive states
- **RadioButton**: Styled radio buttons for single-select options
- **Checkbox**: Styled checkboxes with label support
- **Button**: Primary/secondary/outline button variants
- **InfoBox**: Alert boxes for notifications
- **PasswordStrength**: Real-time password strength indicator

## Features

### Step 1: Personal Data
- Form validation with error messages
- Salutation dropdown selector
- Name, birth date, address fields
- Phone number input
- Form disables "Next" button until all fields are valid

### Step 2: Insurance Selection
- Common insurance pills (pre-selected)
- Expandable "More Insurance" section
- Live search filtering
- Multi-select with active state styling
- Radio options for "No Insurance" or "Unsure"
- Success message on selection
- Smart button state management

### Step 3: Life Situation
- Multiple choice questions
- Family status (5 options)
- Children count toggle
- Employment type (6 options)
- Housing situation (2 options)
- Conditional form sections
- Form validation with error handling

### Step 4: Account Setup
- Email validation
- Password strength indicator showing:
  - Required characters (8+)
  - Uppercase letters
  - Numbers
  - Special characters
- Password visibility toggle
- Required terms checkboxes (3)
- Optional newsletter signup
- All fields validated before submission

### Step 5: Dashboard
- Welcome message with user name
- VB Score display (circular progress)
- Recommended next steps (3 action cards)
- Insurance cards showing:
  - Coverage percentage
  - Key features with checkmarks
  - Detailed links
- Profile completion section with features
- Blue CTA section at bottom

## Styling System

### Colors
- **Primary Blue**: `#003f87` (`--vb-blue`)
- **Background**: `#f5f8fa` (`--vb-light`)
- **Borders**: `#e0e6ed` (`--vb-border`)
- **Success**: `#00a86b` (`--vb-success`)
- **Gray Text**: `#667085` (`--vb-gray`)

### Layout
- Max width: 6xl (1152px)
- Responsive grid layouts
- Mobile-first approach
- Proper spacing with Tailwind scale

### Typography
- Headings: Bold, primary blue color
- Body text: Smaller, muted gray
- Labels: Small, uppercase, semibold
- Consistent line-height for readability

## Data Persistence

The application uses browser session storage to persist form data across steps:

```typescript
// Saving data
sessionStorage.setItem('step1Data', JSON.stringify(formData))

// Retrieving data
const data = JSON.parse(sessionStorage.getItem('step1Data'))
```

This allows users to navigate between steps without losing their input.

## Interactions

### Form Validation
- Real-time error clearing on input
- Validation on form submission
- Error messages displayed below fields
- Green checkmarks for valid fields

### Multi-Select Pills
- Click to toggle active state
- Active pills show blue background
- Inactive pills show white with border
- All pills render with checkmark when active
- Pills disabled when "No Insurance" or "Unsure" selected

### Search
- Live filtering of insurance options
- Case-insensitive matching
- Appears below search input
- Only in expandable section

### Navigation
- "Zurück" (Back) links to previous step
- "Weiter" (Next) links to next step
- Links disabled until form is valid
- Smooth page transitions

## Accessibility

- Semantic HTML elements
- Proper button labels
- Input labels associated with fields
- Keyboard navigation support
- ARIA attributes on custom components
- Screen reader friendly text

## Performance Optimizations

- Client-side form validation
- Minimal re-renders with React 19
- Tailwind CSS with class-based styling
- No external API calls
- Static pages except form state

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Getting Started

### Installation
```bash
pnpm install
```

### Development
```bash
pnpm dev
```

Visit `http://localhost:3000` to start the application.

### Build & Deploy
```bash
pnpm build
pnpm start
```

## Future Enhancements

- Backend integration for data persistence
- Email verification
- Insurance provider API integration
- PDF report generation
- Admin dashboard
- User account management
- Integration with insurance products
- Real-time chat support
- Notification system

## Code Quality

- TypeScript for type safety
- Component composition
- Reusable utility components
- Clean separation of concerns
- Consistent naming conventions
- Proper error handling

## Responsive Design

All pages are fully responsive:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (< 768px)

Grid layouts adapt automatically, and form fields stack on smaller screens.

## License

This project is created for Volksbank and uses their design system and branding.
