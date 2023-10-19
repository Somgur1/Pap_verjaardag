function loginForm() {

    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    if (username == 'Jeroen73' && password == '50Jaar!') {
        alert('🎉 Welkom Jeroen "Abraham" de Wit! 🎉');
        location.href = 'jeroen.html';
        return false;
    }
    else if (username === '' || password === '') {
        alert('Vul alle velden in');
    }
    else {
        alert('Gebruikersnaam of wachtwoord is onjuist');
    }
}