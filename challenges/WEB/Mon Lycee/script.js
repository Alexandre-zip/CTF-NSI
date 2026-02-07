// Gestion du Toggle Mot de Passe (Exactement ton code)
const toggle = (button) =>  {
    const passwordElement = document.getElementById(button.getAttribute('aria-controls'));
    if (passwordElement.type === "password") {
        passwordElement.type = "text";
        button.children.item(0).className = button.dataset.iconHide;
        button.setAttribute("aria-label", button.dataset.labelHide);
        button.children.item(0).setAttribute("aria-label", button.dataset.labelHide)
    } else if(passwordElement.type === "text") {
        passwordElement.type = "password";
        button.children.item(0).className = button.dataset.iconShow;
        button.setAttribute("aria-label", button.dataset.labelShow);
        button.children.item(0).setAttribute("aria-label", button.dataset.labelShow);
    }
}

// Initialisation
document.querySelectorAll('[data-password-toggle]')
    .forEach(button => button.onclick = () => toggle(button));

// Forcer les minuscules sur l'identifiant (Comportement ENT)
const username = document.getElementById('username');
if(username) {
    username.addEventListener('input', (e) => {
        e.target.value = e.target.value.toLowerCase();
    });
}