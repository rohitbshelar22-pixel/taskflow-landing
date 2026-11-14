// Mobile menu open/close
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));

// Link click karne par menu band ho jaye
navLinks.querySelectorAll("a").forEach(link =>
  link.addEventListener("click", () => navLinks.classList.remove("open"))
);

// Form validation
const form = document.getElementById("demoForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  let valid = true;

  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";
  document.getElementById("success").textContent = "";

  if (name.length < 2) {
    document.getElementById("nameError").textContent = "Please enter your name";
    valid = false;
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    document.getElementById("emailError").textContent = "Please enter a valid email";
    valid = false;
  }
  if (message.length < 10) {
    document.getElementById("messageError").textContent = "Message must be at least 10 characters";
    valid = false;
  }

  if (valid) {
    document.getElementById("success").textContent = "✅ Thank you! We will contact you soon.";
    form.reset();
  }
});