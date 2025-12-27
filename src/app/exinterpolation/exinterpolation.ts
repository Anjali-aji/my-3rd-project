import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exinterpolation',
  imports: [CommonModule],
  templateUrl: './exinterpolation.html',
  styleUrl: './exinterpolation.css',
})
export class Exinterpolation {
  name='manu'
  a=10
  b=10
  c=this.a+this.b
  person={
    name:'manu',
    age:'43',
    place:'hyderabadh',
  }
  
  drinks = [
    {
      name: 'Coca-Cola',
      image: 'https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?w=300&h=200'
    },
    {
      name: 'Pepsi',
      image: 'https://images.pexels.com/photos/2775860/pexels-photo-2775860.jpeg?w=300&h=200'
    }
  ];
}
