import { Component, OnInit } from '@angular/core';
import { AuthDataService } from '../services/auth-data.service';


@Component({
  selector: 'app-admregistro',
  templateUrl: './admregistro.component.html',
  styleUrls: ['./admregistro.component.css']
})
export class AdmregistroComponent implements OnInit {


  public form={
    name:null,
    email:null,
    password:null,
    Cpassword:null
  }
  public error:any=[];
  constructor( private authDataService:AuthDataService) { }

  ngOnInit(): void {
  }

  submitSignup(){
    //console.log(this.form);
    return this.authDataService.signup(this.form).subscribe(
      //data=>console.log(data),
      error=>this.handleError(error)
    );
  }

  handleError(error:any){
    this.error=error.error.errors
  }
}
