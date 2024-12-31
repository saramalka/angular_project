import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
  selector: 'app-payment',
  standalone: false,
  
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {
  layout: 'list' | 'grid' = 'grid'; 
  products: any[] = [];
  options = [{ label: 'List', value: 'list' },
    { label: 'Grid', value: 'grid' }];

  constructor(private productService: ProductService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {

    this.productService.getProductsDataFromServer().subscribe(
      (data) => {
        console.log("Data from server: ", data);
        if (data && data.length) {
          this.products = [...data.slice(0, 12)];
        } else {
          console.error('No data received from server');
        }
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
    
  }

  getSeverity(product: Product) :"success" | "secondary" | "info" | "warning" | "danger" | "contrast" | undefined{
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return undefined;
    }
  }

}
