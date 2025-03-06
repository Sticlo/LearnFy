import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent {
  isSearchOpen = false;
  searchQuery = '';
  isMenuOpen = false;

  @ViewChild('searchInput') searchInput!: ElementRef;

  // ✅ Método para abrir la búsqueda y enfocar el input
  toggleSearch(inputElement: HTMLInputElement) {
    this.isSearchOpen = !this.isSearchOpen;
    if (this.isSearchOpen) {
      setTimeout(() => inputElement.focus(), 100);
    } else {
      this.closeSearchSmoothly();
    }
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // ✅ Método para cerrar la búsqueda suavemente
  closeSearchSmoothly() {
    const searchContainer = document.querySelector('.search-container') as HTMLElement;
    if (searchContainer) {
      searchContainer.style.opacity = '0';
      searchContainer.style.maxWidth = '0';
      
      setTimeout(() => {
        this.isSearchOpen = false;
        this.searchQuery = ''; // Limpiar después de la animación
      }, 500); // Esperamos a que termine la animación antes de limpiar
    }
  }
}
