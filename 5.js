function openApplyModal(programName, rolesList) {
  const modal = document.getElementById('applyModal');
  const programInput = document.getElementById('formProgram');
  const roleSelect = document.getElementById('formRole');
  
  programInput.value = programName;
  
  // Clear and populate role select
  roleSelect.innerHTML = '';
  rolesList.forEach(role => {
    const option = document.createElement('option');
    option.value = role;
    option.textContent = role;
    roleSelect.appendChild(option);
  });
  
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeApplyModal() {
  const modal = document.getElementById('applyModal');
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  document.getElementById('applyForm').reset();
}

function handleApplySubmit(event) {
  event.preventDefault();
  
  const program = document.getElementById('formProgram').value;
  const role = document.getElementById('formRole').value;
  const name = document.getElementById('formName').value;
  const college = document.getElementById('formCollege').value;
  
  // Close application form modal
  closeApplyModal();
  
  // Show successful submission receipt modal
  document.getElementById('receiptProgram').textContent = program;
  document.getElementById('receiptRole').textContent = role;
  document.getElementById('receiptName').textContent = name;
  document.getElementById('receiptCollege').textContent = college;
  
  const successModal = document.getElementById('successModal');
  successModal.classList.add('open');
  successModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  
  showToast(`Successfully applied for ${role}!`);
}

function closeSuccessModal() {
  const modal = document.getElementById('successModal');
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function showToast(message) {
  const toast = document.getElementById('applyToast');
  toast.textContent = message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}
