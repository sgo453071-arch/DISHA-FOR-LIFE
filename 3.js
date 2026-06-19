/* ─── TOAST NOTIFICATION ─── */
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

/* ─── COPY REFERRAL CODE ─── */
function copyReferralCode() {
  const codeInput = document.getElementById('refCode');
  codeInput.select();
  codeInput.setSelectionRange(0, 99999); /* For mobile devices */
  
  try {
    navigator.clipboard.writeText(codeInput.value);
    showToast('✓ Referral code copied to clipboard!');
  } catch (err) {
    // Fallback if clipboard API fails
    document.execCommand('copy');
    showToast('✓ Referral code copied to clipboard!');
  }
}

/* ─── SIMULATE INVITE PROGRESSION ─── */
let inviteCount = 7;
const targetInvites = 10;
const namesPool = [
  "Kabir Mehta", "Ananya Sen", "Vikram Rathore", 
  "Siddharth Rao", "Divya Nair", "Rohan Malhotra"
];
const taskPool = [
  "Merged: Translation Contribution",
  "Verified: Event Attendance",
  "Approved: Tech Explainer Video",
  "Approved: Blog Post (800 words)",
  "Merged: Open Source PR (Widget)"
];

function simulateNewInvite() {
  if (inviteCount >= 15) {
    showToast('All milestone challenges fully completed!');
    return;
  }

  inviteCount++;
  
  // Update counts
  const inviteCountEl = document.getElementById('inviteCount');
  inviteCountEl.textContent = `${inviteCount} / ${targetInvites} Invites`;

  // Update progress bar
  const percent = Math.min((inviteCount / targetInvites) * 100, 100);
  const progressBar = document.getElementById('progressBar');
  progressBar.style.width = `${percent}%`;

  // Update message
  const progressMsg = document.getElementById('progressMsg');
  if (inviteCount < targetInvites) {
    const diff = targetInvites - inviteCount;
    progressMsg.textContent = `${diff} more invite${diff > 1 ? 's' : ''} needed to unlock the +2,000 DSC bonus!`;
  } else if (inviteCount === targetInvites) {
    progressMsg.innerHTML = `<strong style="color:#22C97A;">🎉 Challenge Met! +2,000 DSC bonus unlocked and credited to your wallet!</strong>`;
    showToast('🎉 Milestone Completed! +2,000 DSC Credited!');
  } else {
    const nextTarget = 25;
    const diff = nextTarget - inviteCount;
    progressMsg.textContent = `${diff} more invites to unlock the Ambassador Level (+5,000 DSC & 5 DSC-P)!`;
  }

  // Add friend to mock list
  const randomName = namesPool[Math.floor(Math.random() * namesPool.length)] + ` (${inviteCount})`;
  const randomTask = taskPool[Math.floor(Math.random() * taskPool.length)];
  
  const referredList = document.getElementById('referredList');
  const li = document.createElement('li');
  li.innerHTML = `
    <div class="friend-info">
      <span class="name">${randomName}</span>
      <span class="action">${randomTask}</span>
    </div>
    <span class="status-badge verified">Verified (+150 DSC)</span>
  `;
  
  // Insert at top of list
  referredList.insertBefore(li, referredList.firstChild);
  
  // Limit list display to 6 items to prevent overflow
  if (referredList.children.length > 6) {
    referredList.removeChild(referredList.lastChild);
  }
}
