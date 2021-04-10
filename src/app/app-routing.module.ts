import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ngxUiLoaderConfig } from './config/LoaderConfig';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule } from 'ngx-ui-loader';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent, children: [{
    path: '',
      loadChildren: () => import('./component/home/home.module').then(home => home.HomeModule)
    }]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderHttpModule.forRoot({ showForeground: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
