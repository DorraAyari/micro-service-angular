

// feedback-ajouter.component.ts
import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/models/feedback';
import { FeedbackService } from 'src/app/services/feedback.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-feedback-ajouter',
  templateUrl: './feedback-ajouter.component.html',
  styleUrls: ['./feedback-ajouter.component.css']
})
export class FeedbackAjouterComponent {

  newFeedback: Feedback = {
    id: 0,
    name: '',
    description: '',
  };
 
  constructor(
    private router: Router,
    private feedbackService: FeedbackService,
    private cdr: ChangeDetectorRef
  ) {
  }

  ajouterFeedback(): void {
    if (!this.newFeedback.name || !this.newFeedback.description) {
      alert('Veuillez remplir le formulaire avant de soumettre.');
      return;
    }

    const feedbackToAdd: Feedback = {
      id: this.newFeedback.id,
      name: this.newFeedback.name,
      description: this.newFeedback.description,
    };

    this.feedbackService.ajouterFoyer(feedbackToAdd).subscribe(
      (addedFeedback: Feedback) => {
        console.log('Feedback added successfully', addedFeedback);
        Swal.fire({
          title: 'Succès!',
          text: 'Feedback ajouté avec succès.',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          this.router.navigate(['/feedback']);
          this.newFeedback = {
            id: 0,
            name: '',
            description: '',
          };
        });
      },
      (error) => {
        console.error('Error adding feedback', error);
      }
    );
  }
}
