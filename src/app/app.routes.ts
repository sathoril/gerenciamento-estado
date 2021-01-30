import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { NotFoundComponent } from './navegacao/not-found/not-found.component';
import { TodoComponent } from './demos/todo-list/todo.component';

const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},    
    { path: 'home', component: HomeComponent},
    { path: 'todo', component: TodoComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports:[
        RouterModule.forRoot(rootRouterConfig, { enableTracing: false })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}