import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';

import { FundacionModule } from './fundacion/fundacion.module';
import { AdministracionModule } from './administracion/administracion.module';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { ListaComponent } from './lista/lista.component';
import { FormsModule } from '@angular/forms';
import { AdmregistroComponent } from './admregistro/admregistro.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ListaComponent,
    AdmregistroComponent,
 
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FundacionModule,
    AuthModule,
    AdministracionModule,
    FormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
