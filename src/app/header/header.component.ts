import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Categories } from '../models/categories.const';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule,MatBadgeModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Output() selectedCategory = new EventEmitter<string>();
  categoriesButton: string[] = []

  ngOnInit() {
    this.categoriesButton = Object.keys(Categories);
  }

  filterCategory(event: string) {
    this.selectedCategory.emit(event);
  }


}
