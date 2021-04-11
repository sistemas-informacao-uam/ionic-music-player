import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

import { fakeSongList } from '@fake/songList';

@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.page.html',
  styleUrls: ['./explorar.page.scss'],
})
export class ExplorarPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  data: Array<{
    id: string,
    title: string,
    author: string,
    image: string,
  }>;

  isFinished = false;

  constructor() {
  }

  ngOnInit() {
    this.getInitialData();
  }

  getInitialData() {
    const initialData = fakeSongList.splice(0, 5);

    this.data = initialData;
  }

  loadData(event) {
    // Isso terá que ser adaptado quando estivermos usando o firebase...
    const lastSongIndex = fakeSongList.indexOf(this.data[this.data.length - 1]);
    const newData = fakeSongList.splice(lastSongIndex + 1, 3);
    console.log(newData)

    // Load fake para mostrar que está carregando os dados novos
    // Puxando de um banco de dados real não tem necessidade disso
    setTimeout(() => {
      event.target.complete();

      if (newData.length == 0) {
        event.target.disabled = true;
        this.isFinished = true;
      }

      this.data = [...this.data, ...newData];
    }, 500);


  }
}
