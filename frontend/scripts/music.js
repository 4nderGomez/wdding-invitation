export function initMusic() {
    const music = document.getElementById("backgroundMusic");

    if (!music) return;

    music.loop = true;
    music.volume = 0.4;

    let hasStarted = false;

    const startMusic = async () => {
        if (hasStarted) return;

        try {
            await music.play();

            hasStarted = true;

            window.removeEventListener("click", startMusic);
            window.removeEventListener("touchstart", startMusic);
            window.removeEventListener("pointerdown", startMusic);
            window.removeEventListener("keydown", startMusic);
            window.removeEventListener("scroll", startMusic);
        } catch (error) {
            console.log("El navegador bloqueó la música hasta una interacción válida.");
        }
    };

    window.addEventListener("click", startMusic);
    window.addEventListener("touchstart", startMusic);
    window.addEventListener("pointerdown", startMusic);
    window.addEventListener("keydown", startMusic);
    window.addEventListener("scroll", startMusic);
}