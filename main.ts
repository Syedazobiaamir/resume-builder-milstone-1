const hide = document.getElementById("toggle")as HTMLButtonElement;
const skill = document.getElementById("min")as HTMLDivElement;
hide.addEventListener('click', () => {
    if(skill.style.display ==="none"){
        skill.style.display = "block"
    }else{
        skill.style.display = "none"
    }
});
