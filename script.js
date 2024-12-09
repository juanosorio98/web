// Sidebar Toggle Function
function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    var navbarToggler = document.querySelector('.navbar-toggler');

    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        navbarToggler.classList.remove("open");
    } else {
        sidebar.style.width = "250px";
        navbarToggler.classList.add("open");
    }
}

// Send Message Function
function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    addUserMessage(userInput);
    processUserInput(userInput);
    document.getElementById("user-input").value = "";
}

// Add User Message to Chat History
function addUserMessage(message) {
    var chatHistory = document.getElementById("chat-history");
    var userMessage = document.createElement("p");
    userMessage.classList.add("user-message");
    userMessage.textContent = message;
    chatHistory.appendChild(userMessage);
}

// Add Assistant Message to Chat History
function addAssistantMessage(message) {
    var chatHistory = document.getElementById("chat-history");
    var assistantMessage = document.createElement("p");
    assistantMessage.classList.add("assistant-message");
    assistantMessage.textContent = message;
    chatHistory.appendChild(assistantMessage);
}

// Process User Input
function processUserInput(input) {
    // Here you can add your logic to respond to user inputs
    // For demonstration, let's just echo back the user's input
    addAssistantMessage("You said: " + input);
}

// Toggle Exercise Details Function
function toggleDetails(button) {
    var exerciseDetails = button.nextElementSibling;
    if (exerciseDetails.style.display === "none" || exerciseDetails.style.display === "") {
        exerciseDetails.style.display = "block";
        button.innerText = "Show less";
    } else {
        exerciseDetails.style.display = "none";
        button.innerText = "Show more";
    }
}

// Sleep Calculator Function
function calculateSleep() {
    var wakeTime = document.getElementById("wake-time").value;
    var currentTime = new Date();
    var wakeHour = parseInt(wakeTime.split(":")[0]);
    var wakeMinute = parseInt(wakeTime.split(":")[1]);
    var wakeDate = new Date();
    
    if (wakeHour < currentTime.getHours() || (wakeHour === currentTime.getHours() && wakeMinute <= currentTime.getMinutes())) {
        wakeDate.setDate(currentTime.getDate() + 1);
    }
    
    wakeDate.setHours(wakeHour);
    wakeDate.setMinutes(wakeMinute);

    var sleepTimes = calculateSleepTimes(wakeDate);

    var resultHTML = "<h2>Horas sugeridas para dormir</h2>";

    sleepTimes.reverse().forEach(function(time, index) {
        resultHTML += "<p>Opción " + (index + 1) + ": " + formatTime(time.getHours(), time.getMinutes()) + "</p>";
    });

    document.getElementById("result").innerHTML = resultHTML;
}

// Calculate Sleep Times Function
function calculateSleepTimes(wakeDate) {
    var sleepTimes = [];

    // Calculate suggested sleep times for 3 to 7 sleep cycles
    for (var i = 3; i <= 7; i++) {
        var sleepTime = new Date(wakeDate.getTime() - (i * 90 * 60000)); // Subtract 90 minutes for each sleep cycle
        sleepTimes.push(sleepTime);
    }

    return sleepTimes;
}
// Format Time Function
function formatTime(hour, minute) {
    var ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour ? hour : 12; // Handle midnight (00:00)
    minute = minute < 10 ? '0' + minute : minute;
    return hour + ':' + minute + ' ' + ampm;
}


