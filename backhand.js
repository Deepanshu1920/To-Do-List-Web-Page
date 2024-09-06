const inputBox = document.getElementById("input-box");
const pullDownList = document.getElementById("pull_down_list");

function  addTask(){
        if (inputBox.value === '')
            {
                 alert("Please enter a task");
                 }
                 else {
                    const inputValue = inputBox.value;
                    const newLi = document.createElement('li');
                    newLi.textContent = inputValue;
                    // pullDownList.appendChild(newLi);
                    const del = document.createElement("del");
                     del.innerHTML = "X";  //\u007d
                    newLi.appendChild(del);


                    del.addEventListener("click", function() {
                        pullDownList.removeChild(newLi);
                        saveData();
                      });

                    pullDownList.appendChild(newLi);
                    inputBox.value = ''; 
                    saveData();
                                      
                    }
                    
                }

                pullDownList.addEventListener("click", function (e) {
                    if (e.target.tagName === "LI") {
                        e.target.classList.toggle("checked");
                        saveData();
                    } 
                    else if (e.target.tagName === "del" && e.target.innerHTML === "X") {
                        e.target.parentElement.remove();
                        saveData();
                    }
                });
                function saveData() {
                    localStorage.setItem("data", pullDownList.innerHTML);
                }
                function showTask(){
                    pullDownList.innerHTML = localStorage.getItem("data");
                    const delElements = pullDownList.querySelectorAll('del');
                    delElements.forEach(del => {
                        del.addEventListener("click", function() {
                            pullDownList.removeChild(del.parentElement);
                            saveData();
                        });
                    });
                }
                
                showTask();
                document.addEventListener('mousemove', function(e) {
                    // Check if mouse is inside the .To_Do_List element
                    const toDoList = document.querySelector('.To_Do_List');
                    const rect = toDoList.getBoundingClientRect();
                    const isInsideToDoList = e.clientX >= rect.left &&
                                             e.clientX <= rect.right &&
                                             e.clientY >= rect.top &&
                                             e.clientY <= rect.bottom;
                
                    if (!isInsideToDoList) {
                        createCrackers(e.clientX, e.clientY);
                    }
                });
                function createCrackers(x, y) {
                    const particleCount = 20;
                    for (let i = 0; i < particleCount; i++) {
                        createParticle(x, y);
                    }
                }
                function createParticle(x, y) {
                    const particle = document.createElement('div');
                    particle.className = 'particle';
                    particle.style.left = `${x}px`;
                    particle.style.top = `${y}px`;
                    particle.style.backgroundColor = getRandomColour();
                
                    const angle = Math.random() * 2 * Math.PI;
                    const speed = Math.random() * 50;
                    particle.style.setProperty('--dx', `${Math.cos(angle) * speed}px`);
                    particle.style.setProperty('--dy', `${Math.sin(angle) * speed}px`);
                
                    document.querySelector('.container').appendChild(particle);
                
                    particle.addEventListener('animationend', () => {
                        particle.remove();
                    });
                }
                
                function getRandomColour() {
                    const colours = ['#7cf038', '#8cdc5e', '#7fd44d', '#b3ec93'];
                    return colours[Math.floor(Math.random() * colours.length)];
                }
              
              
                


                const timeDisplay = document.querySelector("#time_display");
const startBtn = document.querySelector("#start_b");
const stopBtn = document.querySelector("#stop_b");
const resetBtn = document.querySelector("#reset_b");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let stop = true;
let intervalId;
let day = 0;
let hrs = 0;
let mins = 0;
let secs = 0;

// Retrieve saved time from localStorage when the page loads
window.onload = function () {
    const savedTime = localStorage.getItem("timer");
    if (savedTime) {
        elapsedTime = parseInt(savedTime, 10); // Retrieve saved elapsed time
        updateTimeDisplay(); // Update the display with the saved time
    }
};

startBtn.addEventListener("click", () => {
    if (stop) {
        stop = false;
        startTime = Date.now() - elapsedTime; // Calculate time offset for smooth restart
        intervalId = setInterval(updateTime, 1000); // Start timer with 1 second interval
    }
});

stopBtn.addEventListener("click", () => {
    if (!stop) {
        stop = true;
        elapsedTime = Date.now() - startTime; // Calculate final elapsed time
        clearInterval(intervalId); // Stop the timer
        localStorage.removeItem("timer"); // Remove saved time from localStorage
    }
});

resetBtn.addEventListener("click", () => {
    stop = true;
    clearInterval(intervalId); // Stop the timer
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    day = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
    timeDisplay.textContent = "00:00:00:00"; // Reset display
    localStorage.removeItem("timer"); // Remove saved time from localStorage
});

// Function to continuously update the timer
function updateTime() {
    elapsedTime = Date.now() - startTime; // Calculate elapsed time

    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
    day = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));

    updateTimeDisplay(); // Update the display
    localStorage.setItem("timer", elapsedTime); // Save current elapsed time to localStorage
}

// Function to update the time display on the screen
function updateTimeDisplay() {
    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);
    day = pad(day);
    timeDisplay.textContent = `${day}:${hrs}:${mins}:${secs}`;
}

// Helper function to pad single-digit numbers with leading zeros
function pad(unit) {
    return (("0") + unit).length > 2 ? unit : "0" + unit;
}
