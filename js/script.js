document.addEventListener("DOMContentLoaded", () => {
    const buttonEncrypt = document.querySelector(".encrypt");
    const buttonDecrypt = document.querySelector(".decrypt");
    const resultArea = document.querySelector(".container__result div");
    const buttonCopy = document.querySelector(".copy");
    const resultSection = document.querySelector(".container__result");
    const textResult = document.getElementById("result");
    const inputText = document.getElementById("txt");

    const showAlert = (message) => {
        alert(message);
    };

    const handleTextProcess = (text, isEncrypt) => {
        if (text === "") {
            showAlert(`Digite um texto para ser ${isEncrypt ? "criptografado" : "descriptografado"}`);
            return;
        }

        if (checkCharacter(text)) {
            showAlert("Apenas letras minúsculas e sem acento.");
            return;
        }

        resultArea.style.display = "none";
        resultSection.style.justifyContent = "space-between";
        textResult.innerHTML = isEncrypt ? encrypt(text) : decrypt(text);
        buttonCopy.style.display = "block";
        inputText.value = "";
    };

    buttonEncrypt.addEventListener("click", () => {
        handleTextProcess(inputText.value, true);
    });

    buttonDecrypt.addEventListener("click", () => {
        handleTextProcess(inputText.value, false);
    });

    buttonCopy.addEventListener("click", () => {
        const textToCopy = textResult.innerText;

        navigator.clipboard.writeText(textToCopy).then(() => {
            buttonCopy.innerHTML = "Copiado!";
            setTimeout(() => {
                buttonCopy.innerHTML = "Copiar";
            }, 2000);
        });
    });

    function checkCharacter(text) {
        let character = /[^a-z\s]/;
        return character.test(text);
    }

    function encrypt(text) {
        return text
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
    }

    function decrypt(text) {
        return text
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
    }
});
