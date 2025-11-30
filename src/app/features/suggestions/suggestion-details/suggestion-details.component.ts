import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-suggestion-details',
  templateUrl: './suggestion-details.component.html',
  styleUrl: './suggestion-details.component.css'
})
export class SuggestionDetailsComponent {

  id: any;
  suggestion: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    const suggestions = [
      { id: 1, title: "Idée 1", description: "Détail 1" },
      { id: 2, title: "Idée 2", description: "Détail 2" },
    ];

    this.suggestion = suggestions.find(s => s.id == this.id);
  }

  backToList() {
    this.router.navigate(['/suggestions']);
  }
}
