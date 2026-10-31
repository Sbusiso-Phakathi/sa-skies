/* Dr Maweni service worker: device alerts (works while the app is open or in the background).
   The push handler below is ready for server push later. */
self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("push",e=>{let d={};try{d=e.data.json()}catch(_){}
  e.waitUntil(self.registration.showNotification(d.title||"Dr Maweni",{body:d.body||"",data:d}))});
self.addEventListener("notificationclick",e=>{e.notification.close();
  e.waitUntil(self.clients.matchAll({type:"window",includeUncontrolled:true}).then(c=>c.length?c[0].focus():self.clients.openWindow("./")))});
