import { Routes } from '@angular/router';

import { WelcomeComponent } from '../welcome/welcome.component';
import { BookRetrieveComponent } from '../books/book-retrieve/book-retrieve.component';
import { BookSaveComponent } from '../books/book-save/book-save.component';

export const HomeRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'welcome'},
    { path: 'welcome', component: WelcomeComponent },
    { path: 'books', component: BookRetrieveComponent},
    { path: 'books/save', component: BookSaveComponent},
];
