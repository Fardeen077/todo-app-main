# Todo App 📝

This is a solution to the [Frontend Mentor Todo App Challenge](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). The goal of this challenge is to build a fully functional and visually appealing to-do app with filtering and drag-and-drop support.

## 🛠️ Built With

- HTML5
- CSS3 (or Tailwind CSS / Sass — depending on your solution)
- JavaScript (or TypeScript)
- React (or other framework you used)
- LocalStorage for data persistence
- [React Beautiful DnD](https://github.com/atlassian/react-beautiful-dnd) (for drag-and-drop, if used)
- [Vite](https://vitejs.dev/) or Create React App

## 📸 Screenshots

| Light Mode | Dark Mode |
|------------|-----------|
| ![Light Screenshot](./design/active-states-light.jpg) | ![Dark Screenshot](./design/active-states-dark.jpg) |

> Include your actual screenshots here.

## 🚀 Live Demo

[Live Site URL](https://your-deployment-url.vercel.app)  
*(Replace with your deployed app link)*

## ✨ Features

- ✅ Add new todos
- ✅ Mark todos as complete
- ✅ Delete todos
- ✅ Filter by All / Active / Completed
- ✅ Clear completed todos
- ✅ Drag and drop to reorder list
- ✅ Light and dark mode toggle
- ✅ Responsive design for all screen sizes
- ✅ Persist data in localStorage

## 📁 Folder Structure

```bash
src/
│
├── components/
│   ├── TodoForm.jsx
│   ├── TodoList.jsx
│   ├── TodoItem.jsx
│   └── ThemeToggle.jsx
│
├── context/
│   ├── TodoContext.jsx
│   └── ThemeContext.jsx
│
├── App.jsx
├── main.jsx
└── styles.css (or tailwind.css)
