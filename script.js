const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Initialize Audio
    const clickSound = new Audio("Sounds/click.wav");
    const winSound = new Audio("Sounds/win.wav");

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
    let name = month[d.getMonth()];
    let date = d.getDate() + " ," + name + " " + d.getFullYear();
    let dateDisplay = document.querySelector(".date");
    dateDisplay.textContent = date;

    // Update Week Range
    let weekOffset = 0;

    function updateWeekRange() {
        const today = new Date();
        const dayOfWeek = today.getDay();
        const daysToMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
        const monday = new Date(today);
        monday.setDate(today.getDate() - daysToMonday + (weekOffset * 7));

        const sunday = new Date(monday);
        sunday.setDate(monday.getDate() + 6);

        const formatDate = (date) => {
            const day = date.getDate();
            const monthName = month[date.getMonth()];
            const year = date.getFullYear();
            return `${day} ${monthName}, ${year}`;
        };

        const rangeElement = document.querySelector(".range");
        if (rangeElement) {
            rangeElement.textContent = `${formatDate(monday)} - ${formatDate(sunday)}`;
        } else {
            console.error("Element with class 'range' not found.");
        }
    }

    // Navigation Buttons
    function setupNavigationButtons() {
        const previousButton = document.querySelector(".nav_button.previous");
        const nextButton = document.querySelector(".nav_button.next");

        if (previousButton) {
            previousButton.addEventListener("click", () => {
                weekOffset--;
                updateWeekRange();
            });
        } else {
            console.error("Previous button not found.");
        }

        if (nextButton) {
            nextButton.addEventListener("click", () => {
                weekOffset++;
                updateWeekRange();
            });
        } else {
            console.error("Next button not found.");
        }
    }

    // Remaining Time
    function remaining_time() {
        const d = new Date();
        let rem_sec = 60 - d.getSeconds();
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
                blue: { class: "brainstorming", emoji: "🔵" },
                red: { class: "dsa", emoji: "🔴" },
                yellow: { class: "meditate", emoji: "🟡" },
                greenyellow: { class: "cat", emoji: "🟢" },
                white: { class: "exercise", emoji: "🟣" }
        };
            const colorConfig = colorMap[color] || { class: "exercise", emoji: "" };
            const displayHabit = colorConfig.emoji ? `${colorConfig.emoji} ${habit}` : habit;
            const colorClass = colorMap[color] || "exercise";

        let table = document.getElementById("habit_table");
        let new_row = document.createElement("tr");

        let habit_cell = document.createElement("td");
        habit_cell.textContent = displayHabit;
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
        habit_addn_form.reset();
        habit_addn_form.style.display = "none";
        output.textContent = "";
        output.style.backgroundColor = "";
        setupCheckboxListeners();
        loadCheckboxStates();
        updateProgressBar();
    });

    // Progress Bar and LocalStorage
    let lastCheckedDay = new Date().getDay();
    let hasPlayedWinSound = false; // Track if win sound has played for the current day

    function updateProgressBar() {
        const table = document.getElementById("habit_table");
        const rows = table.querySelectorAll("tr:not(.days)");
        const totalTasks = rows.length;
        const currentDay = (new Date().getDay() + 6) % 7;
        let completedTasks = 0;

        rows.forEach((row, rowIndex) => {
            const checkbox = row.querySelector(`td:nth-child(${currentDay + 2}) input[type="checkbox"]`);
            if (checkbox && checkbox.checked) {
                completedTasks++;
            }
        });

        const progressPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
        const progressVisualiser = document.querySelector(".progress_visualiser");
        const progressStat = document.querySelector(".progress_stat");
        const confetti = document.querySelector(".confetti");

        progressVisualiser.style.width = `${progressPercentage}%`;
        progressStat.textContent = `${progressPercentage}% Achieved, Go on !`;

        if (progressPercentage === 100 && !hasPlayedWinSound) {
            console.log("Very impressive");
            winSound.play().catch(err => console.error("Win sound playback failed:", err));
            confetti.classList.add("active-confetti");
            hasPlayedWinSound = true; // Prevent replay until day changes
            setTimeout(() => {
                confetti.classList.remove("active-confetti");
            }, 10000);
        } else if (progressPercentage < 100) {
            hasPlayedWinSound = false; // Reset when progress drops below 100%
        }
    }

    function setupCheckboxListeners() {
        const table = document.getElementById("habit_table");
        table.removeEventListener("change", handleCheckboxChange);
        table.addEventListener("change", handleCheckboxChange);
    }

    function handleCheckboxChange(e) {
        if (e.target.type === "checkbox") {
            const checkbox = e.target;
            const habitName = checkbox.id.split("_")[1];
            const dayIndex = checkbox.id.split("_")[2];
            const key = `habit_${habitName}_${dayIndex}`;
            localStorage.setItem(key, checkbox.checked);
            console.log(`Saved ${key}: ${checkbox.checked}`);
            if (checkbox.checked) {
                clickSound.play().catch(err => console.error("Click sound playback failed:", err));
            }
            updateProgressBar();
        }
    }

    function loadCheckboxStates() {
        const table = document.getElementById("habit_table");
        const checkboxes = table.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            const key = checkbox.id;
            const state = localStorage.getItem(key);
            console.log(`Loading ${key}: ${state}`);
            if (state !== null) {
                checkbox.checked = state === "true";
            }
        });
        updateProgressBar();
    }

    function checkDayChange() {
        const currentDay = new Date().getDay();
        if (currentDay !== lastCheckedDay) {
            lastCheckedDay = currentDay;
            hasPlayedWinSound = false; // Reset win sound for new day
            updateProgressBar();
            updateWeekRange();
        }
    }

    // Initialize
    document.addEventListener("DOMContentLoaded", () => {
        updateWeekRange();
        setupNavigationButtons();
        loadCheckboxStates();
        setupCheckboxListeners();
        updateProgressBar();
        setInterval(checkDayChange, 60000);
    });


    //Dark Mode
    document.getElementById("dark-mode-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("darkMode", document.body.classList.contains("dark"));
});
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
}