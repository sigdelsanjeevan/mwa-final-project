import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private myService: ConfigService) {
    this.signupForm = formBuilder.group({
      'firstname': ['', [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]{0,}")]],
      'lastname': ['', [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]{0,}")]],
      'username': ['', [Validators.required, Validators.pattern("^[a-z0-9]+(?:[_.-][a-z0-9]+)*$")]],
      'phonenumber': ['', { validators: [Validators.required, Validators.pattern("[- +()0-9]{6,}")], updateOn: "blur" }],
      'email': ['', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
      'password': ['', { validators: [Validators.required, Validators.minLength(6), Validators.pattern("^([a-zA-Z0-9@*#]{6,15})$")], updateOn: "blur" }],
      'confirmpassword': ['', [Validators.required]],
    })
  }

  onSubmit() {
    console.log(this.signupForm.value);
    this.myService.sendSignupRequest().subscribe(incomingdata => console.log(incomingdata), err => console.log(err))
  }

  ngOnInit(): void {
      
  }

}
