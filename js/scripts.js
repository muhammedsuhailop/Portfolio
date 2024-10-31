/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
document.addEventListener('DOMContentLoaded', function () {
    const nameInput = document.getElementById("fname");
    const nameError = document.getElementById("name-error");

    nameError.style.display = 'none';
    const namePattern = /^[A-Za-z\s]+$/;

    nameInput.addEventListener("input", function () {
        if (!namePattern.test(nameInput.value)) {
            nameError.style.display = "block";
            nameInput.classList.add("is-invalid");
        } else {
            nameError.style.display = "none";
            nameInput.classList.remove("is-invalid");
        }
    })
})