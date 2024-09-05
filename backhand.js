const input_box = document.getElementById("input-box");
const down_list = document.getElementById("pull_down_list");
function  addTask(){
    if (input_box.value === ''){
        alert("Please enter a task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input_box.value;
        list.down_list.appendChild(li);

    }

}