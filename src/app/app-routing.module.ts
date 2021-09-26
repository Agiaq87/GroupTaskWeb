import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




// const HomeComponent=()=> import('././home/home.module').then(x => x.HomeModule)path:"home",loadChildren:HomeComponent


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
