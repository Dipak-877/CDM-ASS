import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/service.service';
import { User } from '../model/user';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  members: User[]=[];
  admins: User[]=[];
  searchQuery: string='';
  allUsers: User[]=[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.allUsers = data;
      this.members = data.filter(user => user.role === 'member');
      this.admins = data.filter(user => user.role === 'admin');

    });
  }
  getFilteredUsers(role: string): User[] {
    return this.allUsers.filter(user => user.role === role && 
      (this.searchQuery ? 
        (user.first_name.trim() + ' ' + user.last_name.trim()).toLowerCase().includes(this.searchQuery.trim().toLowerCase()) || 
        user.email.trim().toLowerCase().includes(this.searchQuery.trim().toLowerCase()) : 
        true)
    );
  }


}
