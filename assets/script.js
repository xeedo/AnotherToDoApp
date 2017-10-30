function checkElement(event) {
  var item = event.target;

  if (item.classList[0] == "fa" && item.parentNode.id == "open") {
    item.classList.remove("fa-square-o");
    item.classList.add("fa-check-square-o");
    item.parentNode.style.textDecoration = "line-through";
    item.parentNode.id = "closed";
    return true;
  }

  if (item.classList[0] == "fa" && item.parentNode.id == "closed") {
    item.classList.add("fa-square-o");
    item.classList.remove("fa-check-square-o");
    item.parentNode.style.textDecoration = "none";
    item.parentNode.id = "open";
    return true;
  }

}

function addItem() {
  var item = "";

  item += "<li id=\"open\">";
  item += "<i class=\"fa fa-square-o\"></i>";
  item += document.getElementsByName("txt")[0].value;
  item += "</li>"

  $("UL").append(item);

  document.getElementsByName("txt")[0].value = "";
}
