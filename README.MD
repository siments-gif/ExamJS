# Pokémon Collection Webapp 🐾

JavaScript application developed as an exam project. Fetches data from PokéAPI and displays a collection of Pokémon with detail pages. Includes forms for login and registration, as well as a shared navigation header.

> **Goal:** Create a clean frontend project that demonstrates modularity, API usage and basic DOM manipulation without a framework.

---

## 🎯 Context and approach

The project had DOM manipulation as its main topic and the assignment was worded in a way that I interpreted as all HTML structure and styling should be built dynamically in JavaScript, not written statically in HTML or CSS files. Because of this, almost all rendering, element building and styling is done in the JS files. It is not necessarily best practice, but it was a deliberate interpretation of the assignment, and it gave good practice working directly with the DOM API.

---

## 🛠️ Main features

- List of Pokémon fetched via PokéAPI
- Detail page for each Pokémon with basic information
- Shared navigation header across pages
- Forms for login and registration with client side validation
- Structured with ES6 modules, no framework

## ⚙️ Tech stack

- Vanilla JavaScript (ES6+)
- HTML5
- [PokéAPI](https://pokeapi.co/)
- Native ES modules, no external libraries

## 📁 Project structure

```
ExamJS/
├─ index.html            # Home page with list of Pokémon
├─ collectionPage.html   # Collection page
├─ detailPage.html       # Detail page for selected Pokémon
├─ login.html            # Login form
├─ registerPage.html     # Registration form
├─ js/
│   ├─ apiFetch.js       # API functions and CRUD calls
│   ├─ collectionPage.js # Logic for the collection page
│   ├─ detailPage.js     # Rendering of Pokémon details
│   ├─ globalStyling.js  # Shared styling via JS
│   ├─ index.js          # Startup code for index.html
│   ├─ login.js          # Handling of login
│   ├─ navigation.js     # Builds the navigation header
│   ├─ register.js       # Handling of registration
│   └─ userValidation.js # Form validation
└─ README.md
```

---

## 🚀 Getting started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/siments-gif/ExamJS.git
   cd ExamJS
   ```
2. **Open in browser:**
   - Use a local server like VS Code Live Server.
3. **Explore the app:**
   - Use the navigation to jump between pages.
   - Click on a Pokémon to see the details.

---

## ⚠️ Known bugs and shortcomings

This project was submitted for a school exam and has several known weaknesses I became aware of after completing the exam:

**API and data storage:**

- Storage against the `/collection` endpoint happens without user context, so all users share the same global list. The solution is to connect API calls to an authenticated user ID.
- `updateUserCollection()` exists but is never called, and also has a type error where it tries to access `.collection` on a string instead of an object.
- `deleteFromCollection()` uses the wrong variable (`data._uuid`) instead of parameterized `_uuid`, so deletion fails.

**Frontend logic:**

- `collectionPage.js` binds click events to global buttons instead of per list element, which causes wrong behavior with multiple elements.

**Authentication:**

- Login and registration are only validated on the client side. No token, session or server check is implemented.

---

## 🚧 Possible improvements if further developed

- Connect API calls to user ID for real per user collections
- Implement a working profile page
- Fix deletion and updates with correct UUID parameters
- Build a real authentication flow (token or external service like Firebase)

---

## 📚 What I learned

- **User context is critical** – Without identifying which user is doing what, all data ends up in a shared pool.
- **Plan the data flow first** – Thinking through API design and state management _before_ writing frontend logic would have saved a lot of time.
- **Plan the project well first** - Don't jump into the code too fast without planning the project, this could have prevented many of the problems from happening.
- **Small mistakes can break functions completely** – A typo in a variable name made `updateUserCollection()` completely useless.
- **Test along the way** - Console logs and manual testing revealed that important functions were never called.
- **API testing** - Using Postman to test the endpoints themselves, and unit tests to verify that the functions handled the data correctly. This could have caught the problems with data storage and deletion earlier.

---
