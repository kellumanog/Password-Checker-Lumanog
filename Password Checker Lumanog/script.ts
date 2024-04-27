function checkPasswordStrength() {
    const password = document.getElementById('passwordInput').value;
    const strengthBadge = document.getElementById('passwordStrength');

    if (password.length == 0) {
        strengthBadge.innerText = '';
        strengthBadge.style.visibility = 'hidden'; 
    } else if (password.length < 8) {
        strengthBadge.innerText = 'Weak';
        strengthBadge.style.color = 'red'; 
        strengthBadge.style.visibility = 'visible';
    } else if (password.length < 12) {
        strengthBadge.innerText = 'Medium';
        strengthBadge.style.color = 'orange'; 
        strengthBadge.style.visibility = 'visible';
    } else {
        strengthBadge.innerText = 'Strong';
        strengthBadge.style.color = 'green'; 
        strengthBadge.style.visibility = 'visible';
    }
}