"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const generateButton = document.getElementById("generateBtn");
  const outputElement = document.getElementById("passwordOutput");

  generateButton.addEventListener("click", () => {
    const selectedOption = document.querySelector(
      'input[name="passwordLength"]:checked'
    );

    if (!selectedOption) {
      outputElement.textContent = "Please select a password length.";
      return;
    }

    const length = parseInt(selectedOption.value);
    const password = generatePassword(length);
    outputElement.textContent = `Generated Password : ${password}`;
  });

  function generatePassword(length) {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }
    return password;
  }
});
