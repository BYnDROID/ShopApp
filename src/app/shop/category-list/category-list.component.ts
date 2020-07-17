import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoryRepository } from 'src/app/model/category.repository';
import { Category } from 'src/app/model/category.model';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  public selectedCategory:Category = null;
  @Output() category = new EventEmitter<Category>();

  constructor(
    private categoryRepository: CategoryRepository
    ) { }

  ngOnInit(): void {
  }

  get categories(): Category[]{
    return this.categoryRepository.getCategories();
  }

  cahngeCategory(newCategory?: Category){
    this.selectedCategory = newCategory;
    this.category.emit(newCategory);
  }

}
