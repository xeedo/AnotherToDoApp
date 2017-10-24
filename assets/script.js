function checkElement(event) {
  var item = event.target;
  var icon = item.getElementsByTagName("I")[0];

  console.log(item);

  // should work only on icons, now works only on text
  if (item.id == "open") {
    item.style.textDecoration = "line-through";
    item.id = "closed";
    icon.classList.remove("fa-square-o");
    icon.classList.add("fa-check-square-o");
    return true;
  }

  if (item.id == "closed") {
    item.style.textDecoration = "none";
    item.id = "open";
    icon.classList.remove("fa-check-square-o");
    icon.classList.add("fa-square-o");
    return true;
  }
}
