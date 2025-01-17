import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TeamComponent } from './team/team.component';
import { MealsComponent } from './meals/meals.component';
import { SeafoodComponent } from './meals/seafood/seafood.component';
import { PastaComponent } from './meals/pasta/pasta.component';
import { BreakfastComponent } from './meals/breakfast/breakfast.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

export const routes: Routes = [
  {path:"",redirectTo:'home',pathMatch:'full'},
  {path:"home",component:HomeComponent,title:'Home'},
  {path:"about",component:AboutComponent,title:'About'},
  {path:"contacts",component:ContactsComponent,title:'Contacts'},
  {path:"teams",component:TeamComponent,title:"Teams"},
  {path:"meals",component:MealsComponent,title:"Meals",
    children:[
      {path:"",redirectTo:'seafood',pathMatch:'full'},
      {path:"seafood",component:SeafoodComponent,title:'Seafood'},
      {path:"pasta",component:PastaComponent,title:'Pasta'},
      {path:"breakfast",component:BreakfastComponent,title:'BreakFast'}
  ]
  },
  {path:"**",component:PageNotFoundComponentComponent,title:"404: NOT_FOUND"}
];
