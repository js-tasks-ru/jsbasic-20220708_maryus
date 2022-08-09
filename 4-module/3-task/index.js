function highlight(table) {
  for (let teacher of table.rows) {
    const status = teacher.cells[3].dataset.available;
    switch (status) {
      case undefined: {
        teacher.hidden = true;
        break;
      }
      case "true": {
        teacher.classList.add("available");
        break;
      }
      case "false": {
        teacher.classList.add("unavailable");
        break;
      }
    }
    const sex = teacher.cells[2].innerText;
    teacher.classList.add(sex === "m" ? "male" : "female");

    const age = teacher.cells[1].innerText;
    if (age < 18) {
      teacher.style.textDecoration = "line-through";
    }
  }
}
