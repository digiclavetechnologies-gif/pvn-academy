const form = document.querySelector('[data-enquiry-form]');

form?.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const name = String(data.get('name') ?? '').trim();
  const phone = String(data.get('phone') ?? '').trim();
  const course = String(data.get('course') ?? '').trim();
  const phoneDigits = phone.replace(/\D/g, '');

  if (phoneDigits.length < 10 || phoneDigits.length > 15) {
    form.elements.phone.setCustomValidity('Enter a phone number with 10 to 15 digits.');
    form.reportValidity();
    form.elements.phone.addEventListener('input', () => form.elements.phone.setCustomValidity(''), { once: true });
    return;
  }

  const message = [
    'Hello Padmini Vidhya Niketan, I would like to enquire about a free demo class.',
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Class or course: ${course}`
  ].join('\n');
  const whatsappUrl = new URL('https://wa.me/919911000896');
  whatsappUrl.searchParams.set('text', message);
  window.open(whatsappUrl.toString(), '_blank', 'noopener,noreferrer');
  window.location.assign('/thank-you');
});
