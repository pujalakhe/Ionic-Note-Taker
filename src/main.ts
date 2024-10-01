import { bootstrapApplication } from '@angular/platform-browser';
import {
  RouteReuseStrategy,
  provideRouter,
  withPreloading,
  PreloadAllModules,
} from '@angular/router';
import {
  IonicRouteStrategy,
  provideIonicAngular,
} from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'note-taker-7eda8',
        appId: '1:75311697577:web:7cd387cdd3120e7536e3b8',
        storageBucket: 'note-taker-7eda8.appspot.com',
        apiKey: 'AIzaSyCf0DKKQiw0xvxw9PStJNaLpSJR8UoZnNI',
        authDomain: 'note-taker-7eda8.firebaseapp.com',
        messagingSenderId: '75311697577',
        measurementId: 'G-EKH1VD4149',
      })
    ),
    provideFirestore(() => getFirestore()),
  ],
});
