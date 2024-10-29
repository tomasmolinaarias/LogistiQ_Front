import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { routes } from './app/app.routes'; // Asegúrate de que este archivo exista y tenga las rutas definidas

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Asegúrate de definir correctamente tus rutas
    provideAnimations(),   // Para las animaciones de Angular Material
    importProvidersFrom(   // Importa aquí los módulos necesarios
      ReactiveFormsModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule
    )
  ],
}).catch((err) => console.error(err));
