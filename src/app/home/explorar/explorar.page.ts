import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

import { song } from '@fake/interfaces';
import { fakeSongList } from '@fake/songList';

@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.page.html',
  styleUrls: ['./explorar.page.scss'],
})
export class ExplorarPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  data: song[];
  filteredData: song[];

  isFinished = false;
  isFiltered = false;

  constructor() { }

  ngOnInit() {
    this.getInitialData();
  }

  getInitialData() {
    const initialData = fakeSongList.splice(0, 5);

    this.data = this.filteredData = initialData;
  }

  loadData(event) {
    if (this.isFiltered) {
      event.target.complete()
      return;
    }

    // Aqui da para se basear apenas no index dos itens
    // Pelo firebase teria que se basear na key (id)
    const lastSongIndex = fakeSongList.indexOf(this.data[this.data.length - 1]);
    const newData = fakeSongList.splice(lastSongIndex + 1, 3);
    console.log(newData)

    // Animação de load para mostrar que está carregando os dados novos
    // Puxando de um banco de dados real não tem necessidade de colocar um timeout
    setTimeout(() => {
      event.target.complete();

      if (newData.length == 0) {
        event.target.disabled = true;
        this.isFinished = true;
      }

      // Juntar o array antigo com o novo
      this.data = this.filteredData = [...this.data, ...newData];
    }, 500);
  }

  filterData(event) {
    let searchTerm = event.target.value;

    if (!searchTerm) {
      this.resetFilter();
      return;
    }

    // Transforma tudo para letras minúsculas
    searchTerm = searchTerm.toLowerCase();

    this.isFiltered = true;

    // Filtro no array que retorna todos os itens que o título inclui o termo de busca
    this.filteredData = this.data.filter(song => song.title.toLowerCase().includes(searchTerm));
  }

  resetFilter() {
    this.isFiltered = false;
    this.filteredData = this.data;
  }
}
