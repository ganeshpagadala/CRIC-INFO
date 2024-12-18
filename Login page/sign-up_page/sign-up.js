function validate()
{
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

          // Simple validation
          if (username === 'Ganesh' && password === 'G@18')
          {
            window.location.assign("sub.html")
          }
          else
          {
            alert("Wrong Entry")
          }
}