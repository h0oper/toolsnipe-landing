// ToolSnipe Landing Page — JS

function handleSignup(event, form) {
  event.preventDefault();
  const data = new FormData(form);
  fetch(form.action, {
    method: 'POST',
    body: data,
    headers: { 'Accept': 'application/json' }
  })
  .then(res => {
    if (res.ok) {
      form.querySelector('label').style.display = 'none';
      form.querySelector('input[type="email"]').style.display = 'none';
      form.querySelector('button[type="submit"]').style.display = 'none';
      form.querySelector('.form-disclaimer').style.display = 'none';
      form.querySelector('.form-success').style.display = 'flex';
    } else {
      alert('Something went wrong. Please try again or email us at toolsnipeapp@gmail.com');
    }
  })
  .catch(() => {
    alert('Something went wrong. Please try again or email us at toolsnipeapp@gmail.com');
  });
}

function handleHeroSignup(event, form) {
  event.preventDefault();
  const data = new FormData(form);
  fetch(form.action, {
    method: 'POST',
    body: data,
    headers: { 'Accept': 'application/json' }
  })
  .then(res => {
    if (res.ok) {
      form.querySelector('.hero-form-row').style.display = 'none';
      form.querySelector('.hero-form-note').style.display = 'none';
      form.querySelector('.form-success').style.display = 'flex';
    } else {
      alert('Something went wrong. Please try again.');
    }
  })
  .catch(() => {
    alert('Something went wrong. Please try again.');
  });
}
