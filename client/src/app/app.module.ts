import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';

import { SearchPipe } from './search.pipe';

import { UserService } from './services/user.service';
import {ListingService} from './services/listing.service';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { NavComponent } from './nav/nav.component';
import { BrowseComponent } from './browse/browse.component';
import { ListingComponent } from './listing/listing.component';
import { ListingsComponent } from './listings/listings.component';
import { LotdComponent } from './lotd/lotd.component';
import { NewlistingComponent } from './newlisting/newlisting.component';
import { UserlistingComponent } from './userlisting/userlisting.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SearchPipe,
    NavComponent,
    BrowseComponent,
    ListingComponent,
    ListingsComponent,
    LotdComponent,
    NewlistingComponent,
    UserlistingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [UserService, ListingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
