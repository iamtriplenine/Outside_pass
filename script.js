/* ============================================================
   BASE DE DONNÉES LOCALE (Ciblée : Anciens & Nouveaux)
   Note : L'adresse est obligatoire pour tous les utilisateurs.
   ============================================================ */
const tickets = {
  "999": {
    nom: "Triple Nine",
    type: "PASS GOLD",
    photo: "https://i.postimg.cc/jq1NCnR0/IMG-0915.jpg",
    paye: 10000,
    total: 20000,
    adresse: "Abidjan, Cocody, Cité des Arts"
  },
  "888": {
    nom: "Marc Antoine",
    type: "PASS VIP",
    photo: "https://i.postimg.cc/placeholder.jpg",
    paye: 25000,
    total: 25000,
    adresse: "Cotonou, Quartier Haie Vive"
  }
};

/* ============================================================
   SÉLECTEURS DOM
   ============================================================ */
// Pages
const pageCheck = document.getElementById("page-check");
const pageTicket = document.getElementById("page-ticket");

// Inputs & Boutons
const ticketInput = document.getElementById("ticketInput");
const verifyBtn = document.getElementById("verifyBtn");
const backBtn = document.getElementById("backBtn");
const errorMsg = document.getElementById("error");

// Éléments du Ticket
const photo = document.getElementById("photo");
const nom = document.getElementById("nom");
const typeBadge = document.getElementById("type");
const priceText = document.getElementById("priceText");
const barFill = document.getElementById("barFill");
const barContainer = document.querySelector(".bar");
const accessDiv = document.querySelector(".access");

/* ============================================================
   LOGIQUE DE VÉRIFICATION
   ============================================================ */
verifyBtn.onclick = () => {
  const code = ticketInput.value.trim();
  const client = tickets[code];

  // 1. GESTION D'ERREUR : Ticket non trouvé
  if (!client) {
    errorMsg.style.display = "block";
    ticketInput.style.borderColor = "#ef4444";
    return;
  }

  // 2. TRANSITION DE PAGE
  errorMsg.style.display = "none";
  ticketInput.style.borderColor = "";
  pageCheck.classList.remove("active");
  pageTicket.classList.add("active");

  // 3. INJECTION DES DONNÉES DE BASE
  photo.src = client.photo;
  nom.textContent = client.nom;

  // 4. LOGIQUE DE PAIEMENT & AUTORISATION
  const estPayeTotalement = client.paye >= client.total;
  const pourcentage = (client.paye / client.total) * 100;

  priceText.textContent = `${client.paye} / ${client.total} FCFA`;
  barFill.style.width = `${pourcentage}%`;

  if (estPayeTotalement) {
    // Cas : Autorisé
    typeBadge.textContent = client.type;
    typeBadge.className = "badge"; // Reset styles
    accessDiv.textContent = " ACCÈS AUTORISÉ";
    accessDiv.classList.remove("status-denied");
    barContainer.classList.remove("incomplete");
  } else {
    // Cas : Partiellement payé (Réservé)
    typeBadge.textContent = "RÉSERVÉ";
    typeBadge.className = "badge reserved"; // On ajoute le style orange
    accessDiv.textContent = " ACCÈS REFUSÉ (INCOMPLET)";
    accessDiv.classList.add("status-denied");
    barContainer.classList.add("incomplete");
  }

  /* Note : L'adresse est stockée dans client.adresse. 
     Si tu as ajouté un <p id="adresse"> dans ton HTML, tu peux l'injecter ici :
     document.getElementById("adresse").textContent = client.adresse;
  */
};

/* ============================================================
   LOGIQUE DU BOUTON RETOUR (STYLE iOS)
   ============================================================ */
backBtn.onclick = () => {
  // Retour à la page de vérification
  pageTicket.classList.remove("active");
  pageCheck.classList.add("active");
  
  // Reset de l'input pour une nouvelle saisie
  ticketInput.value = "";
  barFill.style.width = "0%"; // Reset animation bar
};
