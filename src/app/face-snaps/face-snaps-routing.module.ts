import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewFaceSnapComponent } from './components/new-face-snap/new-face-snap.component';
import { SingleFaceSnapComponent } from './components/single-face-snap/single-face-snap.component';
import { FaceSnapsListComponent } from './components/face-snaps-list/face-snaps-list.component';

const routes: Routes = [
  { path: 'create', component: NewFaceSnapComponent },
  { path: ':id', component: SingleFaceSnapComponent },
  { path: '', component: FaceSnapsListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaceSnapsRoutingModule { }
