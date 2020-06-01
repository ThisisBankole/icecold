import "./style.css";

document.getElementById("switch-1").addEventListener("change", function() {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");
});
