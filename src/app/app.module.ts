import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { HomebodyComponent } from './homebody/homebody.component';
import { EmployeeComponentComponent } from './employee-component/employee-component.component';
import { PostComponent } from './Day4/post/post.component';
import { CommentComponent } from './Day4/comment/comment.component';
import { UserComponent } from './Day4/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    HomebodyComponent,
    EmployeeComponentComponent,
    PostComponent,
    CommentComponent,
    UserComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
