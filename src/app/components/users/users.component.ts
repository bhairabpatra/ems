import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/model/User';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userSubscription!: Subscription;

  public allUsers: any;
  constructor(private _authService: AuthService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  public getAllUsers() {
    console.log("Get user")
    this.userSubscription = this._authService.getUsers().subscribe((users: User) => {
        this.allUsers= users;
      },(error: any) => {
        console.log("This is error message :---------",error);
      }
    );
  }

  public deleteUser(id: number){
    this._authService.deleteUser(id).subscribe(()=>{
      console.error('Error deleting user:', this.getAllUsers());
      this.getAllUsers();
    },(error) => {
      // Handle error
      console.error('Error deleting user:', error);
    })
  };

  trackByFn(index: number, item: any): any {
    return item.id; // Use a unique identifier, like item.id, for efficient tracking
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
