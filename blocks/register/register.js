export default function decorate(block) {
  const form = document.createElement('form');

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.name = 'name';
  nameInput.placeholder = 'Name';
  nameInput.required = true;

  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.name = 'email';
  emailInput.placeholder = 'Email';
  emailInput.required = true;

  const interestsInput = document.createElement('input');
  interestsInput.type = 'text';
  interestsInput.name = 'interests';
  interestsInput.placeholder = 'Interests';
  interestsInput.required = true;

  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.textContent = 'Submit';

  const message = document.createElement('p');
  message.className = 'message';
  message.hidden = true;

  form.append(
    nameInput,
    emailInput,
    interestsInput,
    submitBtn,
    message,
  );

  block.append(form);

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = {
      name: nameInput.value,
      email: emailInput.value,
      interests: interestsInput.value,
    };

    const list = JSON.parse(localStorage.getItem('waitingList') || '[]');
    list.push(data);
    localStorage.setItem('waitingList', JSON.stringify(list));

    message.textContent = 'You are added to waiting list';
    message.hidden = false;

    form.reset();
  });
}
