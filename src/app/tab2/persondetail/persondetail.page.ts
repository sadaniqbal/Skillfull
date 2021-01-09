import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Person } from "../../../assets/data/person.model";
import { PersonService } from '../../../assets/data/person.service';

@Component({
  selector: 'app-persondetail',
  templateUrl: './persondetail.page.html',
  styleUrls: ['./persondetail.page.scss'],
})
export class persondetailPage implements OnInit {
  person: Person
  id: String;
  constructor(private route: ActivatedRoute, private personService: PersonService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('personId');
    console.log(this.id);
    this.person = this.personService.getPerson(this.id);
    console.log(this.person);
  }

}
