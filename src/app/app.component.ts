import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TirardadosComponent } from './tirardados/tirardados.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TirardadosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aam-ejercicio16';
}
