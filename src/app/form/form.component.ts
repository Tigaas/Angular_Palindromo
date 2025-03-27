import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  palavra: string = '';
  
  imagem: string = '';

  simounao(){
    const palavranormal = this.palavra.replace(/[^a-z0-9]/g, '').toLowerCase();
    const palindromo = palavranormal === palavranormal.split('').reverse().join('');
  

if (palindromo) {
  
  this.imagem = 'feliz.png'
} else {
  this.imagem = 'triste.jpg'
}


  }
}
