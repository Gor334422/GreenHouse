// === Hash-based նավիգացիա և բաժինների կառավարում ===
function navigate(id) {
  event.preventDefault();
  window.location.hash = id;
  showSection(id);
}

function showSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(s => s.style.display = 'none');
  const target = document.getElementById(id);
  if (target) target.style.display = 'block';
}

window.addEventListener('load', () => {
  const hash = window.location.hash.substring(1);
  showSection(hash || 'home');
});

window.addEventListener('hashchange', () => {
  const hash = window.location.hash.substring(1);
  showSection(hash);
});

// === Բովանդակության դինամիկ փոփոխում ըստ բաժնի (գլխավոր, մեր մասին, կապ) ===
function showContent(section) {
  const contentDiv = document.getElementById('content');
  if (!contentDiv) return;

  if (section === 'home') {
    contentDiv.innerHTML = 'Սա է գլխավոր էջի բովանդակությունը։';
  } else if (section === 'about') {
    contentDiv.innerHTML = 'Սա է "Մեր մասին" բաժնի բովանդակությունը։';
  } else if (section === 'contact') {
    contentDiv.innerHTML = 'Կապ հաստատելու համար գրեք մեզ։';
  }
}

// === Login ստուգում ըստ URL-ի query պարամետրերի ===
const params = new URLSearchParams(window.location.search);
const isLogged = params.get("logged");

if (isLogged === "true") {
  console.log("Օգտատերը մուտք է գործել");
  // Այստեղ կարող ես ցույց տալ հատուկ greeting, կամ թաքնված բովանդակություն
}

// === Թաքնված բովանդակության բացում/փակում (interactive .box) ===
function showContentBox(button) {
  const box = button.closest('.box');
  const content = box.querySelector('.hidden-content');
  const backButton = box.querySelector('.back-button');

  if (content && backButton) {
    content.style.display = 'block';
    button.style.display = 'none';
    backButton.style.display = 'inline-block';
  }
}

function hideContentBox(button) {
  const box = button.closest('.box');
  const content = box.querySelector('.hidden-content');
  const viewButton = box.querySelector('button[onclick="showContentBox(this)"]');

  if (content && viewButton) {
    content.style.display = 'none';
    button.style.display = 'none';
    viewButton.style.display = 'inline-block';
  }
}
