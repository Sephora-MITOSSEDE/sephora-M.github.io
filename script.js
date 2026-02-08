// --- FONCTION UNIQUE POUR TOUTES LES MODALES ---
function openModal(id) {
    // Cas 1 : C'est une expertise (ex: modal-prog)
    if (id.startsWith('modal-')) {
        const modalContainer = document.getElementById('modal-container');
        const modalBody = document.getElementById('modal-body');
        
        // On récupère le suffixe (ex: prog, ml, nlp)
        const type = id.split('-')[1]; 
        const contentId = 'content-' + type;
        const sourceContent = document.getElementById(contentId);

        if (sourceContent && modalBody) {
            modalBody.innerHTML = sourceContent.innerHTML;
            modalContainer.style.display = "block";
            document.body.style.overflow = "hidden";
        }
    } 
    // Cas 2 : C'est un projet (ex: modal1, modal2)
    else {
        const modal = document.getElementById(id);
        if (modal) {
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
        }
    }
}

// --- FONCTION DE FERMETURE ---
function closeModal(id) {
    // Si un ID est passé (Projets)
    if (id) {
        document.getElementById(id).style.display = "none";
    } 
    // Sinon on ferme le container global (Expertises)
    else {
        document.getElementById('modal-container').style.display = "none";
    }
    document.body.style.overflow = "auto";
}

// Fermeture au clic à l'extérieur
window.onclick = function(event) {
    if (event.target.classList.contains('modal-bg') || event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
}