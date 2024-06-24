import { Component, Input, Output } from '@angular/core';
import { PhotoModel } from '../models/photo-model.interface';

@Component({
  selector: 'app-photo-card',
  standalone: true,
  imports: [],
  templateUrl: './photo-card.component.html',
  styleUrl: './photo-card.component.scss'
})
export class PhotoCardComponent {
   @Input() photo : PhotoModel = {} ; 
}
