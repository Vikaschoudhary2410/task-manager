# 📝 Task Manager

A simple and interactive task manager built with **HTML, CSS, and JavaScript** that allows users to:
- Add tasks
- Mark them as done or not done
- Delete individual tasks
- (Optionally) Clear all tasks from the view

All tasks are stored using **localStorage**, ensuring persistence even after page refresh.

---

## 🚀 Features

- ✅ Add new tasks
- ✅ Mark tasks as done / not done (toggle)
- ✅ Delete individual tasks
- ✅ Save tasks in browser's localStorage
- ✅ Clear all tasks from the screen
- 🎨 Responsive and clean layout

---

## 📂 File Structure

project-folder/
│
├── index.html          # Main HTML file
├── learn.css           # (Your custom styles)
├── learn.js            # Main JavaScript logic
└── README.md           # Project documentation

---

## 🧠 How It Works

- Tasks are stored in a JavaScript array.
- The array is stringified using `JSON.stringify()` and saved to `localStorage`.
- On page load, `JSON.parse()` fetches the stored tasks and renders them.
- Clicking:
  - **"done"** toggles task state.
  - **"❌"** deletes the selected task.
  - **"Clear All Task"** removes all from the UI.

---

## 🛠️ How to Run

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/task-manager-mini-project.git

2. Open `index.html` in your browser.
3. Start adding tasks!

---

## 🔮 Future Enhancements (Optional Ideas)

* Add edit functionality for tasks ✏️
* Add a dark mode 🌙
* Filter by completed / not completed tasks 🔍
* Animate task transitions with CSS or JavaScript 🎨

---

## 🙌 Author

**Vikas Choudhary**
Feel free to connect or contribute!

---

## 📄 License

This project is open-source and free to use.
