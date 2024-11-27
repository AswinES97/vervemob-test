import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ApiService } from '../../service/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule,CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  userData!: any
  userId: any = ""
  constructor(private apiService: ApiService){
    this.apiService.getUserData().subscribe((data)=>{
      this.userData = data
      console.log(this.userData);
      
    })
  }

  updateUser(userId: any){
    this.userId = userId
    
    // this.apiService.editUserData()
  }

  saveUser(){}
}
