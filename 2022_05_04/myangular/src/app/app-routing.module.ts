import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MintaComponent} from '../app/minta/minta.component';
import { FeladatComponent} from '../app/feladat/feladat.component';
import { NotfoundComponent} from '../app/notfound/notfound.component';
import { PipesComponent} from '../app/pipes/pipes.component';
import { AppComponent} from '../app/app.component';
import { ImportalasComponent} from '../app/importalas/importalas.component';
import { EredmenyekComponent} from '../app/eredmenyek/eredmenyek.component';

const routes: Routes = [
  {path:'app',component:AppComponent},
  {path:'minta',component:MintaComponent},
  {path:'feladat',component:FeladatComponent},
  {path:'pipes',component:PipesComponent},
  {path:'notfound',component:NotfoundComponent},
  {path:'importalas',component:ImportalasComponent},
  {path:'eredmenyek',component:EredmenyekComponent},
  {path:'',redirectTo:'/minta',pathMatch:'full'},
  {path:'**',component:MintaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
