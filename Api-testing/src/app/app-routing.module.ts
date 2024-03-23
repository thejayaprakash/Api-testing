import { NgModule } from '@angular/core';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { APIConnectionComponent } from './api-connection/api-connection.component';

const routes: Routes = [
{
  path:'',
  component:APIConnectionComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
