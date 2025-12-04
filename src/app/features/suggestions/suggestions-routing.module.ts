import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuggestionsComponent } from './suggestions.component';
import {SuggestionDetailsComponent} from './suggestion-details/suggestion-details.component';
import {ListSuggestionComponent} from './list-suggestion/list-suggestion.component';

const routes: Routes = [
  {
    path: '',
    component: SuggestionsComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' }, // ou directement ListSuggestionComponent
      { path: 'list', component: ListSuggestionComponent },
      { path: ':id', component: SuggestionDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuggestionsRoutingModule { }
