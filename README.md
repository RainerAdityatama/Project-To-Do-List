Project Title: Aplikasi To-Do List Sederhana
Description: Ini adalah Capstone Project untuk membuat aplikasi web to-do list yang memungkinkan pengguna menambah dan menghapus tugas
Technologies Used: HTML, CSS, JavaScript, IBM Granite (sebagai asisten pengembangan)
Features: Menambah tugas baru, Menghapus tugas, Desain responsif
Setup Instructions: Buka file index.html di browser
AI Support Explanation: 
Dalam pengembangan proyek ini, saya menggunakan AI IBM Granite untuk beberapa hal: 
1. Styling: Saya meminta AI untuk membuat struktur dasar HTML dan CSS dengan prompt " Create a basic HTML5 boilerplate.
* The body should contain a main `div` container that is centered on the page.
* Inside the container, include:
    * An `<h1>` title: "My Interactive To-Do List".
    * An input section with a text `input` (placeholder: "Add a new task...") and a `button` (text: "Add Task").
    * An empty unordered list `<ul>` which will be populated with tasks by JavaScript" dan
    * " Provide a clean, modern, and visually appealing style.
* Center the main container on the page.
* Style the input field and the button to look nice.
* Style the list items (`<li>`). Add a hover effect to the list items.
* Create a special CSS class named `.completed` that will apply a line-through text decoration and a light grey color. This class will be used by JavaScript to mark tasks as done"
2. Logic: Saya meminta dia untuk membuat logic pada aplikasi to do list ini dengan prompt "This is the most important part. Please implement the following features:

* **Adding Tasks:**
    * When the "Add Task" button is clicked, a new task is added to the list.
    * If the input field is empty, show an alert to the user and do not add the task.
* **Deleting Tasks:**
    * Each task item (`<li>`) should have a "Delete" button next to it.
    * Clicking the "Delete" button should remove the corresponding task from the list.
* **Completing Tasks:**
    * When a user clicks on the text of a task item (`<li>`), toggle the `.completed` CSS class on that item. This will visually mark the task as done (or undone).
* **Data Persistence with Local Storage:**
    * **Saving:** Whenever a task is added, deleted, or its completion status is changed, automatically save the entire list of tasks (including their completion status) to the browser's `localStorage`.
    * **Loading:** When the page is first loaded, check if there are any tasks saved in `localStorage`. If yes, load them and display them on the list. This ensures tasks are not lost on page refresh.

**4. Code Documentation and Explanation:**
* In the final `script.js` code, add clear and concise comments to explain what each function and major block of code does.
* After providing all the code, please add a brief, easy-to-understand explanation for the following concepts, as if you are explaining them to a beginner:
    * DOM Manipulation
    * Event Listeners
    * How `localStorage` works for saving and retrieving data"
3. Dokumentasi: Saya meminta AI untuk menjelaskan konsep Event Listener dan menambahkan komentar pada kode.
