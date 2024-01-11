import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http';
import { FilterOperatorComponent } from './components/filter-operator/filter-operator.component';
import { MergeMapComponent } from './components/merge-map/merge-map.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterOperatorComponent,
    MergeMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
