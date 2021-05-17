import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Platform } from '@ionic/angular';

interface ITecnologia{
  title: string;
  subtitle: string;
  content: string;
  imagem: string;
  valor: string;
}

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  constructor(
    private router: Router,
    private plat: Platform
  ) { }
  plataforma='ios';
  ionViewWillEnter() {
    if (this.plat.is('android')){
    console.log('Estou no Android')
    this.plataforma='android'
    }
    if (this.plat.is('ios')){
      console.log('Estou no IOS')
      this.plataforma='ios'
    }
    if (this.plat.is('desktop')){
      console.log('Estou no Desktop')
      this.plataforma='desktop'
    }
  }​
  meusCards = [
    {
      title: 'Hamburger',
      subtitle: 'pequeno',
      content: 'Alguma coisa',
      imagem: '',
      valor: '7.41',
    },
    {
      title: 'Citigroup',
      subtitle: 'Nº14',
      content: 'Com sede em Nova York',
      imagem: '',
      valor: '64.45',
    },
    {
      title: 'Samsung Electronics',
      subtitle: 'Nº13',
      content: 'Samsung é líder.',
      imagem: '',
      valor: '10.00',
    },
    {
      title: 'AT&T',
      subtitle: 'Nº12',
      content: 'telecomunicações do mundo. ',
      imagem: '',
      valor: '93.33',
    },
    {
      title: 'ExxonMobil',
      subtitle: 'Nº11',
      content: 'Apesar de fazer alguma pesquisas.',
      imagem: '',
      valor: '13.00',
    }
  ]

  showAlerta(item: ITecnologia){
    const extras: NavigationExtras = {
      queryParams:{
        tecnologias: JSON.stringify(item),
      }
    };
    const tecParam = {
      state:{
        tecnologiaParametro: item,
      },
    }
    console.log(tecParam);
  }

  ngOnInit() {
  }
  seguinte(){
    this.router.navigate(['/carrinho'])
  }
}
