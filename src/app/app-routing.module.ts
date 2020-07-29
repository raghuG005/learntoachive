import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{ DevroletimelineComponent } from './devroletimeline/devroletimeline.component';
import {AboutComponent} from './about/about.component'

const routes: Routes = [
{
	path:'',
	redirectTo:'home',
	pathMatch:'full'
},
{
	path:'home',
	component:DevroletimelineComponent
},
{
	path:'about',
	component:AboutComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
