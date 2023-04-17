import { Component } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  userdata : any;
  imgurl:any;
  constructor(private serv: ServicesService){
    this.getUser();
  
  }

  public iagree(): void{
    alert("iagree");
  }
  getUser(){
    this.userdata = this.serv.getUser();
        console.log(this.userdata)
        this.imgurl=this.userdata.file1
  }
  onImageChange(e:any) {
    if(e.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);

      reader.onload=(imgres:any)=>{
        console.log(imgres.target.result)
        this.imgurl=imgres.target.result
        this.userdata.file1= this.imgurl

      this.serv.updateUser(this.userdata);
      }

    }

  }
}

