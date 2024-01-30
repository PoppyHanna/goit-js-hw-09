document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('input[name="email"]');
  const messageTextarea = form.querySelector('textarea[name="message"]');

  emailInput.addEventListener('focus', () => {
    emailInput.placeholder = 'Type area';
  });
    emailInput.addEventListener('blur', () => {
    emailInput.placeholder = '';
    emailInput.value = ''; // Очистити поле вводу email при втраті фокусу
  });

     messageTextarea.addEventListener('focus', () => {
    messageTextarea.placeholder = 'Type message';
  });

  messageTextarea.addEventListener('blur', () => {
    messageTextarea.placeholder = '';
    messageTextarea.value = '';
  });
    
    
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
      console.log({ email, message });

      localStorage.removeItem('feedback-form-state');
      form.reset();
    }
  });
});
