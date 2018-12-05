import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  genders: ['male','female'];
  defaultQuestion = 'pet';
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
  onSubmit(form : NgForm){
    console.log("Submitted here", form);
  }
}
