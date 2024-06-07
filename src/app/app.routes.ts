import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { MenuComponent } from './sitio/menu/menu.component';
import { CabeceraComponent } from './sitio/cabecera/cabecera.component';
import { BodyComponent } from './sitio/body/body.component';
import { FooterComponent } from './sitio/footer/footer.component';
import { SliderComponent } from './sitio/slider/slider.component';

export const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'cabecera', component: CabeceraComponent },
  { path: 'body', component: BodyComponent },
  { path: 'footer', component: FooterComponent },
  {path: 'slider', component: SliderComponent}
];