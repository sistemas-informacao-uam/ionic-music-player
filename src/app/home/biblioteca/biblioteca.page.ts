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
    if(this.newPlaylistName === '') {
      alert('Nome vazio ou inválido');
      return;
    }

    this.playlists.push({
      img: 'https://picsum.photos/id/'+this.randomNumber+'/400/400',
      name: this.newPlaylistName
    });
    this.newPlaylistName = '';
    this.randomNumber = Math.floor(5 + Math.random() * 103);
  }

  public removePlaylist(index: Playlist) {
    for(let i=0; i< this.playlists.length; i++) {
      if(index.name === this.playlists[i].name) {
        let i = this.playlists.indexOf(index);
        this.playlists.splice(i, 1);
      }
    }
  }
}
