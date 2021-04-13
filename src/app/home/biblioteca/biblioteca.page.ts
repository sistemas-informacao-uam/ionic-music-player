import { Component, OnInit } from '@angular/core';

interface Playlist {
  img: string;
  name: string;
}

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage {

  public playlists: Playlist[] = [];

  public randomNumber = Math.floor(5 + Math.random() * 103);
  public newPlaylistName = '';

  constructor() { }

  public addNewPlaylist() {
    this.playlists.push({
      img: 'https://picsum.photos/id/'+this.randomNumber+'/400/400',
      name: this.newPlaylistName
    })
    console.log(this.playlists);
    this.newPlaylistName = '';
    this.randomNumber = Math.floor(5 + Math.random() * 103);
  }

  public removePlaylist(toRemove: Playlist) {
    const index = this.playlists.indexOf(toRemove)
    this.playlists.splice(index, 1);
  }
}
