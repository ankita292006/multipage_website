// Dark Mode
document.querySelectorAll(".toggle-btn").forEach(btn => {
    btn.onclick = () => document.body.classList.toggle("dark");
});

// Mobile Menu
document.querySelectorAll(".menu-toggle").forEach(btn => {
    btn.onclick = () => btn.nextElementSibling.classList.toggle("show");
});

// Scroll to Top + Reveal
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";

    document.querySelectorAll(".reveal").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});

topBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// Contact Message
function showMessage() {
    document.getElementById("msg").innerText =
        "✅ Message sent successfully!";
}
/* =====================
   CONTACT FORM (MAILTO)
===================== */
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        const status = document.getElementById("status");

        if (!name || !email || !message) {
            status.textContent = "Please fill all fields.";
            status.style.color = "red";
            return;
        }

        const mailtoLink = `
mailto:ankitanegalur970@gmail.com
?subject=New Contact Message from ${name}
&body=Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}
        `.replace(/\s/g, "");

        window.location.href = mailtoLink;

        status.textContent = "Opening email app...";
        status.style.color = "green";
    });
}
