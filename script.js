    const jokes = document.getElementById('joke');
    const btns = document.getElementById('jokebtn');
    btns.addEventListener('click', generateJoke);

    async function generateJoke() {
        const response = await fetch('https://icanhazdadjoke.com', {
            headers: {
                'Accept': 'application/json'
            }
        });
        const data = await response.json();
        jokes.innerHTML = data.joke;
    }
    generateJoke(); 
