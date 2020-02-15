import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayComponent } from './game/play/play.component';
import { CreateComponent } from './game/create/create.component';
import { ListComponent } from './game/list/list.component';
import { ListFilterPipe } from './shared/pipe/list-filter.pipe';
import { HttpClientService } from './shared/services/http-client.service';


@NgModule({
  declarations: [
    AppComponent,
    PlayComponent,
    CreateComponent,
    ListComponent,
    ListFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HttpClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
