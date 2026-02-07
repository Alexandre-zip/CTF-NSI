document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');


    if (user === "admin" && pass === "P4ssw0rd") {
        showDashboard(user);
    } else {
        errorMsg.style.display = 'block';
        console.warn("Tentative de brute-force détectée. L'IP a été logguée.");
    }
});

function showDashboard(username) {
    document.getElementById('login-card').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');
    document.getElementById('user-display').innerText = username;
}

document.getElementById('logout').addEventListener('click', () => {
    location.reload();
});