import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'my-first-app';

  imageUrl:string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTNg06p6VGqYMJA1HCbOgfkKLV8oQcE4sOkg&s'
}
