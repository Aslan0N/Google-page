const windowBtn = document.querySelector(".fa-window-maximize");

const darkEnable = () =>{
    document.body.classList.add("dark")
    localStorage.setItem('Dark', 'Enable')
}

const darkDisable = () =>{
    document.body.classList.remove("dark")
    localStorage.setItem('Dark', null)
}

let darkMode = localStorage.getItem('Dark');

if(darkMode === 'Enable'){
    darkEnable()
}

const changeMode = () =>{
    let darkMode = localStorage.getItem('Dark');
    if(darkMode == 'Enable'){
        darkDisable()
    }else{
        darkEnable()
    }
}
