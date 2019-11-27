import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  descricao: string = "";
  prioridade: number;
  lista: Array<{desc: string, priori: number}> = [];

  constructor(public navCtrl: NavController, public toast: ToastController) {
    this.lista = [];
  }

  adicionar() {
      console.log("cheguei auqi");
      this.lista.push({
        desc: this.descricao,
        priori: this.prioridade,
      });
      var btnRemove = <HTMLButtonElement>document.getElementById('buttonRemover');
      btnRemove.disabled = false;

      this.lista.sort((taskA, taskB) => {
        if (taskA.priori < +taskB.priori || taskA.priori == +taskB.priori) return -1;
        return 1;
      });

      this.descricao = "";
      this.prioridade = null;
  }

  remover() {

  }

  tarefa(i) {
    
  }

}
