self.addEventListener('install', (e) => {
  console.log('install' , e);
  console.log('this' , this);
});

self.addEventListener('activate', (e) => {
  console.log('active' , e);

  return self.clients.claim();
});