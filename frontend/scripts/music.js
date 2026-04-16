export function initMusic() {
    const music = document.getElementById("backgroundMusic");

    if(!music) return;

    music.loop = true;
    music.volume = 0.4;

    //Activación de la musica a la primera interacción del usuario
    const startMusic = () => {
        music.play().catch(() => {})
        window.removeEventListener("click", startMusic);
        window.removeEventListener("scroll", startMusic);
    };

    window.addEventListener("click", startMusic);
    window.addEventListener("scroll", startMusic);
}