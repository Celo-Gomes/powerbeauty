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


// function checkEmailSent() {
//     const params = new URLSearchParams(window.location.search);
//     if (params.get('email') === 'enviado') {
//         const message = document.getElementById('success-message');
//         message.style.display = 'block'; // Exibe a mensagem

//         // Remove a mensagem após 5 segundos
//         setTimeout(() => {
//             message.style.display = 'none';
//         }, 5000);
//     }
// }

// // Chama a função quando a página é carregada
// window.onload = checkEmailSent;



// Função para verificar se o e-mail foi enviado
function checkEmailSent() {
    const params = new URLSearchParams(window.location.search);
    const emailSent = params.get('email'); // Verifica se o parâmetro 'email' está presente

    // Exibe a mensagem somente se o parâmetro 'email=enviado' estiver na URL
    if (emailSent === 'enviado') {
        const message = document.getElementById('success-message');
        message.style.display = 'block'; // Exibe a mensagem

        // Remove a mensagem após 5 segundos
        setTimeout(() => {
            message.style.display = 'none';
        }, 5000);

        // Remove o parâmetro 'email' da URL sem recarregar a página
        const newUrl = window.location.href.split('?')[0];
        window.history.replaceState({}, document.title, newUrl);
    }
}

// Chama a função quando a página é carregada
window.onload = checkEmailSent;



