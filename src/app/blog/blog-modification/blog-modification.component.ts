import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-blog-modification',
  templateUrl: './blog-modification.component.html',
  styleUrls: ['./blog-modification.component.css']
})
export class BlogModificationComponent {

  produit!: Blog;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produitService: BlogService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.loadChambre(id);
    });
  }

  loadChambre(id: number): void {
    this.produitService.findById(id).subscribe(
      (produit: Blog) => {
        this.produit = produit;
      
      
              },
      (error) => {
        console.error('Error loading chambre', error);
      }
    );
  }



  updateChambre(): void {
    // Similar to the ajoutChambre method, handle the selectedBlocNom

    this.produitService.updateBlog(this.produit,this.produit.idblog).subscribe(

      (updatedChambre: Blog) => {
        console.log('Blog updated successfully', updatedChambre);
        Swal.fire({
          title: 'Succès!',
          text: 'Produit mise à jour avec succès.',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          this.router.navigate(['/blog']);
        });
      },
      (error) => {
        console.error('Error updating chambre', error);

       
          Swal.fire({
            title: 'Erreur!',
            text: 'Une erreur s\'est produite lors de la mise à jour de la chambre.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        
      }
    );
  }
}
