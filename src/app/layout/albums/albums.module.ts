import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlbumsComponent } from './albums.component';
import { routes } from './albums-routes';
import { AlbumComponent } from './components/album/album.component';

@NgModule({
    declarations: [
        AlbumsComponent,
        AlbumComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ]
})
export class AlbumsModule { }