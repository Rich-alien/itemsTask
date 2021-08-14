import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthorizationComponent} from "./common/authorization/authorization.component";
import {ListOfItemsComponent} from "./common/list-of-items/list-of-items.component"; // CLI imports router

const routes: Routes = [
  {path: '', component: AuthorizationComponent},
  {path: 'list', component: ListOfItemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
