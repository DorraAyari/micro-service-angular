import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category-ajouter',
  templateUrl: './category-ajouter.component.html',
  styleUrls: ['./category-ajouter.component.css']
})
export class CategoryAjouterComponent {

  nouveauBlog: Category = {
    id: 0,
    nameCategory: '',
    descriptionCategory: ''  };

  constructor(
    private router: Router,
    private blogService: CategoryService,
  ) { }

  ajouterBlog(): void {
    this.blogService.ajouterChambre(this.nouveauBlog).subscribe(
      (addedBlog: Category) => {
        console.log('Blog added successfully', addedBlog);
        Swal.fire({
          title: 'Success!',
          text: 'category added successfully.',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          this.router.navigate(['/blog']); // Pass the correct ID here
        });
      },
      (error) => {
        console.error('Error adding blog', error);
        Swal.fire({
          title: 'Error!',
          text: 'An error occurred while adding the blog.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    );
  }
}

