import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TarjetasComponent } from './components/shared/tarjetas/tarjetas.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';

import { HttpClientModule } from '@angular/common/http';
import { NoimagePipe } from './pipes/noimage.pipe';
import { ErrormessageComponent } from './components/shared/errormessage/errormessage.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { LoadingComponent } from './components/shared/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TarjetasComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NotfoundComponent,
    NoimagePipe,
    ErrormessageComponent,
    DomseguroPipe,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
