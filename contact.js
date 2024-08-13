document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", (event) => {
      event.preventDefault(); 

      const name = document.getElementById("name").value;
      const phone = document.getElementById("phone").value;

      if (name && phone) {
        alert(`Форма отправлена!\nИмя: ${name}\nТелефон: ${phone}`);

        form.reset();
      } else {
        alert("Пожалуйста, заполните все поля.");
      }
    });
  });
});
