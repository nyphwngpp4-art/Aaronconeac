// Aaron Cone AC & Heating — demo site
// Production: wire the form to a Cloudflare Pages Function -> email/SMS. Demo: front-end only.

(function () {
  var form = document.getElementById('callback-form');
  if (!form) return;

  var nameInput = document.getElementById('cb-name');
  var phoneInput = document.getElementById('cb-phone');
  var confirmMsg = document.getElementById('form-confirm');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var valid = true;

    [nameInput, phoneInput].forEach(function (input) {
      if (input.value.trim() === '') {
        input.setAttribute('aria-invalid', 'true');
        valid = false;
      } else {
        input.removeAttribute('aria-invalid');
      }
    });

    if (!valid) {
      (nameInput.value.trim() === '' ? nameInput : phoneInput).focus();
      return;
    }

    // Demo behavior: show the inline confirmation, no network request.
    form.querySelector('button[type="submit"]').hidden = true;
    nameInput.disabled = true;
    phoneInput.disabled = true;
    confirmMsg.hidden = false;
    confirmMsg.setAttribute('role', 'status');
  });

  [nameInput, phoneInput].forEach(function (input) {
    input.addEventListener('input', function () {
      input.removeAttribute('aria-invalid');
    });
  });
})();
