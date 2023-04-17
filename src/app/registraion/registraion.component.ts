import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-registraion',
  templateUrl: './registraion.component.html',
  styleUrls: ['./registraion.component.css']
})
export class RegistraionComponent {

  regForm!: FormGroup;
  constructor(private fb: FormBuilder, private modalService: NgbModal, private router: Router,private serv: ServicesService,){
    this.createForm();
  }

  public createForm() {
    this.regForm = this.fb.group({
      file1: new FormControl(''),
      firstname:new FormControl('',[Validators.required, Validators.maxLength(20)]),
      lastname:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required, Validators.email]),
      phone:new FormControl('',[Validators.required]),
      age:new FormControl('',[Validators.required]),
      state:new FormControl('',[Validators.required]),
      country:new FormControl('',[Validators.required]),
      address:new FormControl('',[Validators.required]),
      tags:new FormControl('',[Validators.required]),
      subscribe:new FormControl('',[Validators.required])
    });
  }

  public submit(): void {
    this.file1?.patchValue(this.imgurl)
    const result = this.serv.addUser(this.regForm.value);
    if (result){
      alert("data saved successfully");
      this.modalService.dismissAll();
      this.router.navigateByUrl('profile');
    }
    
  }

  public dismissModal(){
    this.modalService.dismissAll();
  }
  get file1(){
    return this.regForm.get('file1')
  }

  get firstname(){
    return this.regForm.get('firstname')
  }

  get lastname(){
    return this.regForm.get('lastname')
  }

  imgurl:any="https://cdn3.iconfinder.com/data/icons/business-vol-26/100/Artboard_2-1024.png"
  imgValid:any=true
  onImageChange(e:any) {
    if(e.target.files) {
      if(e.target.files[0].size < 310*325){
        this.imgValid=false
        const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);

      reader.onload=(imgres:any)=>{
        console.log(imgres.target.result)
        this.imgurl=imgres.target.result
      }
      }
    }

  }
}


