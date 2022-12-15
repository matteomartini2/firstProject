import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-personal-profile',
  templateUrl: './personal-profile.component.html',
  styleUrls: ['./personal-profile.component.scss']
})
export class PersonalProfileComponent implements OnInit {
  
  
  
  formDelCazzo = new FormGroup({});

  constructor() { 
  }

  ngOnInit(): void {
    this.formDelCazzo.addControl(
      'name',
      new FormControl('', Validators.required)
    );

    this.formDelCazzo.addControl(
      'surname',
      new FormControl('', Validators.required)
    );
    this.formDelCazzo.addControl(
      'via',
      new FormControl('', Validators.required)
    );
    this.formDelCazzo.addControl(
      'numero',
      new FormControl('', Validators.required)
    );
    this.formDelCazzo.addControl(
      'cap',
      new FormControl('', Validators.required)
    );
    this.formDelCazzo.addControl(
      'codice fiscale',
      new FormControl('', Validators.required)
    );
    this.formDelCazzo.addControl(
      'stato',
      new FormControl('', Validators.required)
    );
    this.formDelCazzo.addControl(
      'regione',
      new FormControl('', Validators.required)
    );
    this.formDelCazzo.addControl(
      'city',
      new FormControl('', Validators.required)
    );
    this.formDelCazzo.addControl(
      'email',
      new FormControl('', Validators.required)
    );
    this.formDelCazzo.addControl(
      'numero telefonico',
      new FormControl('', Validators.required)
    );
    this.formDelCazzo.addControl(
      'numero fisso',
      new FormControl('', Validators.required)
    );
    this.formDelCazzo.addControl(
      'sesso',
      new FormControl('', Validators.required)
    );
    this.formDelCazzo.addControl(
      'password',
      new FormControl('', Validators.required)
    );
    this.formDelCazzo.addControl(
      'note',
      new FormControl('', Validators.required)
    );
  }












































































  submit104(){
    console.log(this.formDelCazzo.value);
  }
}
