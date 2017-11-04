function getTasks() {
  if (localStorage.length > 0) {
    // populate tasks list from storage
    for (var i = 1; i <= localStorage.length; i++) {
      var task = localStorage.getItem("task" + i);
      $("#tasks").append(task);
      $("#tasks").append("<i class=\"fa fa-trash-o\"></i>");
    }
    return true;
  }
}

function checkElement(event) {
  var item = event.target;
  var taskID;

  if (item.classList[2] == "open" || item.classList[2] == "closed") {
    taskID = item.nextSibling.id;
  }

  if (item.classList[0] == "fa" && item.classList[2] == "open") {
    item.classList.remove("fa-square-o");
    item.classList.remove("open");
    item.classList.add("fa-check-square-o");
    item.classList.add("closed");

    item.nextSibling.style.textDecoration = "line-through";

    localStorage.setItem(taskID, item.outerHTML + item.nextSibling.outerHTML);
    return true;
  }

  if (item.classList[0] == "fa" && item.classList[2] == "closed") {
    item.classList.remove("fa-check-square-o");
    item.classList.remove("closed");
    item.classList.add("fa-square-o");
    item.classList.add("open");

    item.nextSibling.style.textDecoration = "none";

    localStorage.setItem(taskID, item.outerHTML + item.nextSibling.outerHTML);
    return true;
  }

  if (item.classList[1] == "fa-trash-o") {
    taskID = item.previousSibling.id;

    item.parentNode.removeChild(item.previousSibling);
    item.parentNode.removeChild(item.previousSibling);
    item.parentNode.removeChild(item); // remove the trash icon
    localStorage.removeItem(taskID);
    return true;
  }

}

function addItem(itemTxt) {
  let item = "";
  let taskID = localStorage.length + 1;

  if (itemTxt.length > 0) {
    item += "<i class=\"fa fa-square-o open\"></i>";
    item += "<li id=task" + taskID + ">";
    item += itemTxt;
    item += "</li>";

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
