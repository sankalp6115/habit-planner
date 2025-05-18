Habit Hero: Your Chuckle-Inducing Habit Tracker 🚀
Welcome to Habit Hero, the web app that makes sticking to your goals as fun as binge-watching a sitcom! Built with HTML, CSS, and JavaScript, this snazzy habit tracker turns your daily grind into a colorful, sound-effect-filled adventure. Whether you’re meditating, coding, or petting your cat, Habit Hero’s got your back with a weekly grid, progress bars, and a confetti party for when you crush it.
Why Habit Hero? 😎
Because forgetting to journal or exercise is so last season! This app lets you:

Add and track habits dynamically (no boring hardcoded nonsense).
See your progress with a weekly grid and a sassy progress bar.
Get showered with confetti and epic sound effects when you win at life.
Save your progress with localStorage so you can pick up where you left off, even after a Netflix marathon.

Features That’ll Make You Say “Wowza!” 🎉
1. Dynamic Habit Addition 🖌️

What it does: Add any habit you fancy (e.g., “🔴 Code like a ninja”) via a sleek form. Pick a color, type a name, and bam—it’s in your weekly grid.
How it works: Fill out the form, choose a color (Red gets a cool 🔴 emoji), and submit. The habit appears in the table with checkboxes for each day (Monday to Sunday).
Pro tip: Red habits get a fancy 🔴 prefix because, you know, red is the color of victory.

2. Weekly Grid of Glory 📅

What it does: Displays your habits in a table with checkboxes for each day of the week (Mon-Sun).
How it works: Checkboxes let you mark tasks as done. Each habit has a colored label (e.g., red for DSA, yellow for Meditate) to keep things visually spicy.
Fun fact: The grid is so organized, it could probably run for president.

3. Progress Bar with Attitude 📈

What it does: Shows your daily progress as a percentage (e.g., 3/5 tasks = 60%).
How it works: Updates in real-time as you check boxes for the current day. A colorful bar grows, and a cheeky “X% Achieved, Go on!” message cheers you on.
Giggle moment: Hit 100%, and you’re not just winning—you’re slaying.

4. Confetti Party & Win Sound 🎊

What it does: When you check all tasks for the day (100%), a confetti GIF explodes across the screen, and Sounds/win.wav plays like you just won the Olympics.
How it works: Triggers only once per day at 100% (no spamming your ears). The confetti dances for 10 seconds, then politely exits.
LOL alert: It’s like your browser throws you a surprise party!

5. Click Sound for Every Task ✅

What it does: Plays Sounds/click.wav every time you check a task, making each tick feel like a mini high-five.
How it works: Fires when you check (not uncheck) a box, adding a satisfying click to your productivity spree.
Silly note: It’s the sound of your to-do list crying, “Mercy!”

6. LocalStorage Superpower 💾

What it does: Saves your checkbox states so your progress sticks around, even if you accidentally close the tab during a cat video binge.
How it works: Each checkbox’s state (checked/unchecked) is stored with a unique key (e.g., habit_Exercise_0) in localStorage. Reload the page, and your ticks are back!
Cheeky brag: Your habits are clingier than glitter after a craft project.

7. Weekly Date Range with Nav Buttons 🕒

What it does: Shows the current week (Monday to Sunday, e.g., “12 May, 2025 - 18 May, 2025”) and lets you flip through weeks with Previous/Next buttons.
How it works: Dynamically calculates the week based on today’s date. Click the nav buttons to time-travel to past or future weeks (progress updates for the current day only).
Witty quip: It’s like a DeLorean for your habits, minus the flux capacitor.

8. Time Till Bedtime Countdown ⏰

What it does: Displays hours, minutes, and seconds left until midnight (bedtime) to keep you motivated.
How it works: Updates every second with setInterval, showing, e.g., “5 hrs 23 minutes 12 seconds till bedtime.”
Goofy vibe: Because nothing says “Seize the day!” like a ticking clock reminding you to sleep soon.

9. Personalized Greeting 👋

What it does: Greets you with “Good Morning/Afternoon/Evening, Sankalp” based on the time of day.
How it works: Checks the hour (5 AM-12 PM = Morning, 1 PM-5 PM = Afternoon, else Evening) and updates the header.
Chuckle factor: It’s like your app is your overly cheerful life coach.

10. Enable Audio Button 🔊

What it does: A button to unlock sound effects, ensuring click.wav and win.wav play without browser grumbling about autoplay rules.
How it works: Click “Enable Audio,” and it plays/pauses a sound to satisfy the browser. The button then vanishes like a ninja.
Sassy remark: Because browsers are like grumpy gatekeepers who need a handshake first.

Getting Started 🏃‍♂️

Clone the repo: git clone <your-repo-url>
Open index.html: Fire it up in a browser (Chrome, Firefox, or your fave). No server needed, but a local server (e.g., VS Code Live Server) works too.
Check the Sounds folder: Ensure click.wav and win.wav are in Sounds/.
Click “Enable Audio”: Unlock those sweet sound effects.
Add habits: Use the form to add habits, pick colors, and start checking boxes.
Crush it: Hit 100% and bask in confetti glory!

File Structure 📂

index.html: The main stage where your habits shine.
style.css: Makes everything look cooler than a polar bear in shades.
script.js: The brains, handling all the logic and sound effects.
Sounds/: Home to click.wav and win.wav (add your own WAVs for extra flair).

Dependencies ⚙️

None! Just vanilla HTML, CSS, and JavaScript. Your browser’s all you need.
Optional: A local server for testing (e.g., http-server or Live Server).

Known Quirks 😜

Sounds need interaction: Click “Enable Audio” first, or browsers will shush your sounds like a librarian.
LocalStorage is clingy: Clear it with localStorage.clear() in the console if you want a fresh start.
Red emoji exclusivity: Only red habits get the 🔴 bling for now. Want more emojis? Holler!

Future Ideas (Because Why Not?) 🌟

Add emojis for all colors (🟣 for White, 🟡 for Yellow, etc.).
Weekly reset for checkboxes to start fresh each Monday.
Stats page to flex your habit streaks like a fitness influencer.

Contributing 🤝
Got ideas to make Habit Hero even more heroic? Fork the repo, tweak the code, and send a pull request. Let’s make habit tracking the most fun thing since sliced bread!
License 📜
MIT License. Use it, share it, remix it—just don’t blame us if you get addicted to checking boxes.

Built with 💖 by Sankalp, the habit-crushing legend. Now go tick those boxes and make confetti rain!
