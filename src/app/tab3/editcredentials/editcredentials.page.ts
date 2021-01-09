import { Component, OnInit } from '@angular/core';
import { Credentials } from '../../../assets/data/credentials.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CredentialsService } from '../../../assets/data/credentials.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editcredentials',
  templateUrl: './editcredentials.page.html',
  styleUrls: ['./editcredentials.page.scss'],
})
export class EditcredentialsPage implements OnInit {
  credentials: Credentials;
  id: string;
  form: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private credentialsService: CredentialsService,
    private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('credentialsId');
    this.credentials = this.credentialsService.getCredentials(this.id);
    this.form = new FormGroup({
      username: new FormControl(this.credentials.username,{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      password: new FormControl(this.credentials.password,{
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(180)]
      })
    })
  }
  onEditCredentials() {
    console.log(this.form)
    this.credentialsService.updateCredentials(
      this.id,
      this.form.value.username,
      this.form.value.password);
      this.form.reset();
      this.router.navigate(['/tabs/tab3'])
  }
}
