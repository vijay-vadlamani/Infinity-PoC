import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';

// services
import { UserService } from './user.service';
import { TableSearchComponent } from './table-search/table-search.component';
import { columnPipe, rowPipe, searchPipe } from './search-pipe.pipe';
import { InfiniteScrollDirective } from './infinite-scroll.directive';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export const firebaseConfig = {
    apiKey: "AIzaSyDBvJbc-3Fm6-tBKZv9MOjdy8ZANrIuZRo",
    authDomain: "infinity-7f8ff.firebaseapp.com",
    databaseURL: "https://infinity-7f8ff.firebaseio.com",
    projectId: "infinity-7f8ff",
    storageBucket: "infinity-7f8ff.appspot.com",
    messagingSenderId: "272868029916"
};

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableSearchComponent,
    columnPipe,
    rowPipe,
    searchPipe,
    InfiniteScrollDirective,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
  ],
  providers: [
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
