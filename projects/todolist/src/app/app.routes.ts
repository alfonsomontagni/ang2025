import {  Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OldTodolistComponent } from './components/old-todolist/old-todolist.component';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    
    { path: 'old-todolist', component: OldTodolistComponent,
        children: [
            { path: 'all', component: OldTodolistComponent },
            { path: 'active', component: OldTodolistComponent },
            { path: 'completed', component: OldTodolistComponent },
          //  { path: '', redirectTo: '/all', pathMatch: 'full' },
        ]
     },
    { path: '', redirectTo: '/home', pathMatch: 'full' }  // Redirige alla pagina Home di default
  ];
   