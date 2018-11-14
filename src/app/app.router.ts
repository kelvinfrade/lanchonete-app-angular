import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { ClientesComponent } from 'src/app/pages/clientes/clientes.component';
import { ErrorComponent } from 'src/app/pages/error/error.component';
import { ProdutosComponent } from 'src/app/pages/produtos/produtos.component';
import { ClienteCadastroComponent } from './pages/cliente-cadastro/cliente-cadastro.component';
import { ProdutoCadastroComponent } from './pages/produto-cadastro/produto-cadastro.component';
import { LoginComponent } from './pages/login/login.component';
import { VendasComponent } from './pages/vendas/vendas.component';
import { AuthService } from './services/auth.service'

const routes: Routes = [

    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'cliente',
        component: ClienteCadastroComponent
    },
    {
        path: 'clientes',
        component: ClientesComponent
    },
    {
        path: 'clientes/edita/:id',
        component: ClienteCadastroComponent
    },
    {
        path: 'produto',
        component: ProdutoCadastroComponent
    },
    {
        path: 'produtos',
        component: ProdutosComponent
    },
    {
        path: 'produtos/edita/:id',
        component: ProdutoCadastroComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'vendas',
        component: VendasComponent,
        canActivate: [AuthService]
    },
    {
        path: '**',
        component: ErrorComponent
    },

]

export const RoutingModule = RouterModule.forRoot(routes);