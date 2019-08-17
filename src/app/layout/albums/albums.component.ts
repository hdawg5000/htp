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
        albumTitle: "Dubai",
        albumCoverPhotoLink: "assets/images/logo-2.png"
      },
      {
        albumTitle: "Dubai",
        albumCoverPhotoLink: "assets/images/logo-2.png"
      }
    ]
  }

}
