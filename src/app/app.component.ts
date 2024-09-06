import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlueButtonComponent } from './blue-button/blue-button.component';
import { ThemableButtonComponent } from './themable-button/themable-button.component';
import { IgnorantComponent } from "./ignorant/ignorant.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BlueButtonComponent, ThemableButtonComponent, IgnorantComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'style-demo';
}
