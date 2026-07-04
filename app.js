// Aaron Cone AC & Heating - demo site
// Production: wire the form to a Cloudflare Pages Function -> email/SMS. Demo: front-end only.

(function () {
  var form = document.getElementById('callback-form');
  if (!form) return;

  var nameInput = document.getElementById('cb-name');
  var phoneInput = document.getElementById('cb-phone');
  var confirmMsg = document.getElementById('form-confirm');

  function setFieldError(input, hasError) {
    var errorMsg = document.getElementById(input.id + '-error');
    if (hasError) {
      input.setAttribute('aria-invalid', 'true');
      errorMsg.hidden = false;
    } else {
      input.removeAttribute('aria-invalid');
      errorMsg.hidden = true;
    }
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var firstInvalid = null;

    [nameInput, phoneInput].forEach(function (input) {
      var empty = input.value.trim() === '';
      setFieldError(input, empty);
      if (empty && !firstInvalid) firstInvalid = input;
    });

    if (firstInvalid) {
      firstInvalid.focus();
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
      setFieldError(input, false);
    });
  });
})();
