import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Credentials } from "../../assets/data/credentials.model";
import { CredentialsService } from "../../assets/data/credentials.service";
import { Router } from "@angular/router";
import { LoadingController } from '@ionic/angular';

@Component({
  selector: "app-tab3",
  templateUrl: "./tab3.page.html",
  styleUrls: ["./tab3.page.scss"],
})
export class Tab3Page implements OnInit {
  form: FormGroup;
  credentials: Credentials[];
  constructor(
    private credentialsService: CredentialsService,
    private router: Router
  ) {}
  

  // ionViewWillEnter() {
    
    
  // }
  ngOnInit() {
    this.credentials = this.credentialsService.fetchCredentials();
    // this.persons = this.placeService.places;
    console.log(this.credentials);
    this.form = new FormGroup({
      username: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required],
      }),
      password: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required],
      }),
    });
  }
}
