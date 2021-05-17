import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cad-users',
  templateUrl: './cad-users.page.html',
  styleUrls: ['./cad-users.page.scss'],
})
export class CadUsersPage implements OnInit {

  public contatoForm: FormGroup;
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
    public formbuilder: FormBuilder
  ) {
    this.contatoForm = this.formbuilder.group({
      nome: [null, [Validators.required, Validators.minLength(5)]],
      email: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
      celular: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(11)]],
      senha: [null,[Validators.required, Validators.minLength(8)]],
    })
   }

  ngOnInit() {
    
  }
  cadastra(){
    let { nome, email, celular, senha } = this.contatoForm.controls;
 
    if (!this.contatoForm.valid) {
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
      if (!senha.valid) {
        this.errorPassword = true;
        this.messagePassword ="A senha precisa ter pelo menos 8 caracteres"
      } else {
        this.messagePassword = "";
      }
    }
    else {
      alert("Cadastro Realizado");
      this.router.navigate(['/login']);
    }
  }

  voltarLogin(){
    this.router.navigate(['/login'])
  }

}
