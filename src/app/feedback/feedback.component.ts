import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
import { FeedbackService } from '../services/feedback.service';
import { Feedback } from '../models/feedback';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  dtElement: DataTableDirective | undefined;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  feedbackList: Feedback[] = [];

  constructor(
    private feedbackService: FeedbackService, // Corrected variable name
    private router: Router,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getFeedback();
  }

  getFeedback(): void {
    this.feedbackService.getFoyes().subscribe(
      (feedback) => {
        this.feedbackList = feedback;
     //   this.dtTrigger.next(); // Trigger DataTable update
      },
      (error) => {
        console.error('Error getting feedback', error);
        // Handle error as needed
      }
    );
  }

  navigateToAjouter(): void {
    this.router.navigate(['/feedback-ajouter']);

  }

  navigateToModifier(feedbackId: number): void {
   this.router.navigate(['/feedback-modifier', feedbackId]);
  }

  deleteFeedback(feedbackId: number): void {
    Swal.fire({
      title: 'Confirmation',
      text: 'Voulez-vous vraiment supprimer ce feedback ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer!',
      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.isConfirmed) {
        this.feedbackService.deleteFoyer(feedbackId).subscribe(
          () => {
            console.log('Feedback deleted successfully');

            // Reload feedback data
            this.getFeedback();
          },
          (error) => {
            console.error('Error deleting feedback', error);
            // Handle error as needed
          }
        );
      }
    });
  }
}
