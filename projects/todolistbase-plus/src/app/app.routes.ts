import { Routes } from '@angular/router';
//import { AppComponent } from './app.component';
import { OldTodoComponent } from './old-todo/old-todo.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  /*{ path: 'all', component: AppComponent },
  { path: 'active', component: AppComponent },
  { path: 'completed', component: AppComponent },
  { path: '', redirectTo: '/all', pathMatch: 'full' },
*/
  { path: 'home', component: HomeComponent },
    
  { path: 'old-todolist', component: OldTodoComponent,
      children: [
          { path: 'all', component: OldTodoComponent },
          { path: 'active', component: OldTodoComponent },
          { path: 'completed', component: OldTodoComponent },
        //  { path: '', redirectTo: '/all', pathMatch: 'full' },
      ]
   },
  { path: '', redirectTo: '/home', pathMatch: 'full' }  // Redirige alla pagina Home di default
];