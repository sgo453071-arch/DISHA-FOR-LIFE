// REPLACE WITH YOUR DEPLOYED GOOGLE APPS SCRIPT WEB APP URL
// Example: "https://script.google.com/macros/s/AKfycby.../exec"
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwTUb2oJKnRJKGAiFoacQTNFcWkFOkQNBA-6dOICZ3iE8N5HFmhMlTAaDHjvt_AqE8wzg/exec"; 

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
  const email = document.getElementById('formEmail').value;
  const phone = document.getElementById('formPhone').value;
  const city = document.getElementById('formCity').value;
  const skills = document.getElementById('formSkills').value;
  const college = document.getElementById('formCollege').value;
  const message = document.getElementById('formStatement').value;
  
  const submitBtn = document.getElementById('submitBtn');
  const originalBtnText = submitBtn.textContent;
  
  // Show loading state
  submitBtn.disabled = true;
  submitBtn.textContent = "Submitting Application...";
  
  // Prepare payload matching Google Sheets columns
  const payload = {
    name: name,
    email: email,
    phone: phone,
    city: city,
    skills: skills,
    college: college,
    role: `${program} - ${role}`,
    message: message
  };
  
  if (!APPS_SCRIPT_URL) {
    // Local fallback if Web App URL is not set yet
    console.log("No Apps Script URL configured. Simulating registration locally:", payload);
    setTimeout(() => {
      completeSubmission(program, role, name, college);
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
    }, 1200);
    return;
  }
  
  // Post data to Google Apps Script Web App
  // Mode 'no-cors' is used to bypass browser CORS checks on static hosting
  fetch(APPS_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain"
    },
    body: JSON.stringify(payload)
  })
  .then(() => {
    // Because no-cors returns an opaque response, we assume success
    completeSubmission(program, role, name, college);
    submitBtn.disabled = false;
    submitBtn.textContent = originalBtnText;
  })
  .catch(error => {
    console.error("Volunteer submission error:", error);
    showToast("⚠️ Submission failed. Please check your network and try again.");
    submitBtn.disabled = false;
    submitBtn.textContent = originalBtnText;
  });
}

function completeSubmission(program, role, name, college) {
  // Populate receipt details
  document.getElementById('receiptProgram').textContent = program;
  document.getElementById('receiptRole').textContent = role;
  document.getElementById('receiptName').textContent = name;
  document.getElementById('receiptCollege').textContent = college;
  
  // Close application form modal
  closeApplyModal();
  
  // Show success receipt modal
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
