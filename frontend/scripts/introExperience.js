export function initIntroExperience() {
    const intro = document.getElementById("introScreen");
    const enterBtn = document.getElementById("enterExperience");
    const music = document.getElementById("backgroundMusic");

    if(!intro || !enterBtn || !music) return;

    music.volume = 0.4;
    music.loop = true;

    let musicStarted = false;

    enterBtn.addEventListener("click", async() => {
        try {
            await music.play();
            musicStarted = true;
        } catch(error) {
            console.log("El navegador bloqueó la música");
        }

        intro.classList.add("hide");
        document.body.style.overflow = "auto";
    });

    document.addEventListener("visibilitychange", () => {

        if(document.hidden) {

            music.pause();

        } else {

            // Solo reanudar si ya había iniciado
            if(musicStarted) {

                music.play().catch(() => {});
            }
        }
    });
}