var arr = [];
let visualHelp = document.getElementById("visualHelp");
push("Uno");
push(5);
arr = pop();
push("School");
push(9);
arr = pop();
toString();
join("/");
concat(43,423,4,"Race");

function push (item) {
    arr[arr.length] = item;
    console.log(arr.length);
}

function pop () {
    let newArr = [];
    for(i = 0; i < arr.length-1; i++) {
        newArr[i] = arr[i];
        visualHelp.innerText = arr.length;
        console.log(arr.length);
    }
    console.log(newArr);
    return newArr;
}

function toString () {
    let newArr = arr;
    visualHelp.innerText = newArr.length;
    console.log(arr.length);
}

function join (joiningItem) {
    let newArr = [];
    for(i = 0; i <= arr.length; i++){
        newArr = arr[i] + joiningItem;
    }
    return newArr;
}

function concat (addingArr) {
    for(i = 0; i <= addingArr; i++){
        push(addingArr[i]);
        console.log(arr.length);
    }
}