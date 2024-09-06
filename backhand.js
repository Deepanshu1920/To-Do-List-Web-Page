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
document.addEventListener('mousemove', function(e){
    creatCrackers(e.clientX, e.clientY);
});

document.addEventListener('mousemove', function(e) {
    createCrackers(e.clientX, e.clientY);
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
