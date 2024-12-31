'use strict';

const nodesFields = document.querySelectorAll('.field');

const arrayNodesFields = [...nodesFields];

arrayNodesFields.forEach((el) => {
  const inputElement = el.querySelector('input');
  const inputNameId = inputElement.getAttribute('id');
  const inputName = inputElement.getAttribute('name');

  const label = document.createElement('label');

  label.setAttribute('for', inputNameId);
  label.classList.add('field-label');
  label.textContent = inputName;

  el.insertBefore(label, inputElement);

  function formatNamePlaceholder(inputNamePlaceholder) {
    const words = [];
    let currentWord = '';

    for (let i = 0; i < inputNamePlaceholder.length; i++) {
      const char = inputNamePlaceholder[i];

      if (char.toUpperCase() === char && char !== char.toLowerCase()) {
        if (currentWord) {
          words.push(currentWord);
        }

        currentWord = char;
      } else {
        currentWord += char;
      }
    }
    words.push(currentWord);

    return words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  inputElement.setAttribute('placeholder', formatNamePlaceholder(inputName));
});
