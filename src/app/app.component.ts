import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // <-- Add this import
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true, // If standalone is enabled
  imports: [RouterModule], // <-- Add RouterModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamic-dashboard';
  version = environment.version;
  isProd = environment.production;
}