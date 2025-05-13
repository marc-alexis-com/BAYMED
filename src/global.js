// global.js - Fonctions communes pour BAYMED

// Initialisation des fonctionnalités d'accessibilité
document.addEventListener("DOMContentLoaded", function () {
	// Vérifier si des préférences d'accessibilité sont enregistrées
	const fontSize = localStorage.getItem("baymed_fontSize") || "medium";
	const contrast = localStorage.getItem("baymed_contrast") || "normal";

	// Appliquer les préférences
	setFontSize(fontSize);
	setContrast(contrast);

	// Ajouter une classe pour les animations réduites si nécessaire
	if (localStorage.getItem("baymed_reducedMotion") === "true") {
		document.body.classList.add("reduced-motion");
	}
});

// Fonction pour modifier la taille du texte
function setFontSize(size) {
	const html = document.documentElement;

	if (size === "small") {
		html.style.fontSize = "14px";
	} else if (size === "medium") {
		html.style.fontSize = "16px";
	} else if (size === "large") {
		html.style.fontSize = "20px";
	} else if (size === "xlarge") {
		html.style.fontSize = "24px";
	}

	// Enregistrer la préférence
	localStorage.setItem("baymed_fontSize", size);
}

// Fonction pour modifier le contraste
function setContrast(level) {
	const body = document.body;

	if (level === "normal") {
		body.classList.remove("high-contrast");
	} else if (level === "high") {
		body.classList.add("high-contrast");
	}

	// Enregistrer la préférence
	localStorage.setItem("baymed_contrast", level);
}

// Fonction pour réduire les animations
function setReducedMotion(enabled) {
	if (enabled) {
		document.body.classList.add("reduced-motion");
	} else {
		document.body.classList.remove("reduced-motion");
	}

	// Enregistrer la préférence
	localStorage.setItem("baymed_reducedMotion", enabled);
}

// Fonction pour naviguer entre les pages avec transition
function navigateTo(url) {
	// Ajouter une légère transition de fade-out
	document.body.style.opacity = "0.8";

	// Redirection après un court délai
	setTimeout(() => {
		window.location.href = url;
	}, 200);
}

// Fonction pour afficher un message de confirmation
function showConfirmationMessage(message, duration = 3000) {
	// Créer un élément pour le message
	const messageEl = document.createElement("div");
	messageEl.className = "fixed top-4 right-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-md transition-opacity duration-300";
	messageEl.textContent = message;

	// Ajouter au DOM
	document.body.appendChild(messageEl);

	// Supprimer après la durée spécifiée
	setTimeout(() => {
		messageEl.style.opacity = "0";
		setTimeout(() => {
			document.body.removeChild(messageEl);
		}, 300);
	}, duration);
}

// Fonction pour afficher un message d'erreur
function showErrorMessage(message, duration = 3000) {
	// Créer un élément pour le message
	const messageEl = document.createElement("div");
	messageEl.className = "fixed top-4 right-4 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded shadow-md transition-opacity duration-300";
	messageEl.textContent = message;

	// Ajouter au DOM
	document.body.appendChild(messageEl);

	// Supprimer après la durée spécifiée
	setTimeout(() => {
		messageEl.style.opacity = "0";
		setTimeout(() => {
			document.body.removeChild(messageEl);
		}, 300);
	}, duration);
}
