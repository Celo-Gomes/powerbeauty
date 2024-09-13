let button = document.querySelector('#switch');

button.onclick=()=>{
    const html = document.documentElement;
    let photo = document.querySelector('#profile img')
    html.classList.toggle('light')

    if(html.classList.contains('light')){
        photo.setAttribute('src', './assets/avatar_day1.png')
    } else{
        photo.setAttribute('src', './assets/avatar_night1.png')
    }
}  


function checkEmailSent() {
    const params = new URLSearchParams(window.location.search);
    if (params.get('email') === 'enviado') {
        const message = document.getElementById('success-message');
        message.style.display = 'block'; // Exibe a mensagem

        // Remove a mensagem após 5 segundos
        setTimeout(() => {
            message.style.display = 'none';
        }, 5000);
    }
}

// Chama a função quando a página é carregada
window.onload = checkEmailSent;


