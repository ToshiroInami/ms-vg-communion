import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './user/landing-page/landing-page.component';
import { UserCommunionCreateComponent } from './user/user-communion/communion-create/user-communion-create.component';
import { AdminBodyComponent } from './admin/admin-body/admin-body.component';
import { AdminCommunionListComponent } from './admin/admin-communion/communion-list/admin-communion-list.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    pathMatch: 'full',
  },
  // {
  //   path: 'verifyEmail',
  //   component: VerifyEmailComponent,
  // },
  {
    path: 'comunion/insert-create',
    component: UserCommunionCreateComponent,
  },
  {
    path: 'comunion/list',
    component: AdminCommunionListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}