import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideRouter, Routes } from "@angular/router";
import { provideHttpClient } from "@angular/common/http";

import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatFormFieldControl } from "@angular/material/form-field";
import { MatCardModule } from "@angular/material/card";
import { provideAnimations } from '@angular/platform-browser/animations'; // Import animations


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default route
  { path: 'home', loadComponent: () => import('./my-page/my-page.component').then(m => m.MyPageComponent) },
  { path: 'footer', loadComponent: () => import('./footer/footer.component').then(m => m.FooterComponent) },
  { path: 'header', loadComponent: () => import('./header/header.component').then(m => m.HeaderComponent) },
  { path: 'my-form', loadComponent: () => import('./my-form/my-form.component').then(m => m.MyFormComponent) },
  { path: 'template', loadComponent: () => import('./template-form/template-form.component').then(m => m.TemplateFormComponent) },
  { path: '**', redirectTo: 'home' }, // Wildcard for 404s
];

// todo: app material not working, but no errors
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    provideAnimations(),
  ],
};
