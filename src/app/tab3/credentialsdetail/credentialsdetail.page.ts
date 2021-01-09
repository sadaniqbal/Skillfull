import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Credentials } from "../../../assets/data/credentials.model";
import { CredentialsService } from '../../../assets/data/credentials.service';

@Component({
  selector: 'app-credentialsdetail',
  templateUrl: './credentialsdetail.page.html',
  styleUrls: ['./credentialsdetail.page.scss'],
})
export class CredentialsDetailPage implements OnInit {
  credentials: Credentials;
  id: String;
  constructor(private route: ActivatedRoute, private credentialsService: CredentialsService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('credentialsId');
    console.log(this.id);
    this.credentials = this.credentialsService.getCredentials(this.id);
    console.log(this.credentials);
  }

}
