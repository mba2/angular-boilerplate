import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { AnotherPlaceholderComponent } from './components/another-placeholder/another-placeholder.component';

export const ROUTES = [
  // { path: '', redirectTo: '/...', pathMatch: 'full' },
  { path: 'placeholder', component: PlaceholderComponent },
  { path: 'another-placeholder', component: AnotherPlaceholderComponent },
];