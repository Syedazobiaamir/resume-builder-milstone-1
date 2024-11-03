var hide = document.getElementById("toggle");
var skill = document.getElementById("min");
hide.addEventListener('click', function () {
    if (skill.style.display === "none") {
        skill.style.display = "block";
    }
    else {
        skill.style.display = "none";
    }
});
