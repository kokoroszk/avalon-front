import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayComponent } from './game/play/play.component';
import { CreateComponent } from './game/create/create.component';
import { ListComponent } from './game/list/list.component';

const routes: Routes = [
  {path: 'play', component: PlayComponent},
  {path: 'create', component: CreateComponent},
  {path: 'list', component: ListComponent},
  {path: '', redirectTo: 'list', pathMatch: 'prefix'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
