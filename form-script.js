document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent actual form submission for demo

    const name = form.querySelector("input[type='text']").value.trim();
    const email = form.querySelector("input[type='email']").value.trim();

    if (name === "" || email === "") {
      alert("Please fill in all required fields.");
      return;
    }

    alert(`Thank you, ${name}! Your submission has been received.`);
    form.reset();
  });
});
