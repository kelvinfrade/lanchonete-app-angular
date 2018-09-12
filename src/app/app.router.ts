import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { ClientesComponent } from 'src/app/pages/clientes/clientes.component';
import { ErrorComponent } from 'src/app/pages/error/error.component';
import { ProdutosComponent } from 'src/app/pages/produtos/produtos.component';




const routes:Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'clientes',
        component:ClientesComponent
    },
    {
        path:'produtos',
        component:ProdutosComponent
    },
    {
        path:'**',
        component:ErrorComponent
    },
]

export const RoutingModule = RouterModule.forRoot(routes);