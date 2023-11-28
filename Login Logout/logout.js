const logoutBtn = document.getElementById('logoutBtn');

logoutBtn.addEventListener('click', () => {
  fetch('/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'action=logout'
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      window.location.href = '/login';
    } else {
      console.error('Failed to log out');
    }
  });
});
