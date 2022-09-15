import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditItemComponent } from './add-edit-item/add-edit-item.component';
import { ListItemComponent } from './list-item/list-item.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: ListItemComponent
      },
      {
        path: "addItem",
        component: AddEditItemComponent
      },
      {
        path: "editItem/:id",
        component: AddEditItemComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
