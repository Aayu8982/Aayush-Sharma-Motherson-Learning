function myFunction() {
  const node = document.createElement("li");
  const textnode = document.createTextNode("Water");
  node.appendChild(textnode);
  document.getElementById("myList").appendChild(node);
}
