import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  public isLogedIn = false;
  private booleanSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  constructor(private _authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  isLoggedIn(): boolean {
    return this._authService.isLoggedIn();
  }

  logout(): void {
    this._authService.logout();
    this.router.navigate(['/login']);
  }
}
