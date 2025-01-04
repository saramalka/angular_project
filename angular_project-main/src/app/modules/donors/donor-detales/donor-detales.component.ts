import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { DonorService } from '../../../service/donorsServise';
import { ProductService } from '../../../service/productservice';
import { Donor } from '../../../domain/donor';

@Component({
  selector: 'app-donor-detales',
  standalone: false,

  templateUrl: './donor-detales.component.html',
  styleUrl: './donor-detales.component.css'
})
export class DonorDetalesComponent {
  @Input()
  donor: Donor = {};
  @Output()
  onSaveDonor: EventEmitter<Donor> = new EventEmitter()
  submitted: boolean = false;
  @Output()
  hide: EventEmitter<boolean> = new EventEmitter()

  hideDialog() {
    alert(`hide: EventEmitter<boolean> `)
    this.submitted = false;
    this.hide.emit();
  }
  saveProduct() {
    this.onSaveDonor.emit(this.donor)
  }


}
