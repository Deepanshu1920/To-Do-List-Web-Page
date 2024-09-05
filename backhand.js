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
                    del.innerHTML = "\u007d";
                    newLi.appendChild(del);

                    
                    del.addEventListener("click", function() {
                        pullDownList.removeChild(newLi);
                      });
                  
                      pullDownList.appendChild(newLi);


                    inputBox.value = '';                    
                    }
                    
                }



















    //     let li = document.createElement("li");
    //     li.innerHTML = input_box.value;
    //     list.pullDownList.appendChild(li);
    // let del = document.createElement("del");
    // del.innerHTML = "\u007d";
    // li.appendChild(del)
 
        

    // }
    // input_box.value="";

