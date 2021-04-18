import { Component } from '@angular/core';
import { v4 as uuid } from 'uuid';

interface Playlist {
  id: string;
  img: string;
  name: string;

  musics?: [];
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
    if (this.newPlaylistName === '') {
      alert('Nome vazio ou inválido');
      return;
    }

    this.playlists.push({
      // Essa função uuid(), vem da biblioteca chamada uuid que importei lá em cima
      // Serve para gerar um identificador único universal (uuid)
      // No momento da para entender como um jeito prático para criar um id único para essa playlist
      id: uuid(),
      img: 'https://picsum.photos/id/' + this.randomNumber + '/400/400',
      name: this.newPlaylistName
    });
    this.newPlaylistName = '';
    this.randomNumber = Math.floor(5 + Math.random() * 103);
  }

  public removePlaylist(playlist: Playlist) {
    this.playlists = this.playlists.filter(obj => obj.id != playlist.id);
  }
}
