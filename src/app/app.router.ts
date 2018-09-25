import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { ClientesComponent } from 'src/app/pages/clientes/clientes.component';
import { ErrorComponent } from 'src/app/pages/error/error.component';
import { ProdutosComponent } from 'src/app/pages/produtos/produtos.component';
import { ClienteCadastroComponent } from './pages/cliente-cadastro/cliente-cadastro.component';




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
        path:'cliente',
        component:ClienteCadastroComponent
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