import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  public atualizaForm: FormGroup;
  messageNome = ""
  messagePassword = "";
  messageCelular = ""
  messageEmail = "";
  errorNome = false;
  errorEmail = false;
  errorCelular = false;
  errorPassword = false;
  constructor(
    private router: Router,
    public formbuilder: FormBuilder,
    private alerta: AlertController,
  ) {
    this.atualizaForm = this.formbuilder.group({
      nome: [null, [Validators.required, Validators.minLength(5)]],
      email: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
      celular: [null, [Validators.minLength(10), Validators.maxLength(11)]],
      bairro: [null, [Validators.minLength(3), Validators.maxLength(15)]],
      cidade: [null, [Validators.minLength(5), Validators.maxLength(25)]],
      numero: [null, [Validators.minLength(1), Validators.maxLength(5)]],
      endereco: [null, [Validators.minLength(5), Validators.maxLength(50)]],
      novasenha1: [null,[Validators.required, Validators.minLength(8)]],
      novasenha2: [null,[Validators.required, Validators.minLength(8)]],
      senha: [null,[Validators.required, Validators.minLength(8)]],
    })
   }

  ngOnInit() {
  }

  cadastra(){
    let { nome, email, celular, novasenha1, novasenha2, senha } = this.atualizaForm.controls;
 
    if (!this.atualizaForm.valid) {
      //nome
      if (!nome.valid) {
        this.errorNome = true;
        this.messageNome = "O nome tem que ter pelo menos 5 caracteres";
      } else {
        this.messageNome = "";
      }
      //email
      if (!email.valid) {
        this.errorEmail = true;
        this.messageEmail = "Email inválido / O email precisa ter pelo menos 8 caracteres";
      } else {
        this.messageEmail = "";
      }
      //celular
      if (!celular.valid) {
        this.errorCelular = true;
        this.messageCelular = "O celular tem que ter pelo menos 10 números";
      } else {
        this.messageCelular = "";
      }
      //senha
      if (!novasenha1.valid || !novasenha1.valid || novasenha1!=novasenha2) {
        this.errorPassword = true;
        this.messagePassword ="A senha precisa ter pelo menos 8 caracteres"
      } else {
        this.messagePassword = "";
      }
      //senha
      if (!senha.valid) {
        this.errorPassword = true;
        this.messagePassword ="A senha precisa ter pelo menos 8 caracteres"
      } else {
        this.messagePassword = "";
      }
    }
    else {
      this.Alerta();
      this.router.navigate(['/home']);
    }
  }

  async Alerta(){
    const alertar = await this.alerta.create({
      header: 'alerta',
      subHeader: 'isso é um alerta',
      message: 'mensagem Alerta',
      buttons:[{
        text: 'OK',
        handler:()=>{
          // alert('Você vai embora');
        }
      }, 'Cancela']
    });
    alertar.present();
  }

}
