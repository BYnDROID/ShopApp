import { Injectable, OnInit } from '@angular/core';
import { Category } from './category.model';
import { RestService } from './rest.service';

@Injectable()
export class CategoryRepository implements OnInit{
  private categories: Category[] = [];

  constructor(private restService: RestService ) {
    this.restService
      .getCategorys()
      .subscribe(categories => this.categories = categories);
  }

  ngOnInit(){}

  getCategory(id: number): Category {
    return this.categories.find(i => i.id == id);
  }

  getCategories(): Category[] {
    return this.categories;
  }

  saveCategory(categories: Category) {
    if (categories.id == null || categories.id == 0) {
        this.restService.addCategory(categories)
            .subscribe(p => this.categories.push(p));
    } else {
        this.restService.updateCategory(categories)
            .subscribe(p => {
                this.categories.splice(this.categories.findIndex(p => p.id == categories.id), 1, categories);
            })
    }
  }

  deleteCategory(categories: Category) {
    this.restService.deleteCategory(categories)
        .subscribe(p => this.categories.splice(this.categories.findIndex(p => p.id == categories.id),1));
  }
}
