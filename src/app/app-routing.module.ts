import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './user/landing-page/landing-page.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './auth/auth.guard';
import { UserCommunionCreateComponent } from './user/user-communion/communion-create/user-communion-create.component';
import { AdminBodyComponent } from './admin/admin-body/admin-body.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { AdminCommunionListComponent } from './admin/admin-communion/communion-list/admin-communion-list.component';
import { AdminModeratorComponent } from './admin/admin-moderator/admin-moderator.component';
import { AdminSettingsComponent } from './admin/admin-settings/admin-settings.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  // {
  //   path: 'verifyEmail',
  //   component: VerifyEmailComponent,
  // },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'comunion/insert-create',
    component: UserCommunionCreateComponent,
  },
  {
    path: 'admin',
    component: AdminBodyComponent,
    canActivate: [AuthGuard],
    data: { expectedRole: 'admin' },
    children: [
      {
        path: '',
        redirectTo: 'panel',
        pathMatch: 'full',
      },
      {
        path: 'panel',
        component: AdminPanelComponent,
        canActivate: [AuthGuard],
        data: { expectedRole: 'admin' },
      },
      {
        path: 'constancia',
        children: [
          {
            path: '',
            redirectTo: 'bautismo',
            pathMatch: 'full',
          },
          {
            path: 'comunion',
            component: AdminCommunionListComponent,
            canActivate: [AuthGuard],
            data: { expectedRole: 'admin' },
          },
        ],
      },
      {
        path: 'moderador',
        component: AdminModeratorComponent,
        canActivate: [AuthGuard],
        data: { expectedRole: 'admin' },
      },
      {
        path: 'configuracion',
        component: AdminSettingsComponent,
        canActivate: [AuthGuard],
        data: { expectedRole: 'admin' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
