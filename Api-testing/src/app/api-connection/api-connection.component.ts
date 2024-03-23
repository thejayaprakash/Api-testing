import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api.service.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-api-connection',
  templateUrl: './api-connection.component.html',
  styleUrls: ['./api-connection.component.scss']
})
export class APIConnectionComponent implements OnInit {
  form!:FormGroup
 data:any;
  constructor(private apiservice:ApiServiceService,private fb:FormBuilder) { }
  
  ngOnInit(): void {
    this.form=this.fb.group({
      result:['']
    })
    this.data={
      "username": "saikrishnagadde49@gmail.com",
      "password": "admin123"
  }
}
  Submit(){
     const url='http://3.110.209.83/api/fin-hrms/forget_password'
     this.form.patchValue({
       result: JSON.stringify(this.data) 
    })
     this.apiservice.postData(url,this.data).subscribe((res)=>{
      console.log('res',res)
      this.form.patchValue({
        result:res
      })
      
     },(error) => {
     
      console.error('Error:', error);
      // Handle errors here
    }
     )
  }

}
