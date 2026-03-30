/* ============================================================
   BASE DE DONNÉES LOCALE (Ciblée : Anciens & Nouveaux)
   Note : L'adresse est obligatoire pour tous les utilisateurs.
   ============================================================ */
const tickets = {
  "999": {
    nom: "Triple Nine",
    type: "STAFF",
    photo: "https://i.postimg.cc/wx2dwhBV/IMG_3106.jpg",
    paye: 10000,
    total: 10000,
    adresse: "Abidjan, Cocody, Cité des Arts"
  },


  "888": {
    nom: "Marc Antoine",
    type: "PASS VIP",
    photo: "https://i.postimg.cc/placeholder.jpg",
    paye: 25000,
    total: 25000,
    adresse: "Cotonou, Quartier Haie Vive"
  },

"104758": {
    nom: "Trey",
    type: "VIP",
    photo: "https://i.postimg.cc/52Zr3CPN/0d7e72d9_ec9b_4fa8_b8e9_192ee404895b.jpg",
    paye: 50000,
    total: 50000,
    adresse: ""
  },


"837492": {
    nom: "Esdras",
    type: "PASS STANDARD",
    photo: "https://i.postimg.cc/HkfN2ySn/db14184e_9a72_41d0_947b_fa47cc87d171.jpg",
    paye: 7000,
    total: 7000,
    adresse: ""
  },


"659203": {
    nom: "LEGOATMADARA666",
    type: "PASS STANDARD",
    photo: "https://i.postimg.cc/gkJZ4pHB/0726c343-3165-4d78-a555-8b9b35038ea8.jpg",
    paye: 10000,
    total: 10000,
    adresse: ""
  },

  "482917": {
    nom: "Precieuse",
    type: "PASS STANDARD",
    photo: "https://i.postimg.cc/vZfK1d3D/f4767565_f024_45a0_bc65_6376ff569e69.jpg",
    paye: 7000,
    total: 7000,
    adresse: ""
  },


   "730164": {
    nom: "xxxxxx",
    type: "PASS STANDARD",
    photo: "https://i.postimg.cc/sXMvw60m/20a3af58-e303-499a-b05e-76169d91d380.jpg",
    paye: 10000,
    total: 10000,
    adresse: ""
  },


    "918450": {
    nom: "Junior",
    type: "PASS STANDARD",
    photo: "https://i.postimg.cc/W4Vpz2M0/cb1c2564_7d5b_4a73_8c43_34627d3171c3.jpg",
    paye: 3000,
    total: 10000,
    adresse: ""
  },



   "256839": {
    nom: "Ibrahim",
    type: "PASS STANDARD",
    photo: "https://i.postimg.cc/q7rBqk8n/7094c118_e5c1_416e_83ff_67fba0ad0f21.jpg",
    paye: 2000,
    total: 10000,
    adresse: ""
  },

   


   
   "803612": {
    nom: "Arnaud luzeski",
    type: "bénévole",
    photo: "https://i.postimg.cc/6Q53tV62/b45a68ec_8459_487e_93e8_cebc0b649f9f.jpg",
    paye: 5000,
    total: 5000,
    adresse: ""
  },

   "143795": {
    nom: "Alex CDG",
    type: "bénévole",
    photo: "https://i.postimg.cc/KYzHK55x/5c03474f_513c_4fab_8bda_5b59b36bb9ec.jpg",
    paye: 5000,
    total: 5000,
    adresse: ""
  },


       "602487": {
    nom: "Serena",
    type: "bénévole",
    photo: "https://i.postimg.cc/v85wcp77/7ef2b291_0719_4743_8f3e_59f67f94ea7f.jpg",
    paye: 5000,
    total: 5000,
    adresse: ""
  },


   "785104": {
    nom: "Ocean Grace",
    type: "Pass standard",
    photo: "https://i.postimg.cc/pVKMpgQf/787e879e_cc43_46df_98b1_6ff9bed55162.jpg",
    paye: 2000,
    total: 10000,
    adresse: ""
  },



   "468215": {
    nom: "Emmanuel",
    type: "Pass standard",
    photo: "https://i.postimg.cc/T3g1R5Z1/56c8ddf4_9ea7_4c18_aa88_d6ff4363c574.jpg",
    paye: 2000,
    total: 10000,
    adresse: ""
  },


   "921573": {
    nom: "Beauté tactile",
    type: "Pass standard",
    photo: "https://i.postimg.cc/YCY0pLJj/3221fb73_8c1e_41e4_8232_709760cb015f.jpg",
    paye: 2000,
    total: 7000,
    adresse: ""
  },


   "349860": {
    nom: "Nutella",
    type: "Pass standard",
    photo: "https://i.postimg.cc/RZKhMJjF/9125bfd5_90f6_4bc1_b9b4_de12c45d2da7.jpg",
    paye: 2000,
    total: 7000,
    adresse: ""
  },


   "507894": {
    nom: "Maelys",
    type: "Bénévole",
    photo: "https://i.postimg.cc/L4yJKLG1/7ca799dd_d052_4c2c_99f4_463344b017cb.jpg",
    paye: 5000,
    total: 5000,
    adresse: ""
  },

"294578": {
    nom: "Stan Ogochumaru",
    type: "bénévole",
    photo: "https://i.postimg.cc/xjsXDMBb/5bfa43cb_58ac_4a46_b379_82234902201f.jpg",
    paye: 5000,
    total: 5000,
    adresse: ""
  },


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




/* ============================================================
   AUTO-REMPLISSAGE VIA URL (QR CODE)
   Exemple: sites.com/pass.html?ticket=999
   ============================================================ */

window.onload = () => {
  // 1. On récupère les paramètres après le "?" dans l'URL
  const urlParams = new URLSearchParams(window.location.search);
  const ticketParURL = urlParams.get('ticket'); // cherche "ticket="

  if (ticketParURL) {
    // 2. On remplit la barre de recherche
    ticketInput.value = ticketParURL;

    // 3. Optionnel : On peut même lancer la vérification 
    // automatiquement pour qu'il n'ait même pas à appuyer
    verifyBtn.click(); 
  }
};


ticketInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") verifyBtn.click();
});
