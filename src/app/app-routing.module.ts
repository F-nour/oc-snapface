import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LandingPageComponent } from './landing-page/components/landing-page/landing-page.component';


const routes: Routes = [
  {
    path: 'facesnaps',
    loadChildren: () => import('./face-snaps/face-snaps.module').then(m => m.FaceSnapsModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: LandingPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
