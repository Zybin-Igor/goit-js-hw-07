"use strict";
/*
Завдання 3
Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input) підставляє його поточне значення в span#name-output як ім’я для привітання. Обов’язково очищай значення в інпуті по краях від пробілів . Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".
<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
На що буде звертати увагу ментор при перевірці:
На елементі input#name-input прослуховується подія input
Під час набору тексту в інпуті його поточне значення підставляється в span#name-output як ім’я для привітання
Значення в інпуті очищене від пробілів по краях
Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous"
*/

/*------------------------Рішення--------------------------------*/

const input = document.querySelector("input#name-input");
const span = document.querySelector("span#name-output");

input.addEventListener("input", (event) => {
	const trimValue = event.target.value.trim();
	span.textContent = trimValue || "Anonymous";
});