import { Component, OnInit } from '@angular/core';
import { ProductRepository } from 'src/app/model/product.repository';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productRepository: ProductRepository) { }

  ngOnInit(): void {
  }

  getProducts(): Product[] {
    return this.productRepository.getProducts(null);
  }

  deleteProduct(product: Product) {
    //alert("test");
    return this.productRepository.deleteProduct(product);
  }

}
