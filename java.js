document.addEventListener("DOMContentLoaded", function() {
    const titulo = document.querySelector("header h1");
    const texto = titulo.textContent;
    titulo.textContent = "";
    let i = 0;
    function digitar() {
        if (i < texto.length) {
            titulo.textContent += texto.charAt(i);
            i++;
            setTimeout(digitar, 100);
        }
    }
    digitar();
});

document.addEventListener("DOMContentLoaded", function() {
    // Efeito de digitação no título (se já existir, mantenha)
    const titulo = document.querySelector("header h1");
    if (titulo) {
        const texto = titulo.textContent;
        titulo.textContent = "";
        let i = 0;
        function digitar() {
            if (i < texto.length) {
                titulo.textContent += texto.charAt(i);
                i++;
                setTimeout(digitar, 100);
            }
        }
        digitar();
    }

    // Efeito de palavras que mudam
    const palavras = [
        { texto: "Criativo", cor: "rgb(212, 95, 95)" },
        { texto: "Inovador", cor: "rgb(212, 95, 95)" },
        { texto: "Dedicado", cor: "rgb(212, 95, 95)" },
        { texto: "Estudante Web", cor: "rgb(212, 95, 95)" },
        { texto: "Diciplinado", cor: "rgb(212, 95, 95)" },
        { texto: "Persistente", cor: "rgb(212, 95, 95)" }
    ];
    let palavraIndex = 0;
    let letraIndex = 0;
    const elemento = document.getElementById("efeito-palavra");

    function digitarPalavra() {
        const { texto, cor } = palavras[palavraIndex];
        elemento.innerHTML = `<span style="color:${cor}">${texto.slice(0, letraIndex)}</span><span class="cursor"></span>`;
        if (letraIndex < texto.length) {
            letraIndex++;
            setTimeout(digitarPalavra, 120);
        } else {
            setTimeout(apagarPalavra, 2500);
        }
    }

    function apagarPalavra() {
        const { texto, cor } = palavras[palavraIndex];
        elemento.innerHTML = `<span style="color:${cor}">${texto.slice(0, letraIndex)}</span><span class="cursor"></span>`;
        if (letraIndex > 0) {
            letraIndex--;
            setTimeout(apagarPalavra, 60);
        } else {
            palavraIndex = (palavraIndex + 1) % palavras.length;
            setTimeout(digitarPalavra, 500);
        }
    }

    if (elemento) {
        digitarPalavra();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav a");
    const path = window.location.pathname.split("/").pop();
    links.forEach(link => {
        link.classList.remove("active"); // Remove de todos
        if (
            link.getAttribute("href") === path ||
            (link.getAttribute("href") === "index.html" && (path === "" || path === "/"))
        ) {
            link.classList.add("active"); // Adiciona só no atual
        }
    });
});