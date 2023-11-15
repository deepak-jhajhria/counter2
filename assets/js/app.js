let addBtn = document.getElementById("addBtn");
let showAdd = document.getElementById("showAdd");
let saveBtn = document.getElementById("saveBtn");
let saveValues = document.getElementById("saveValues");
let reset = document.getElementById("reset");
addBtn.addEventListener("click", function () {
  showAdd.innerHTML = +showAdd.innerHTML + 1;
});
saveBtn.addEventListener("click", function () {
    saveValues.innerHTML += ' '+showAdd.innerHTML;
    showAdd.innerHTML=0;
});

reset.addEventListener("click", function () {
  showAdd.innerHTML = 0;
  saveValues.innerHTML = "";
});
