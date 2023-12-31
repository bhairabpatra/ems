import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/model/User';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  userSubscription!: Subscription;

  public allUsers: any;
  constructor(private _authService: AuthService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  public getAllUsers() {
    this.userSubscription = this._authService.getUsers().subscribe((users: User) => {
        this.allUsers= users;
      },(error: any) => {
        console.log("This is error message :---------",error);
      }
    );
  }

  trackByFn(index: number, item: any): any {
    return item.id; // Use a unique identifier, like item.id, for efficient tracking
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
