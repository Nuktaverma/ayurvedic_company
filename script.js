document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const age = document.getElementById('age').value;
    const mobile = document.getElementById('mobile').value;
    const email = document.getElementById('email').value;
    const abled = document.getElementById('abled').value;
    const addiction = document.getElementById('addiction').value;
    const allergies = document.getElementById('allergies').value;
    const consultationType = document.getElementById('consultationType').value;

    const userData = {
        fullName,
        age,
        mobile,
        email,
        abled,
        addiction,
        allergies,
        consultationType
    };

    // Store user data in localStorage
    localStorage.setItem('userData', JSON.stringify(userData));

    // Redirect to dashboard
    window.location.href = 'dashboard.html';
});
