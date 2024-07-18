import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { AdminCommunionListComponent } from './admin/admin-communion/communion-list/admin-communion-list.component';
import { AdminBodyComponent } from './admin/admin-body/admin-body.component';
import { LandingPageComponent } from './user/landing-page/landing-page.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { UserCommunionCreateComponent } from './user/user-communion/communion-create/user-communion-create.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environments';
import { CommunionimgModalComponent } from './admin/admin-communion/communionimg-modal/communionimg-modal.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminCommunionListComponent,
    UserCommunionCreateComponent,
    AdminBodyComponent,
    LandingPageComponent,
    SidebarComponent,
    NavbarComponent,
    CommunionimgModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
