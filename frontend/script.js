function sendMessage() {
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;

  fetch('https://google-sheets-backend-ixsc.onrender.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, message })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById('status').innerText = '✅ Message sent!';
  })
  .catch(err => {
    document.getElementById('status').innerText = '❌ Error sending message.';
  });
}
