document.getElementById("copybtn").addEventListener("click", function() {
    var copyText = document.getElementById("outputText");
    var textArea = document.createElement("textarea");
    textArea.value = copyText.innerText; 
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
});
