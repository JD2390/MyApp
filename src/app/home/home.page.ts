import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router
  ) {}

  editar(){
    this.router.navigate(['/users']);
  }
  pedido(){
    this.router.navigate(['/home']);
  }
  logout(){
    alert("Logout Realizado");
    this.router.navigate(['/login']);
  }
}
