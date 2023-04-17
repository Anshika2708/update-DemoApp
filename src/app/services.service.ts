import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  userdata:any;
  constructor( ) { }

  getUser(){
    return this.userdata;
  }

  addUser(formData:any){
    this.userdata=formData;
    return this.userdata;
  }

  updateUser(formData:any){
    this.userdata=formData;
  }

}