function copy () {
    let copyArea = document.querySelector("textarea");
    let text = document.getElementById("result");
    text.select();
    document.execCommand("copy");
   
    copyArea.classList.add("active");
    window.getSelection().removeAllRanges();
    setTimeout(() => {
        document.getElementById("copy-btn").style.display="none";
        copyArea.classList.remove("active");
    }, 2500);
    
}
