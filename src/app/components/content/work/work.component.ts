import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements AfterViewInit {

  constructor(private elementRef: ElementRef){}


  ngAfterViewInit() {
    const scrollContainer = this.elementRef.nativeElement.querySelector('.scrollspy-example');
    const scrollItems = this.elementRef.nativeElement.querySelectorAll('.list-group-item');

    const spyOffset = 0; // Defina um deslocamento personalizado se necessário

    // Função para verificar se um elemento está visível no viewport
    const isElementInView = (element: any) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    // Função para atualizar a classe "active" nos itens do Scrollspy
    const updateActiveItem = () => {
      for (let i = 0; i < scrollItems.length; i++) {
        const item = scrollItems[i];
        const target = document.querySelector(item.getAttribute('href'));

        if (isElementInView(target)) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      }
    };

    // Adicione um listener de rolagem ao container do Scrollspy
    scrollContainer.addEventListener('scroll', updateActiveItem);

    // Execute a função para definir o item ativo inicialmente
    updateActiveItem();
  }
}
