let addBtn = document.getElementById("addBtn");
let showAdd = document.getElementById("showAdd");
let saveBtn = document.getElementById("saveBtn");
let saveValues = document.getElementById("saveValues");
let reset = document.getElementById("reset");
addBtn.addEventListener("click", function () {
  showAdd.innerHTML = +showAdd.innerHTML + 1;
});
saveBtn.addEventListener("click", function () {
  // saveValues.innerHTML += ' '+showAdd.innerHTML;
  // showAdd.innerHTML=0;
  if (showAdd.innerHTML == 0) {
    // alert("enter the value");
    reset.classList.add("d-none")
  }
  else{
    saveValues.innerHTML+=" "+showAdd.innerHTML;
    showAdd.innerHTML=0;
    reset.classList.remove("d-none")
  }
});

reset.addEventListener("click", function () {
  showAdd.innerHTML = 0;
  saveValues.innerHTML = "";
});
