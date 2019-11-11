var defferedPrompt;

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(() => console.log('register'))
};

window.addEventListener('beforeinstallprompt', (e) => {
  console.log('fire')
  defferedPrompt = e;
  showInstallPromotion();
});