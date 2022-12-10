import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceSnapsListComponent } from './face-snaps-list/face-snaps-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';

const routes: Routes = [
  {
    path: 'facesnaps',
    component: FaceSnapsListComponent
  },
  {
    path: 'facesnaps/:id',
    component: SingleFaceSnapComponent
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
