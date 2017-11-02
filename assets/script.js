function getTasks() {
  if (localStorage.length > 0) {
    // populate tasks list from localStorage
    for (var i = 1; i <= localStorage.length; i++) {
      var task = localStorage.getItem("task" + i);
      $("#tasks").append(task);
    }
    return true;
  }
}

function checkElement(event) {
  var item = event.target;
  var taskID = item.parentNode.id;

  if (item.classList[0] == "fa" && item.parentNode.classList[0] == "open") {
    item.classList.remove("fa-square-o");
    item.classList.add("fa-check-square-o");

    item.parentNode.style.textDecoration = "line-through";
    item.parentNode.classList.remove("open");
    item.parentNode.classList.add("closed");

    localStorage.setItem(taskID, item.parentNode.outerHTML);
    return true;
  }

  if (item.classList[0] == "fa" && item.parentNode.classList[0] == "closed") {
    item.classList.add("fa-square-o");
    item.classList.remove("fa-check-square-o");

    item.parentNode.style.textDecoration = "none";
    item.parentNode.classList.remove("closed");
    item.parentNode.classList.add("open");

    localStorage.setItem(taskID, item.parentNode.outerHTML);
    return true;
  }

  if (item.classList[1] == "fa-trash-o") {
    let taskID = item.previousSibling.id;

    $("#" + taskID).remove();
    item.parentNode.removeChild(item); // remove the trash icon
    localStorage.removeItem(taskID);
  }

}

function addItem(itemTxt) {
  let item = "";
  let taskID = localStorage.length + 1;

  if (itemTxt.length > 0) {
    item += "<li class=\"open\" id=task" + taskID + ">";
    item += "<i class=\"fa fa-square-o\"></i>";
    item += itemTxt;
    item += "</li>";
    item += "<i class=\"fa fa-trash-o\"></i>";

    $("UL").append(item);

    // set task to storage
    localStorage.setItem("task" + taskID, item);

    document.getElementsByName("txt")[0].value = ""; // clear input box
  }
}

function addItemOnKey(event) {
  if (event.charCode == 13) {
    event.preventDefault();
    addItem(event.target.value);
  };
}
