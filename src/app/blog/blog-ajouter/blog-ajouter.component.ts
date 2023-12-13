import { Component } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-ajouter',
  templateUrl: './blog-ajouter.component.html',
  styleUrls: ['./blog-ajouter.component.css']
})
export class BlogAjouterComponent {

  nouveauBlog: Blog = {
    idblog: 0,
    commet: '',
    titre: '',
    description: ''
  };

  constructor(
    private router: Router,
    private blogService: BlogService,
  ) { }

  ajouterBlog(): void {
    this.blogService.addBloc(this.nouveauBlog).subscribe(
      (addedBlog: Blog) => {
        console.log('Blog added successfully', addedBlog);
        Swal.fire({
          title: 'Success!',
          text: 'Blog added successfully.',
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
