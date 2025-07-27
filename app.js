let btn = document.querySelectorAll("button");
let display = document.querySelector("input");

let str = '';

btn.forEach((e) => {
  e.addEventListener("click", () => {
    let value = e.innerText;
    if(e.innerText === '='){ // else is must be needed
        let res = eval(str);
        display.value = res;
    }else if(e.innerText === 'AC'){ 
        display.value = "";
        str = '';
    }else if(e.innerText === "DEL"){
        display.value = str.slice(0,-1);
        str = str.slice(0,-1);
    }else if (value === "%") {
        display.value = "Some Error";
        str = '';
    }else{ // sort all strings of the str and display str
        str += value;
        display.value = str;
    }
  });
});
