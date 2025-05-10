console.log("app.js betöltve!");

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        console.log(`Gombra kattintottak: ${button.textContent}`);
    });
});

// Navigációs logika a gombokhoz
function navigate(choice) {
    console.log("Gomb megnyomva: " + choice);
    if (choice === 'blue') {
        console.log("Kék modal megnyitása");
        openBlueModal();  // Kék pirula → Valóság Kapuja (hetkoznapi.jpg)
    } else if (choice === 'red') {
        console.log("Piros modal megnyitása");
        openRedModal();  // Piros pirula → Nova Világa (nova_portal.jpg)
    }
}

// Modal megnyitása (kék pirula - Valóság Kapuja)
function openBlueModal() {
    console.log("openBlueModal() fut");
    const modal = document.getElementById('modal-blue');
    if (modal) {
        modal.style.display = 'block';
    } else {
        console.error("Nem találom a modal-blue elemet!");
    }
}

// Modal bezárása (kék pirula)
function closeBlueModal() {
    console.log("closeBlueModal() fut");
    document.getElementById('modal-blue').style.display = 'none';
}

// Modal megnyitása (piros pirula - Nova Portál)
function openRedModal() {
    console.log("openRedModal() fut");
    const modal = document.getElementById('modal-red');
    if (modal) {
        modal.style.display = 'block';
        document.getElementById('red-image').style.animation = 'portalOpen 0.5s forwards'; // Csökkentett idő
    } else {
        console.error("Nem találom a modal-red elemet!");
    }
}

// Modal bezárása (piros pirula)
function closeRedModal() {
    console.log("closeRedModal() fut");
    document.getElementById('modal-red').style.display = 'none';
}

function exploreFurther() {
    console.log("Felfedezés indul!");

    // Jelenlegi modalt bezárjuk
    closeRedModal();

    // Megjelenítjük a lake nézetet
    const lakeView = document.getElementById('lake-view');
    if (lakeView) {
        lakeView.style.display = 'block';
    } else {
        console.error("Nem találom a #lake-view elemet!");
    }

    // Itt nézd meg, van-e valami logika, ami a body-t eltünteti
    document.body.style.display = "block"; // ezt tedd be ide
}

function exploreFurther() {
    console.log("Felfedezés indul!");

    // Előző nézetek bezárása
    closeRedModal();
    document.getElementById('lake-view').style.display = 'none';

    // Megjelenítjük a mátrix nézetet, animációval
    const matrixView = document.getElementById('matrix-view');
    if (matrixView) {
        console.log("Mátrix nézet megjelenítése!");
        matrixView.style.display = 'flex';
    } else {
        console.error("Nem találom a #matrix-view elemet!");
    }
}

function goBackToMain() {
    console.log("Visszatérés a nyitóoldalra");
    
    // Előző nézetek elrejtése
    document.getElementById('matrix-view').style.display = 'none';
    document.getElementById('lake-view').style.display = 'none';
    document.getElementById('modal-blue').style.display = 'none';
    document.getElementById('modal-red').style.display = 'none';
    
    // Megjelenítjük a nyitóoldalt
    document.querySelector('.header').style.display = 'block';
    document.querySelector('.button-container').style.display = 'flex';
    document.body.style.display = 'block';
    console.log("Nyitóoldal megjelenítve!");
}
    document.getElementById('intro-text').classList.remove('moved-up');
    document.getElementById('intro-text').classList.add('start-position');
    document.getElementById('intro-text').style.transform = "translateY(0px)";
    document.getElementById('intro-text').style.top = "100px"; // vagy amennyi az eredeti
    document.getElementById('intro-text').style.opacity = "1"; // ha eltűnt, visszaállítjuk

function resetIntroText() {
    const introText = document.querySelector('.intro-text');
    if (introText) {
        introText.style.position = "absolute";
        introText.style.top = "70%";
        introText.style.left = "50%";
        introText.style.transform = "translate(-50%, -50%)";
        }
    }