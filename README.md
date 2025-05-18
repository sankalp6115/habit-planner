Habit Tracker
Habit Tracker is a web-based application designed to help users build and maintain daily habits with an intuitive, visually engaging interface. Built using HTML, CSS, and JavaScript, it offers a clean way to track tasks across a week, celebrate progress with sound effects and animations, and persist data for seamless use. Perfect for anyone looking to stay organized and motivated, this app combines functionality with a touch of flair.
Overview
This project provides a dynamic platform for tracking habits, featuring a weekly grid, real-time progress updates, and rewarding feedback for task completion. Whether you're aiming to exercise daily or master a new skill, Habit Tracker keeps you on course with a blend of practical features and subtle celebratory elements.
Features
1. Dynamic Habit Creation

Description: Users can add custom habits with a chosen color to categorize them.
How It Works: Submit a habit name and color via a form. Red-colored habits are prefixed with a 🔴 emoji for visual distinction. The habit appears in a table with checkboxes for each day (Monday–Sunday).
Example: Add "Study DSA" with color "Red" to see "🔴 Study DSA" in the table.

2. Weekly Task Grid

Description: A table displays habits with checkboxes for each day of the week.
How It Works: Checkboxes allow users to mark tasks as completed. Each habit’s checkboxes are styled with a color-coded label (e.g., red for DSA, yellow for Meditate).
Benefit: Provides a clear overview of weekly progress at a glance.

3. Real-Time Progress Bar

Description: Tracks daily task completion as a percentage.
How It Works: Updates automatically as checkboxes are ticked for the current day, displaying a progress bar and text (e.g., "60% Achieved, Keep Going!").
Note: Progress is calculated based on the current day’s tasks only.

4. Completion Celebration

Description: Celebrates 100% daily completion with a confetti animation and sound.
How It Works: When all tasks for the day are checked, a 10-second confetti GIF appears, and Sounds/win.wav plays. The sound triggers only once per day to avoid repetition.
Effect: Adds a rewarding moment to motivate users.

5. Task Completion Sound

Description: Plays a sound for each task marked complete.
How It Works: Checking a checkbox triggers Sounds/click.wav, providing audible feedback. The sound plays only when checking, not unchecking.
Purpose: Enhances the tactile feel of task completion.

6. Persistent Storage

Description: Saves checkbox states across sessions.
How It Works: Uses localStorage to store each checkbox’s state with a unique key (e.g., habit_Exercise_0). States are restored on page load, preserving progress.
Advantage: Ensures continuity even after closing the browser.

7. Weekly Date Navigation

Description: Displays the current week (Monday–Sunday) with navigation buttons.
How It Works: Shows the week’s date range (e.g., "12 May, 2025 - 18 May, 2025"). Previous/Next buttons shift the displayed week, while progress updates focus on the current day.
Use Case: Allows reviewing past or future weeks’ plans.

8. Time-to-Bed Countdown

Description: Shows remaining time until midnight.
How It Works: Updates every second, displaying hours, minutes, and seconds left (e.g., "5 hrs 23 min 12 sec till bedtime").
Purpose: Encourages users to complete tasks before the day ends.

9. Personalized Greeting

Description: Greets the user based on the time of day.
How It Works: Displays “Good Morning/Afternoon/Evening, Sankalp” depending on the hour (Morning: 5 AM–12 PM, Afternoon: 1 PM–5 PM, Evening: else).
Effect: Adds a welcoming touch to the app.

10. Audio Enablement

Description: Ensures sound playback complies with browser policies.
How It Works: An “Enable Audio” button appears on load. Clicking it plays and pauses a sound to unlock audio playback, then hides. This satisfies browser autoplay restrictions.
Necessity: Required for click.wav and win.wav to play reliably.

Setup Instructions

Clone the Repository:git clone <repository-url>


Navigate to the Project Folder:cd habit-tracker


Verify Sound Files:
Ensure Sounds/click.wav and Sounds/win.wav are in the Sounds/ directory.


Open the App:
Launch index.html in a modern browser (Chrome, Firefox recommended).
Optionally, use a local server (e.g., VS Code Live Server) for smoother testing.


Enable Audio:
Click the “Enable Audio” button to allow sound effects.


Start Tracking:
Add habits via the form, check daily tasks, and enjoy progress updates.



Project Structure

index.html: Core structure of the app, including the habit table and form.
style.css: Styles for the UI, including color-coded labels and confetti animation.
script.js: Logic for habit management, progress tracking, sounds, and storage.
Sounds/:
click.wav: Played when checking a task.
win.wav: Played at 100% daily completion.



Dependencies

None. The app uses vanilla HTML, CSS, and JavaScript, running directly in the browser.

Notes

Browser Autoplay: Sounds require user interaction (via the “Enable Audio” button or checkbox clicks) due to browser policies. Ensure the button is clicked before expecting audio.
Storage Reset: Clear localStorage in the browser console (localStorage.clear()) to reset checkbox states.
Red Emoji: Only red-colored habits receive the 🔴 emoji. Contact the developer to extend this to other colors.

Future Enhancements

Support emojis for all habit colors (e.g., 🟡 for Yellow).
Implement automatic weekly reset for checkboxes.
Add a statistics dashboard to track long-term habit streaks.

Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a feature branch (git checkout -b feature-name).
Commit changes (git commit -m "Add feature").
Push to the branch (git push origin feature-name).
Open a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Developed by Sankalp. Build better habits with a sprinkle of motivation!
