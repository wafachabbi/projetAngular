import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuggestionsComponent } from './suggestions.component';
import {SuggestionDetailsComponent} from './suggestion-details/suggestion-details.component';
import {ListSuggestionComponent} from './list-suggestion/list-suggestion.component';

const routes: Routes = [
  { path: '', component: SuggestionsComponent },
  { path: '', component: ListSuggestionComponent },
  // Route paramétrée
  { path: ':id', component: SuggestionDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuggestionsRoutingModule { }
