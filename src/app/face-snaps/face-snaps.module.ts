import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { ReactiveFormsModule } from '@angular/forms';

import { FaceSnapComponent } from './components/face-snap/face-snap.component';
import { FaceSnapsListComponent } from './components/face-snaps-list/face-snaps-list.component';
import { NewFaceSnapComponent } from './components/new-face-snap/new-face-snap.component';
import { SingleFaceSnapComponent } from './components/single-face-snap/single-face-snap.component';
import { AppRoutingModule } from '../app-routing.module';




@NgModule({
  declarations: [
    FaceSnapComponent,
    FaceSnapsListComponent,
    NewFaceSnapComponent,
    SingleFaceSnapComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    RouterModule
  ],
  exports: [
    FaceSnapComponent,
    FaceSnapsListComponent,
    NewFaceSnapComponent,
    SingleFaceSnapComponent
  ]
})
export class FaceSnapsModule { }
