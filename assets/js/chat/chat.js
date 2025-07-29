
  const inputBox = document.getElementById('messageInput');
  const sendIcon = document.querySelector('.send-icon');
  const chatBody = document.querySelector('.chat-body');

function sendMessage() {
  const message = inputBox.value.trim();
  if (message !== '') {
    const now = new Date();

    const formattedTimestamp = 
      String(now.getDate()).padStart(2, '0') + '/' +
      String(now.getMonth() + 1).padStart(2, '0') + '/' +
      now.getFullYear() + ' ' +
      String(now.getHours()).padStart(2, '0') + ':' +
      String(now.getMinutes()).padStart(2, '0') + ':' +
      String(now.getSeconds()).padStart(2, '0');

    const messageHTML = `
      <div class="message outgoing">
        <div>
          <div class="message-content">
            <div class="text">${message}</div>
          </div>
          <div class="timestamp">${formattedTimestamp}</div>
        </div>
      </div>
    `;
    chatBody.insertAdjacentHTML('beforeend', messageHTML);
    chatBody.scrollTop = chatBody.scrollHeight;
    inputBox.value = '';
  }
}

  inputBox.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  });

  sendIcon.addEventListener('click', sendMessage);