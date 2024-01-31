document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('input[name="email"]');
  const messageTextarea = form.querySelector('textarea[name="message"]');

    
  form.addEventListener('input', (event) => {
    if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
      const formData = {
        email: form.email.value.trim(),
        message: form.message.value.trim(),
      };

      localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    }
  });

  window.addEventListener('load', () => {
    const savedFormData = localStorage.getItem('feedback-form-state');

    if (savedFormData) {
      const parsedData = JSON.parse(savedFormData);
      form.email.value = parsedData.email;
      form.message.value = parsedData.message;
    }
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (email && message) {
      form.reset();

      localStorage.removeItem('feedback-form-state');
      console.log({ email, message });
    }
    else {
      alert('Please fill in all fields of the form!')
    }
  });
});
