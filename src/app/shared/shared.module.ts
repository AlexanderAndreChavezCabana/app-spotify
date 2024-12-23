import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { RouterModule } from '@angular/router';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';

@NgModule({
  declarations: [
    SideBarComponent,
    HeaderUserComponent,
    MediaPlayerComponent,
    SectionGenericComponent,
    CardPlayerComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    SideBarComponent,
    HeaderUserComponent,
    MediaPlayerComponent,
    SectionGenericComponent,
    CardPlayerComponent,
  ],
})
export class SharedModule {}
