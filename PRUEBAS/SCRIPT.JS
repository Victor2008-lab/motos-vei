document.getElementById('signup-tab').addEventListener('click', function() {
    document.querySelector('.login-form').classList.add('hidden');
    document.querySelector('.signup-form').classList.remove('hidden');
    document.getElementById('login-tab').classList.remove('active');
    document.getElementById('signup-tab').classList.add('active');
});

document.getElementById('login-tab').addEventListener('click', function() {
    document.querySelector('.signup-form').classList.add('hidden');
    document.querySelector('.login-form').classList.remove('hidden');
    document.getElementById('signup-tab').classList.remove('active');
    document.getElementById('login-tab').classList.add('active');
});

document.getElementById('to-login').addEventListener('click', function() {
    document.querySelector('.signup-form').classList.add('hidden');
    document.querySelector('.login-form').classList.remove('hidden');
    document.getElementById('signup-tab').classList.remove('active');
    document.getElementById('login-tab').classList.add('active');
});

