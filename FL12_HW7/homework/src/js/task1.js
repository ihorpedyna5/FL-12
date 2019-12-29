const email = prompt('Input you email:');
const minimalEmailLength = 5, minimalPassLength = 6;
const Users = {'user@gmail.com': 'UserPass', 'admin@gmail.com': 'AdminPass'
              }

if (!email) {
  alert('Canceled');
} else if (email.length < minimalEmailLength) {
  alert(`I don't know any emails having name length less than 5 symbols`);
} else if (email in Users) {
  const password = prompt('Input your password:');
  if (password === Users[email]) {
    if(confirm('Do you want to change your password?')) {
      const passwordConfirm = prompt('Input old password:');
      if (passwordConfirm === Users[email]) {
        const newPassword = prompt('Input new password:');
        if (!newPassword) {
          alert('Canceled');
        } else if (newPassword.length < minimalPassLength) {
          alert(`It’s too short password. Sorry.`);
        } else {
          const newPasswordConfirm = prompt('Repeat new password please:');
          if (newPassword === newPasswordConfirm) {
            alert('You have successfully changed your password.');
          } else {
            alert('You wrote the wrong password.')
          }
        }
      } else {
        alert('Wrong password');
      }
    } else {
      alert('You have failed the change.');
    }
  } else {
    alert('Wrong password');
  }
} else {
  alert(`I don’t know you`);
}