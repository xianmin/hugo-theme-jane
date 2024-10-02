const initCopyCode = () => {
  const containers = document.querySelectorAll('.highlight-container');

  containers.forEach(container => {
    const copyBtn = container.querySelector('.copy-code-btn');
    const codeElement = container.querySelector('.highlight code[data-lang]');

    copyBtn.addEventListener('click', function () {
      navigator.clipboard.writeText(codeElement.textContent).then(function () {
        /* Chrome doesn't seem to blur automatically,
           leaving the button in a focused state. */
        copyBtn.blur();

        copyBtn.innerText = 'Copied!';

        setTimeout(function () {
          copyBtn.innerText = 'Copy';
        }, 2000);
      }, function (error) {
        copyBtn.innerText = 'Error';
      });
    });
  })
}

export default initCopyCode;
