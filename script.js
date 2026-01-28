function perkenalan() {
    alert("Halo! Saya Abidzar 👋 Mahasiswa & Web Developer");
}

function toggleBiodata() {
    const biodata = document.getElementById("biodata");
    biodata.style.display =
        biodata.style.display === "none" ? "block" : "none";
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
