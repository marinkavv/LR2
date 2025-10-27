const registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPassword").value;
  const confirm = document.getElementById("regConfirm").value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name) {
    alert("Поле 'Ім’я' не може бути порожнім!");
    return;
  }
  if (!emailRegex.test(email)) {
    alert("Введіть коректний email!");
    return;
  }
  if (password.length < 6) {
    alert("Пароль має бути не менше 6 символів!");
    return;
  }
  if (password !== confirm) {
    alert("Паролі не співпадають!");
    return;
  }

  alert("Форма реєстрації успішно відправлена!");
});

const feedbackForm = document.getElementById("feedbackForm");
feedbackForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("fbName").value.trim();
  const email = document.getElementById("fbEmail").value.trim();
  const message = document.getElementById("fbMessage").value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name) {
    alert("Поле 'Ім’я' не може бути порожнім!");
    return;
  }
  if (!emailRegex.test(email)) {
    alert("Введіть коректний email!");
    return;
  }
  if (!message) {
    alert("Поле 'Повідомлення' не може бути порожнім!");
    return;
  }

  alert("Повідомлення успішно відправлено!");
});
