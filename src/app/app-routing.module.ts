import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/components/landing-page/landing-page.component';
import { NewFaceSnapComponent } from './face-snaps/components/new-face-snap/new-face-snap.component';
import { SingleFaceSnapComponent } from './face-snaps/components/single-face-snap/single-face-snap.component';
import { FaceSnapsListComponent } from './face-snaps/components/face-snaps-list/face-snaps-list.component'

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
