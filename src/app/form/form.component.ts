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

  simounao() {
    // Verifica se o campo está vazio ou contém apenas espaços
    if (!this.palavra.trim()) { 
      this.imagem = ''; //  se não tiver nenhuma palavra, vai deixar vazio
      return; // Sai da função
    }

  // resumidamente, esse codigo vai fazer com que a palavra, frase ou conjunto numerico seja lido sem nenhum espaço ou caractere especial, para ser possivel fazer a comparação com a versão invertida dela
    const palavranormal = this.palavra.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // esse aqui, vai pegar o que foi escrito no input, ler sem nenhum espaço ou caractere especial(graças ao codigo que esta ali em cima), e comparar com ele mesmo mas escrito ao contrário
    const palindromo = palavranormal === palavranormal.split('').reverse().join('');

    //esse codigo em vermelho, é uma alternativa que o chatgpt deu para fazer basicamente o que o if ali em baixo vai fazer, de uma forma mais compacta, aparentemente, mas como ainda não sei exatamente como ele funciona, então vou usar o que foi ensinado nas aulas por comodidade:D
    //!this.imagem = palindromo ? 'feliz.png' : 'triste.jpg'; 
// aqui ele vai pegar o resultado do ultimo codigo e definir a imagem que vai aparecer a partir do código
    if (palindromo) {
  
      this.imagem = 'feliz.png'
    } else {
      this.imagem = 'triste.jpg'
    }
  }
}
