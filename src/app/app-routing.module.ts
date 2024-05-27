import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageComponent } from './message/message.component';
import { AddmessageComponent } from './addmessage/addmessage.component';

const routes: Routes = [
  {path:'messages',component:MessageComponent},
  {path:'addmessage',component:AddmessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
