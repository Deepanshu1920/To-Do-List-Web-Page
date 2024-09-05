const inputBox = document.getElementById("input-box");
const pullDownList = document.getElementById("pull_down_list");
function  addTask(){
    // Get the input value
    const inputValue = inputBox.value;

    // Create a new li element
    const newLi = document.createElement('li');
    newLi.textContent = inputValue;

    // Add the new li element to the ul list
    pullDownList.appendChild(newLi);

    // Clear the input box
    inputBox.value = '';
}




















    // if (input_box.value === ''){
    //     alert("Please enter a task");
    // }
    // else{
    //     let li = document.createElement("li");
    //     li.innerHTML = input_box.value;
    //     list.pullDownList.appendChild(li);

    //     let del = document.createElement("del");
    //     del.innerHTML = "\u007d";
    //     li.appendChild(del)
        

    // }
    // input_box.value="";

