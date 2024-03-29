import { Component } from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private authService: AuthService) { }

  logout() {
    this.authService.logout();
  }

  title: string = 'DemoApp';
  contactUs: string = 'Contact Us';

}
