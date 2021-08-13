import {AuthorizationComponent} from "./authorization/authorization.component";
import {NgModule} from "@angular/core";
import {CommonModule as NgCommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ListOfItemsComponent} from "./list-of-items/list-of-items.component";

@NgModule({
  imports: [
    NgCommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AuthorizationComponent,
    ListOfItemsComponent
  ],
  exports: [
    AuthorizationComponent,
    ListOfItemsComponent
  ]

})
export class CommonModule {
}
