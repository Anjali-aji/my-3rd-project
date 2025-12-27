import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Service } from './pages/service/service';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: 'about', component: About },
  { path: 'service', component: Service },
  { path: 'contact', component: Contact },
  { path: '', redirectTo: '/about', pathMatch: 'full' }
];