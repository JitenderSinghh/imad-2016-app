var a = document.getElementById('profile');
var b = document.getElementById('qual');
var c = document.getElementById('skills');
var d = document.getElementById('hobby');
var e = document.getElementById('conn');

function prof() {
  a.style.display = "block";
  b.style.display = "none";
  c.style.display = "none";
  d.style.display = "none";
  e.style.display = "none";
}
function qual() {
  a.style.display = "none";
  b.style.display = "block";
  c.style.display = "none";
  d.style.display = "none";
  e.style.display = "none";
}
function skills() {
  a.style.display = "none";
  b.style.display = "none";
  c.style.display = "block";
  d.style.display = "none";
  e.style.display = "none";
}
function hobby() {
  a.style.display = "none";
  b.style.display = "none";
  c.style.display = "none";
  d.style.display = "block";
  e.style.display = "none";
}
function conn() {
  a.style.display = "none";
  b.style.display = "none";
  c.style.display = "none";
  d.style.display = "none";
  e.style.display = "block";
}
