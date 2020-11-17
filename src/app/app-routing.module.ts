import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'userlogin',
    },  

    {
        path: 'personaje',
        loadChildren: () => import('./components/personaje/personaje.module').then(
            mod => mod.PersonajeModule),
    }, 

    {
        path: 'personajes',
        loadChildren: () => import('./components/personajes/personajes.module').then(
            mod => mod.PersonajesModule),
    },

    {
        path: 'residentes',
        loadChildren: () => import('./components/residentes/residentes.module').then(
            mod => mod.ResidentesModule),
    },

    {
        path: 'empleados',
        loadChildren: () => import('./components/empleados/empleados.module').then(
            mod => mod.EmpleadosModule),
    },

    // Default Site
    {
        path: '**',
        redirectTo: 'notfound',
    },
    
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: true,
            onSameUrlNavigation: 'reload',
        })
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }