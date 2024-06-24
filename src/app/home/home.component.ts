import { Component } from '@angular/core';
import { PhotoData } from '../models/photo-data.const';
import { PhotoModel } from '../models/photo-model.interface';
import { HeaderComponent } from '../header/header.component';
import { PhotoCardComponent } from '../photo-card/photo-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { LoginComponent } from "../login/login.component";
import { RouterModule } from '@angular/router';
import { RegisterComponent } from '../register/register.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HeaderComponent, PhotoCardComponent, MatButtonModule, MatIconModule, MatBadgeModule, LoginComponent, RouterModule, RegisterComponent]
})
export class HomeComponent {
  photoData = PhotoData;
  filteredData : PhotoModel[] = PhotoData;

  filterCategory(category: string) {
    if (category === "all") {
      this.filteredData = this.photoData;
    } else {
      this.filteredData = this.photoData.filter(data => data.category === category);
      console.log(this.photoData);
      console.log(this.filteredData);
    }
  }


}
