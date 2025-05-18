// Morning, Afternoon, Evening Handler
let d = new Date();
let hour = d.getHours();
let time;
if (hour >= 5 && hour <= 12) { time = "Morning" }
else if (hour >= 13 && hour <= 17) { time = "Afternoon" }
else { time = "Evening" }

let header = document.querySelector(".heading");
header.textContent = "Good " + time + ", Sankalp";

// Time Keeping
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let name = month[d.getMonth()];
let date = d.getDate() + " ," + name + " " + d.getFullYear();
let dateDisplay = document.querySelector(".date");
dateDisplay.textContent = date;

// Remaining Time
function remaining_time() {
    const d = new Date();
    let rem_sec = 60 - d.getSeconds();
    let sec = document.querySelector(".sec");
    let rem_time = document.querySelector(".rem_time");
    let rem_hrs = 24 - d.getHours() - 1;
    let rem_min = 60 - d.getMinutes();
    rem_time.textContent = rem_hrs + " hrs " + rem_min + " minutes " + rem_sec + " seconds" + " till bedtime.";
    return rem_sec;
}
window.setInterval(remaining_time, 1000);

// Form Handling
let habit_addn_form = document.getElementById("habit_addn_form");
let habit_addn_btn = document.querySelector(".add_habit_btn");
habit_addn_form.style.display = "none";

function form_handle() {
    habit_addn_form.style.display = habit_addn_form.style.display === "none" ? "flex" : "none";
}
habit_addn_btn.addEventListener("click", form_handle);

let form_close_btn = document.querySelector(".close");
form_close_btn.addEventListener("click", form_close);
function form_close() {
    habit_addn_form.style.display = habit_addn_form.style.display === "none" ? "flex" : "none";
}

// Add Habit to Table
habit_addn_form.addEventListener("submit", function (e) {
    e.preventDefault();

    let habit = document.getElementById("activity").value.trim();
    let color = document.getElementById("color").value.toLowerCase();
    let output = document.getElementById("output");

    if (!habit || !color) {
        output.textContent = "Please enter a habit and select a color.";
        output.style.backgroundColor = "red";
        return;
    }

    const colorMap = {
        blue: "brainstorming",
        red: "dsa",
        yellow: "meditate",
        greenyellow: "cat",
        white: "exercise"
    };
    const colorClass = colorMap[color] || "exercise";

    let table = document.getElementById("habit_table");
    let new_row = document.createElement("tr");
    
    let habit_cell = document.createElement("td");
    habit_cell.textContent = habit;
    new_row.appendChild(habit_cell);

    for (let i = 0; i < 7; i++) {
        let td = document.createElement("td");
        let input = document.createElement("input");
        input.type = "checkbox";
        input.id = `habit_${habit}_${i}`;
        let label = document.createElement("label");
        label.setAttribute("for", `habit_${habit}_${i}`);
        label.className = colorClass;
        td.appendChild(input);
        td.appendChild(label);
        new_row.appendChild(td);
    }

    table.appendChild(new_row);
    updateProgressBar(); // Update progress bar after adding new habit

    habit_addn_form.reset();
    habit_addn_form.style.display = "none";
    output.textContent = "";
    output.style.backgroundColor = "";
});

// Progress Bar Functionality
let currentDay = new Date().getDay(); // 0 (Sunday) to 6 (Saturday)
let lastCheckedDay = currentDay;

function updateProgressBar() {
    const table = document.getElementById("habit_table");
    const rows = table.querySelectorAll("tr:not(.days)"); // Exclude header row
    const totalTasks = rows.length; // Number of habits
    const todayIndex = (new Date().getDay() + 6) % 7; // Map Sunday (0) to 6, Monday (1) to 0, etc.

    // Count checked tasks for today
    let completedTasks = 0;
    rows.forEach(row => {
        const checkbox = row.cells[todayIndex + 1].querySelector("input[type=checkbox]"); // +1 to skip habit name column
        if (checkbox && checkbox.checked) {
            completedTasks++;
        }
    });

    // Calculate progress percentage
    const progressPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

    // Update progress bar
const progressVisualiser = document.querySelector(".progress_visualiser");
const progressStat = document.querySelector(".progress_stat");
const confetti = document.querySelector(".confetti");

// Update progress bar visuals
progressVisualiser.style.width = `${progressPercentage}%`;
progressStat.textContent = `${progressPercentage}% Achieved, Go on !`;

// Handle 100% completion with confetti
if (progressPercentage === 100) {
    console.log("Very impressive");
    confetti.classList.add("active-confetti");
    // Reset confetti after animation completes (10 seconds)
    setTimeout(() => {
        confetti.classList.remove("active-confetti");
    }, 10000); // Matches animation duration
}
}

// Reset progress bar at the start of a new day
function checkDayChange() {
    const newDay = new Date().getDay();
    if (newDay !== lastCheckedDay) {
        lastCheckedDay = newDay;
        updateProgressBar(); // Reset to 0% for new day
    }
}

// Update progress bar when checkboxes are toggled
function setupCheckboxListeners() {
    const table = document.getElementById("habit_table");
    table.addEventListener("change", function (e) {
        if (e.target.type === "checkbox") {
            updateProgressBar();
        }
    });
}

// Initialize progress bar and listeners
updateProgressBar();
setupCheckboxListeners();
window.setInterval(checkDayChange, 60000); // Check for day change every minute