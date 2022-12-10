import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceSnapsListComponent } from './face-snaps-list/face-snaps-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NewFaceSnapComponent } from './new-face-snap/new-face-snap.component';
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
    path: 'create',
    component: NewFaceSnapComponent
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
