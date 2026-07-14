// Service worker minimal — nécessaire pour que le navigateur propose
// "Ajouter à l'écran d'accueil". Ne met rien en cache pour l'instant :
// l'application a besoin d'internet pour fonctionner (Firebase).
self.addEventListener('install', () => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
