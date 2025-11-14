const form = document.getElementById('form');
const fullNameInput = document.getElementById('full-name');
const emailInput = document.getElementById('email');
const orderNoInput = document.getElementById('order-no');
const productCodeInput = document.getElementById('product-code');
const quantityInput = document.getElementById('quantity');

const complaintsGroup = document.getElementById('complaints-group');
const complaintCheckboxes = complaintsGroup.querySelectorAll('input[type="checkbox"]');
const otherComplaintCheckbox = document.getElementById('other-complaint');
const complaintDescription = document.getElementById('complaint-description');

const solutionsGroup = document.getElementById('solutions-group');
const solutionRadios = solutionsGroup.querySelectorAll('input[type="radio"]');
const otherSolutionRadio = document.getElementById('other-solution');
const solutionDescription = document.getElementById('solution-description');

let isError = false;

const isNotEmpty = val => val.trim() !== '';
const isValidEmail = val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
const isValidOrderNo = val => /^2024\d{6}$/.test(val);
const isValidProductCode = val => /^[A-Za-z]{2}\d{2}-[A-Za-z]\d{3}-[A-Za-z]{2}\d$/.test(val);
const isPositiveInteger = val => /^[1-9]\d*$/.test(val);
const minLength = (val, len) => val.trim().length >= len;

function validateForm() {
  const validation = {};

  validation["full-name"] = isNotEmpty(fullNameInput.value);
  validation["email"] = isValidEmail(emailInput.value);
  validation["order-no"] = isValidOrderNo(orderNoInput.value);
  validation["product-code"] = isValidProductCode(productCodeInput.value);
  validation["quantity"] = isPositiveInteger(quantityInput.value);

  const anyChecked = Array.from(complaintCheckboxes).some(cb => cb.checked);
  validation["complaints-group"] = anyChecked;

  validation["complaint-description"] = !otherComplaintCheckbox.checked
    || minLength(complaintDescription.value, 20);

  const anyRadioChecked = Array.from(solutionRadios).some(r => r.checked);
  validation["solutions-group"] = anyRadioChecked;

  validation["solution-description"] = !otherSolutionRadio.checked
    || minLength(solutionDescription.value, 20);

  return validation;
}

function isValid(validationObj) {
  return Object.values(validationObj).every(val => val === true);
}

function setBorderColor(el, valid) {
  el.style.borderColor = valid ? 'green' : 'red';
}

fullNameInput.addEventListener('change', () => setBorderColor(fullNameInput, isNotEmpty(fullNameInput.value)));
emailInput.addEventListener('change', () => setBorderColor(emailInput, isValidEmail(emailInput.value)));
orderNoInput.addEventListener('change', () => setBorderColor(orderNoInput, isValidOrderNo(orderNoInput.value)));
productCodeInput.addEventListener('change', () => setBorderColor(productCodeInput, isValidProductCode(productCodeInput.value)));
quantityInput.addEventListener('change', () => setBorderColor(quantityInput, isPositiveInteger(quantityInput.value)));

complaintCheckboxes.forEach(cb => {
  cb.addEventListener('change', () => {
    const valid = Array.from(complaintCheckboxes).some(c => c.checked);
    complaintsGroup.style.borderColor = valid ? 'green' : 'red';
  });
});

complaintDescription.addEventListener('change', () => {
  if(otherComplaintCheckbox.checked) {
    const valid = minLength(complaintDescription.value, 20);
    setBorderColor(complaintDescription, valid);
  } else {
    setBorderColor(complaintDescription, true);
  }
});

solutionRadios.forEach(r => {
  r.addEventListener('change', () => {
    const valid = Array.from(solutionRadios).some(r => r.checked);
    solutionsGroup.style.borderColor = valid ? 'green' : 'red';
  });
});

solutionDescription.addEventListener('change', () => {
  if(otherSolutionRadio.checked) {
    const valid = minLength(solutionDescription.value, 20);
    setBorderColor(solutionDescription, valid);
  } else {
    setBorderColor(solutionDescription, true);
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const validation = validateForm();

  setBorderColor(fullNameInput, validation["full-name"]);
  setBorderColor(emailInput, validation["email"]);
  setBorderColor(orderNoInput, validation["order-no"]);
  setBorderColor(productCodeInput, validation["product-code"]);
  setBorderColor(quantityInput, validation["quantity"]);

  complaintsGroup.style.borderColor = validation["complaints-group"] ? 'green' : 'red';
  if(otherComplaintCheckbox.checked)
    setBorderColor(complaintDescription, validation["complaint-description"]);

  solutionsGroup.style.borderColor = validation["solutions-group"] ? 'green' : 'red';
  if(otherSolutionRadio.checked)
    setBorderColor(solutionDescription, validation["solution-description"]);

  if(isValid(validation)) {
    alert("Form submitted successfully!");
    form.reset();
    const allInputs = form.querySelectorAll('input, textarea, fieldset');
    allInputs.forEach(el => el.style.borderColor = 'rgb(118, 118, 118)');
  } else {
    alert("Please fix the errors in the form.");
  }
});