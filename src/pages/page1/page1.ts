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
  tempo: number = 0;
  lista: Array<{desc: string, priori: number, tempo: number}> = [];

  constructor(public navCtrl: NavController, public toast: ToastController) {
    this.lista = [];
  }

  adicionar() {
    if(this.validar()){
      this.tempo += 1;
      this.lista.push({
        desc: this.descricao,
        priori: this.prioridade,
        tempo: this.tempo
      });
      var btnRemove = <HTMLButtonElement>document.getElementById('buttonRemover');
      btnRemove.disabled = false;

      this.lista.sort((tarefa1, tarefa2) => {
        if (tarefa1.priori < tarefa2.priori || tarefa1.priori == tarefa2.priori && tarefa1.tempo < tarefa2.tempo) return -1;
        return 1;
      });

      this.descricao = "";
      this.prioridade = null;
    }
  }

  remover() {
    this.lista.shift();
    if ( this.lista.length == 0) {
      var btnRemove = <HTMLButtonElement>document.getElementById('buttonRemover');
      btnRemove.disabled = true;
    }
  }

  validar(){
    if(this.prioridade < 0 || this.prioridade > 10) {
      var toast = this.toast.create({
        message: "A prioridade deve estar entre 1 e 10.",
        duration: 3000
      });
      toast.present();
      return false;
    } else {
      for(var l of this.lista) {
        if (this.descricao == l.desc) {
          var toast = this.toast.create({
            message: "Tarefa já cadastrada.",
            duration: 3000
          });
          toast.present();
          return false;
        }
      }
    }
    return true;
  }

  removeTarefa(i) {
    this.lista.splice(i,1);
    if ( this.lista.length == 0) {
      var btnRemove = <HTMLButtonElement>document.getElementById('buttonRemover');
      btnRemove.disabled = true;
    }
  }

}
