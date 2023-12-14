import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Feedback } from 'src/app/models/feedback';
import { FeedbackService } from 'src/app/services/feedback.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-feedback-modifier',
  templateUrl: './feedback-modifier.component.html',
  styleUrls: ['./feedback-modifier.component.css']
})
export class FeedbackModifierComponent implements OnInit {
  Feedback!: Feedback;

  selectedFeedback: Feedback = {
    id: 0,
    name: '',
    description: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private feedbackService: FeedbackService,
    private cdRef: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.loadChambre(id);
    });
  }

  
  loadChambre(id: number): void {
    this.feedbackService.getFoyerById(id).subscribe(
      (Feedback: Feedback) => {
        this.Feedback = Feedback;
      
      
              },
      (error) => {
        console.error('Error loading chambre', error);
      }
    );
  }
  modifierFeedback(): void {
    // Similar to the ajoutChambre method, handle the selectedBlocNom

    this.feedbackService.updateFoyer(this.Feedback.id, this.Feedback).subscribe(
      (updatedFeedback: Feedback) => {
        console.log('Feedback updated successfully', updatedFeedback);
        Swal.fire({
          title: 'Succès!',
          text: 'Produit mise à jour avec succès.',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          this.router.navigate(['/feedback']);
        });
      },
      (error) => {
        console.error('Error updating feedback', error);
        Swal.fire({
          title: 'Erreur!',
          text: 'Une erreur s\'est produite lors de la mise à jour de la feedback.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    );
    
  }
 
}
