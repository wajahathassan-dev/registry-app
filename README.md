# Registration App

### Description
This is a web application that allows users to register an account. The project uses **Vite** for a modern development experience, **Bootstrap** for styling, and **Vitest** for unit testing. This template serves as a practical guide for learning how to structure a front-end project, implement form validation, style UI elements using Bootstrap, and write unit tests.

---

## Project Features
- **Responsive Bootstrap Form**: A clean registration form with fields for first name, last name, email, password and confirm password.
- **Password Validation**: Validates password strength using regular expressions.
- **Validation**: Shows validation feedback after form submission.
- **Unit Tests with Vitest**: Ensure validation logic is accurate and reliable

---

## Checklist: Things to Complete

### 1. HTML Structure
- [ ] Create a basic HTML page with **Bootstrap**.
- [ ] Add a registration form with:
  - First Name input field
  - Last Name input field
  - Email input field
  - Password input field
  - Confirm Password input field
- [ ] Include validation feedback elements
- [ ] Add a "Register" button

### 2. CSS Styling
- [ ] Use **Bootstrap** classes for responsive form layout
- [ ] Style validation feedback messages
- [ ] Ensure mobile-friendly design with appropriate spacing

### 3. JavaScript Functionality
- [ ] **Select** form elements and validation display areas
- [ ] Implement **password validation** with regex for:
  - Minimum 8 characters
  - At least one uppercase letter
  - At least one lowercase letter
  - At least one number
  - At least one special character
- [ ] Add **validation** on form submission.
- [ ] Implement password matching validation.
- [ ] Add **validation** on form submission.
- [ ] Display validation feedback on form submission.

### 4. Unit Tests with Vitest
- [ ] Create test case for password validation regex.
- [ ] Create test case for comparing password and confirm password.

---

## Technologies Used
- **HTML**: Structure and layout of the registration form.
- **CSS & Bootstrap**: Responsive styling and form design.
- **JavaScript**: Form validation.
- **Vite**: Fast, modern development server and build tool.
- **Vitest**: Unit testing framework for validation logic.

---

## What is Vite?
[Vite](https://vitejs.dev/) is a **modern front-end build tool** that offers a super-fast development experience. Instead of bundling your entire project up-front, Vite utilizes **ES Modules** in the browser to provide near-instant server start and lightning-fast hot module replacement (HMR). When you're ready to deploy, Vite bundles your application using [Rollup](https://rollupjs.org/) under the hood for an optimized production build.
