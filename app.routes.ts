import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PartnersComponent } from './components/partners/partners.component';
import { JoinComponent } from './components/join/join.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path : 'home', component : HomeComponent},
    {path : 'about', component : AboutComponent},
    {path : 'partners', component : PartnersComponent},
    {path : 'join', component : JoinComponent}
];
