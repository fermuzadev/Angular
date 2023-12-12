import { RouterModule, Routes } from "@angular/router";

import {
    AboutComponent,
    MainComponent,
    ItemdetailComponent
} from './components/index.pages';

const app_routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'about', component: AboutComponent},
    {path: 'product', component: ItemdetailComponent},
    {path: '**', pathMatch: 'full', redirectTo: ''}
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash:true});