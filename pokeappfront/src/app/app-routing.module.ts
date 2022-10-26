import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { PokedetailComponent } from './pages/pokedetail/pokedetail.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path: 'contacto',
    component:ContactoComponent,
    pathMatch:'full'
  },
  {
    path: 'about',
    component:AboutmeComponent,
    pathMatch:'full'
  },
  {
    path:'pokemon/:id',
    component:PokedetailComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }