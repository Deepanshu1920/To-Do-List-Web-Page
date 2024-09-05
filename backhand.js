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
                    }
                    
                }

                pullDownList.addEventListener("click", function (e) {
                    if (e.target.tagName === "LI") {
                        e.target.classList.toggle("checked");
                    } 
                    else if (e.target.tagName === "del" && e.target.innerHTML === "X") {
                        e.target.parentElement.remove();
                    }
                });








