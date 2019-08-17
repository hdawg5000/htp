import { Component, OnInit } from '@angular/core';

interface AlbumData {
  albumTitle: string
  albumCoverPhotoLink: string
}

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  public albums: AlbumData[]

  constructor() { }

  ngOnInit() {
    this.albums = [
      {
        albumTitle: "Album title",
        albumCoverPhotoLink: "assets/images/logo-2.png"
      },
      {
        albumTitle: "Album title",
        albumCoverPhotoLink: "assets/images/logo-2.png"
      }
    ]
  }

}
