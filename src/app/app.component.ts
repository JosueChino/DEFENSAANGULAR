import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './sitio/menu/menu.component';
import { CabeceraComponent } from './sitio/cabecera/cabecera.component';
import { BodyComponent } from './sitio/body/body.component';
import { FooterComponent } from './sitio/footer/footer.component';
import { SliderComponent } from './sitio/slider/slider.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MenuComponent, SliderComponent, CabeceraComponent,BodyComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DEF_CHINO';
}
