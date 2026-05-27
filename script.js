const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const languageButton = document.querySelector("[data-language-toggle]");
let currentLanguage = "en";

const translations = {
  fr: {
    navInfos: "Infos",
    navWipe: "Wipe",
    navRules: "Regles",
    navTeam: "Equipe",
    navJoin: "Rejoindre",
    heroEyebrow: "Serveur Rust francophone",
    heroText: "Une base propre pour presenter votre serveur Rust, vos wipes, vos regles, votre staff et toutes les infos utiles pour la communaute.",
    heroJoin: "Rejoindre le serveur",
    heroInfos: "Voir les infos",
    serverStatus: "Serveur ouvert",
    serverIp: "IP : 5.39.17.44:28342",
    infoEyebrow: "Informations",
    infoTitle: "Tout ce qu'il faut savoir",
    modeText: "Gameplay ultra rapide, action permanente et progression acceleree.",
    slotsText: "Une capacite large pour garder un serveur actif et vivant.",
    mapText: "Une carte personnalisee pensee pour le PVP, les raids et les grosses zones de fight.",
    gameplayText: "Un serveur oriente combat avec farm booste, raids rapides et affrontements reguliers.",
    wipeEyebrow: "Planning",
    wipeTitle: "Wipe et evenements",
    wipeText: "Annonce ici les dates de wipe, les horaires importants, les events prevus et les changements de configuration. Cette zone est faite pour etre mise a jour souvent.",
    wipeMap: "Wipe map",
    wipeMapText: "20h00 - Nouveau depart pour tout le monde.",
    eventTitle: "Event communaute",
    eventText: "Raid base, arene PVP ou convoi special.",
    bpTitle: "Wipe BP",
    bpText: "A adapter selon ton choix de serveur.",
    rulesEyebrow: "Communaute",
    rulesTitle: "Regles principales",
    ruleRespect: "Respect obligatoire",
    ruleRespectText: "Pas d'insultes graves, harcelement, racisme ou comportement toxique.",
    ruleCheat: "Triche interdite",
    ruleCheatText: "Cheat, scripts, glitch abuse et contournement de ban sont interdits.",
    ruleFairplay: "Fair-play",
    ruleFairplayText: "Les raids et le PVP sont autorises selon les limites du serveur.",
    teamEyebrow: "Staff",
    teamTitle: "L'equipe XZB",
    teamText: "Une equipe presente pour gerer le serveur, aider les joueurs et garder une ambiance propre dans la communaute.",
    topPlayersRole: "Top joueurs",
    connectEyebrow: "Connexion",
    connectTitle: "Rejoins XZB",
    connectText: "Connecte-toi au serveur Rust ou rejoins la communaute sur Discord et TikTok.",
    copyIp: "Copier l'IP",
    copiedIp: "IP copiee",
    footerText: "Discord, TikTok et IP serveur disponibles."
  },
  en: {
    navInfos: "Info",
    navWipe: "Wipe",
    navRules: "Rules",
    navTeam: "Team",
    navJoin: "Join",
    heroEyebrow: "French Rust server",
    heroText: "A clean home for the XZB Rust server, with wipes, rules, staff and every useful detail for the community.",
    heroJoin: "Join the server",
    heroInfos: "View info",
    serverStatus: "Server online",
    serverIp: "IP: 5.39.17.44:28342",
    infoEyebrow: "Information",
    infoTitle: "Everything you need to know",
    modeText: "Ultra-fast gameplay, constant action and accelerated progression.",
    slotsText: "A large player capacity built to keep the server active and alive.",
    mapText: "A custom map designed for PVP, raids and major fight zones.",
    gameplayText: "A combat-focused server with boosted farming, fast raids and regular battles.",
    wipeEyebrow: "Schedule",
    wipeTitle: "Wipes and events",
    wipeText: "Post wipe dates, important times, upcoming events and configuration changes here. This area is made to be updated often.",
    wipeMap: "Map wipe",
    wipeMapText: "8:00 PM - A fresh start for everyone.",
    eventTitle: "Community event",
    eventText: "Raid base, PVP arena or special convoy.",
    bpTitle: "BP wipe",
    bpText: "Adjust this depending on your server setup.",
    rulesEyebrow: "Community",
    rulesTitle: "Main rules",
    ruleRespect: "Respect required",
    ruleRespectText: "No serious insults, harassment, racism or toxic behavior.",
    ruleCheat: "No cheating",
    ruleCheatText: "Cheats, scripts, glitch abuse and ban evasion are forbidden.",
    ruleFairplay: "Fair play",
    ruleFairplayText: "Raids and PVP are allowed within the server limits.",
    teamEyebrow: "Staff",
    teamTitle: "The XZB team",
    teamText: "An active team to manage the server, help players and keep the community clean.",
    topPlayersRole: "Top players",
    connectEyebrow: "Connection",
    connectTitle: "Join XZB",
    connectText: "Connect to the Rust server or join the community on Discord and TikTok.",
    copyIp: "Copy IP",
    copiedIp: "IP copied",
    footerText: "Discord, TikTok and server IP available."
  }
};

function applyLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const value = translations[language][key];

    if (value) {
      element.textContent = value;
    }
  });

  if (languageButton) {
    languageButton.textContent = language === "fr" ? "EN" : "FR";
  }
}

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}

document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    const value = button.getAttribute("data-copy") || "";
    try {
      await navigator.clipboard.writeText(value);
      button.textContent = translations[currentLanguage].copiedIp;
      setTimeout(() => {
        button.textContent = translations[currentLanguage].copyIp;
      }, 1800);
    } catch {
      button.textContent = value;
    }
  });
});

if (languageButton) {
  languageButton.addEventListener("click", () => {
    applyLanguage(currentLanguage === "fr" ? "en" : "fr");
  });
}

applyLanguage(currentLanguage);
