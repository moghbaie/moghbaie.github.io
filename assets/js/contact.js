// Contact form: opens in a dialog and sends via FormSubmit (https://formsubmit.co),
// which forwards each message to m.oghbaie@gmail.com.
(function () {
  var dialog = document.getElementById('contact-dialog');
  var form = document.getElementById('contact-form');
  if (!dialog || !form || typeof dialog.showModal !== 'function') return; // old browsers keep the mailto link

  var status = form.querySelector('.form-status');
  var submit = form.querySelector('button[type="submit"]');

  function setStatus(text, kind) {
    status.textContent = text;
    status.className = 'form-status' + (kind ? ' is-' + kind : '');
  }

  document.querySelectorAll('[data-open-contact]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      setStatus('');
      dialog.showModal();
      form.querySelector('input[name="name"]').focus();
    });
  });

  dialog.querySelectorAll('[data-close-contact]').forEach(function (el) {
    el.addEventListener('click', function () { dialog.close(); });
  });

  // Close when clicking the dimmed backdrop
  dialog.addEventListener('click', function (e) {
    if (e.target === dialog) dialog.close();
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    submit.disabled = true;
    setStatus('Sending…');

    fetch(form.action, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(form)
    })
      .then(function (res) { return res.json().then(function (data) { return { ok: res.ok, data: data }; }); })
      .then(function (r) {
        if (!r.ok || String(r.data.success) !== 'true') throw new Error(r.data.message || 'Send failed');
        form.reset();
        setStatus("Thanks! Your message is on its way — I'll get back to you soon.", 'ok');
      })
      .catch(function () {
        setStatus("Sorry, that didn't go through. Please email me directly at m.oghbaie@gmail.com.", 'error');
      })
      .finally(function () { submit.disabled = false; });
  });
})();
