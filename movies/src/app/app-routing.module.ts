import { ViewComponent } from './componants/view/view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componants/home/home.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: '', component:HomeComponent},
  {path: 'veiw/:pId', component:ViewComponent},

  {
    path: 'account', 
    loadChildren: () => import('./componants/account/account.module').then(m => m.AccountModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
