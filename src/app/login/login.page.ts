import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public signForm: FormGroup;
  messageEmail = ""
  messagePassword = "";
  errorLogin = false;
  errorPassword = false;
  constructor(
    private router: Router,
    public plat: Platform,
    private fbuilder: FormBuilder
  ) {
    this.signForm = this.fbuilder.group({
      'login': [null, [Validators.required, Validators.minLength(5)]],
      'senha': [null, [Validators.required, Validators.minLength(8)]],
    });
   }

  ngOnInit() {setTimeout(() => {
    this.signForm.get('login');
  }, 2000);
  };

  plataforma='';
  ionViewWillEnter() {
    if (this.plat.is('android')){
    this.plataforma='android'
    }
    if (this.plat.is('ios')){
      this.plataforma='ios'
    }
  }​
  cadastro(){
    this.router.navigate(['/cad-users'])
  }
  sign(){
    let { login, senha } = this.signForm.controls;
 
    if (!this.signForm.valid) {
      if (!login.valid) {
        this.errorLogin = true;
        this.messageEmail = "Email ou Número inválido";
      } else {
        this.messageEmail = "";
      }
 
      if (!senha.valid) {
        this.errorPassword = true;
        this.messagePassword ="A senha precisa ter pelo menos 8 caracteres"
      } else {
        this.messagePassword = "";
      }
    }
    else {
      alert("Login Realizado");
      this.router.navigate(['/home']);
    }
  }

}
