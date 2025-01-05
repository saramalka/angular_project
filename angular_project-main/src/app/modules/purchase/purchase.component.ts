import { Component, inject } from '@angular/core';
import { ImportsModule } from '../../imports';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';
import { DataView } from 'primeng/dataview';
import { Tag } from 'primeng/tag';
import { signal } from '@angular/core';

@Component({
  selector: 'app-purchase',
  standalone: false,
  
  templateUrl: './purchase.component.html',
  styleUrl: './purchase.component.css',
 
  providers: [ProductService]
})
export class PurchaseComponent {
    products!: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProducts().then((data) => (this.products = data.slice(0, 5)));
    }
    buyTicket(product: Product){

        

    }
    getSeverity (product: Product) {
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
    };
}