import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import{ProWithDiscountComponent} from './pro-with-discount/pro-with-discount.component';
import{ProWithOutDiscountComponent} from './pro-with-out-discount/pro-with-out-discount.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {path: 'homepage', component: HomeComponent},
  {path: 'userspage', component:UsersComponent},
  {path: 'postspage', component:PostsComponent},
  {path: 'productspage', component:ProductsComponent,
  children:
    [
      {path:'ProWithDiscount',component:ProWithDiscountComponent},
      {path:'ProWithOutDiscount',component:ProWithOutDiscountComponent}
    ]},
    {path: 'registerpage', component:RegisterComponent},
  {path: 'loginpage', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
