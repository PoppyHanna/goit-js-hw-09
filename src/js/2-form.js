document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('input[name="email"]');
  const messageTextarea = form.querySelector('textarea[name="message"]');

    
  form.addEventListener('input', (event) => {
    if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
      const formData = {
        email: emailInput.value.trim(),
        message: messageTextarea.value.trim(),
      };

      localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    }
  });

  window.addEventListener('load', () => {
    const savedFormData = localStorage.getItem('feedback-form-state');

    if (savedFormData) {
      const parsedData = JSON.parse(savedFormData);
      emailInput.value = parsedData.email;
      messageTextarea.value = parsedData.message;
    }
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const message = messageTextarea.value.trim();

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
