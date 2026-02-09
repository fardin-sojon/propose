let specialName = "";

function submitName() {
  const nameInput = document.getElementById('nameInput');
  const name = nameInput.value.trim();
  if (name) {
    specialName = name;
    document.getElementById('displayName').innerText = name;
    document.getElementById('nameInText').innerText = name;

    // Personalized line based on the name
    const nameMsg = `"${name}"... such a beautiful name for such a lovely person.`;
    document.getElementById('nameMessage').innerText = nameMsg;

    // Hide name card and show proposal card with animation
    document.getElementById('nameCard').style.display = 'none';
    const proposalCard = document.getElementById('proposalCard');
    proposalCard.style.display = 'block';
    proposalCard.style.animation = "fadeIn 1.5s ease-out";
  } else {
    alert("Please enter your name, beautiful! caused");
  }
}

function handleResponse(choice) {
  const modal = document.getElementById('customModal');
  const title = document.getElementById('modalTitle');
  const message = document.getElementById('modalMessage');
  const actionBtn = document.getElementById('modalActionBtn');

  modal.style.display = "flex";

  if (choice === 'accept') {
    title.innerText = "Yay! 🥰";
    message.innerText = `I'm so happy you said yes, ${specialName}! Let's connect on Facebook.`;
    actionBtn.style.display = "inline-block";
    actionBtn.innerText = "Message Me";
    actionBtn.onclick = function () {
      window.open("https://www.facebook.com/fardinsojon", "_blank");
      modal.style.display = "none";
    };
  } else if (choice === 'reject') {
    title.innerText = "Oh no... 💔";
    message.innerText = `I understand and respect your decision, ${specialName}. Thank you for your honesty.`;
    actionBtn.style.display = "inline-block";
    actionBtn.innerText = "I Understand";
    actionBtn.onclick = function () {
      modal.style.display = "none";
    };
  }
}

function closeModal() {
  document.getElementById('customModal').style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function (event) {
  const modal = document.getElementById('customModal');
  if (event.target == modal) {
    modal.style.display = "none";
  }
}