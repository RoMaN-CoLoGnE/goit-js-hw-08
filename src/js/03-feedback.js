import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const keyFormState = 'feedback-form-state';

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

let formData = { email: '', message: '' };

function onFormInput(event) {
  const el = event.target;
  formData[el.name] = el.value;
  localStorage.setItem(keyFormState, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log(formData);
  event.target.reset();
  localStorage.removeItem(keyFormState);
  formData = { email: '', message: '' };
}

const dataFromLS = JSON.parse(localStorage.getItem(keyFormState));

if (dataFromLS) {
  const keys = Object.keys(dataFromLS);
  for (const key of keys) {
    form.elements[key].value = dataFromLS[key];
    formData[key] = dataFromLS[key];
  }
}
