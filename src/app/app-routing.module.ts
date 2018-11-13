import {NgModule} from '@angular/core';

import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'demo'},
  {path: 'demo', loadChildren: './pages/demo-page/demo-page.module#DemoPageModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
