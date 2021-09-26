import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from '././home/home.module';



const HomeComponent=()=> import('././home/home.module').then(x => x.HomeModule)


const routes: Routes = [{path:"home",loadChildren:HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
