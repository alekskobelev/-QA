// Собираем контакты в текст, который будет скопирован в буфер обмена.
const contacts = [
  "Александр — начинающий QA-инженер, ручное тестирование",
  "Telegram: https://t.me/alek_skobelev",
  "Email: alekskobelev@gmail.com",
  "GitHub: https://github.com/alekskobelev",
].join("\n");

// По нажатию пробуем использовать современный Clipboard API.
document.querySelector(".copy-button").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(contacts);
  } catch {
    // Запасной способ для браузеров, где Clipboard API недоступен.
    const field = document.createElement("textarea");
    field.value = contacts;
    document.body.append(field);
    field.select();
    const copied = document.execCommand("copy");
    field.remove();
    if (!copied) {
      // Сообщаем пользователю, если резервное копирование тоже не сработало.
      alert("Не удалось скопировать контакты.");
      return;
    }
  }
  // Подтверждаем успешное копирование.
  alert("Контакты скопированы");
});

// Автоматически подставляем в подвал текущий год.
document.querySelector("#year").textContent = new Date().getFullYear();