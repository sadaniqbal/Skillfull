import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CredentialsService } from '../../../assets/data/credentials.service';

@Component({
  selector: 'app-newcredentials',
  templateUrl: './newcredentials.page.html',
  styleUrls: ['./newcredentials.page.scss'],
})
export class NewcredentialsPage implements OnInit {
  form: FormGroup
  constructor(private credentialsService: CredentialsService,
    private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(null,{
        updateOn: "blur",
        validators: [Validators.required]
      }),
      password: new FormControl(null,{
        updateOn: "blur",
        validators: [Validators.required]
      }),
    });
  }
  onCreateCredentials(){
    console.log(this.form);
    this.credentialsService.addCredentials(
      this.form.value.username,
      this.form.value.password,
    );
    this.form.reset();
    this.router.navigate(['/tabs/tab3'])
  }
}
