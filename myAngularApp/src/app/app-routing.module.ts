import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowComponent } from './show/show.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
	{ path: '',
	  redirectTo: "/show",
	  pathMatch: 'full'
	},
	{ path: 'show', component: ShowComponent },
	{ path: 'add', component: AddComponent },
	{ path: 'edit/:id', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
