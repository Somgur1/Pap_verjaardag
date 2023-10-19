document.querySelector('#loginButton')?.addEventListener('click', e => loginForm(e));

async function loginForm(e:Event): Promise<void> {
    e.preventDefault();

    const username: string = (document.querySelector("input[name='username']") as HTMLInputElement).value;
    const password: string = (document.querySelector("input[name='password']") as HTMLInputElement).value;
    console.log(username, password);

    if (username == 'Jeroen73' && password == '50Jaar!') {
        window.location.href = 'index.html';
    }
    else if (username === '' || password === '') {
        alert('Vul alle velden in');
    }
    else {
        alert('Gebruikersnaam of wachtwoord is onjuist');
    }
}

console.log('login.ts loaded');