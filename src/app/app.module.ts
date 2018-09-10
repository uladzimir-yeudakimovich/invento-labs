import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
// import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products.component';
import { ProductComponent } from './components/product/product.component';
import { SearchPipe } from './search.pipe';
import { HoverDirective } from './hover.directive';

import { ProductsService } from './products.service';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'page1', component: ProductsComponent },
  { path: 'page2', component: ProductsComponent },
  { path: 'page3', component: ProductsComponent },
  { path: 'page4', component: ProductsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    SearchPipe,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    // NgbModule.forRoot(),
    // NgbCollapseModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
