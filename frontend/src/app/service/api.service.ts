import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface IUserData{
  name: string
  password: string
  city: string
  dob: string
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUserData(){
    return this.http.get("http://localhost:4000/users")
  }

  editUserData(userData: IUserData){
    return this.http.patch("http://localhost:4000/users",{
      userData
    })
  }
}
