// Ajoutez vos 100 tickets ici en suivant ce modèle exact :
const listeTickets = {
    "999": { 
        nom: "𝙏𝙧𝙞𝙥𝙡𝙚 𝙉𝙞𝙣𝙚 𝟗𝟗𝟗", 
        vendeur: "Me", 
        type: "PASS GOLD", 
        photo: "https://i.postimg.cc/jq1NCnR0/IMG-0915.jpg" 
    },
    "482901": { 
        nom: "Amynoush", 
        vendeur: "𝙏𝙧𝙞𝙥𝙡𝙚 𝙉𝙞𝙣𝙚 𝟗𝟗𝟗", 
        type: "PASS DUO❤️", 
        photo: "https://i.postimg.cc/XqML68Kx/82b86663-5acb-42c6-8ce2-d139af07d910.jpg" 
    },
    "774920": { 
        nom: "Joseph Amani ", 
        vendeur: "𝙏𝙧𝙞𝙥𝙡𝙚 𝙉𝙞𝙣𝙚 𝟗𝟗𝟗", 
        type: "Stand", 
        photo: "https://i.postimg.cc/9FKFFbBV/e5b00351-90e0-45a7-a91d-5ad4a43655ea.jpg" 
    }
    // Pour ajouter le suivant, mettez une virgule après l'accolade } et recommencez.
};















function verifierTicket() {
    const numeroInput = document.getElementById('ticketInput');
    const numero = numeroInput.value.trim();
    const resultDiv = document.getElementById('resultat');
    const badge = document.getElementById('ticketBadge');
    
    // On cache le résultat précédent avant de faire la nouvelle recherche
    resultDiv.classList.add('hidden');

    const client = listeTickets[numero];

    if (client) {
        // Mise à jour des textes
        document.getElementById('clientNom').innerText = client.nom;
        document.getElementById('vendeurNom').innerText = client.vendeur;
        document.getElementById('clientPhoto').src = client.photo;
        badge.innerText = client.type;

        // Application du style de badge dynamique
        // On remplace les espaces par des tirets pour les classes CSS (ex: PASS GOLD -> type-PASS-GOLD)
        const typeClass = "type-" + client.type.toUpperCase().replace(/\s+/g, '-');
        badge.className = "badge " + typeClass;

        // On affiche le résultat avec un léger délai pour forcer l'animation
        setTimeout(() => {
            resultDiv.classList.remove('hidden');
        }, 50);
        
    } else {
        alert("⚠️ CODE INCONNU : Ce ticket n'existe pas.");
        numeroInput.value = "";
        numeroInput.focus();
    }
}











