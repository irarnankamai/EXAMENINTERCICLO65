import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PrincipalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Examen(Irar Nankamai)';
}
