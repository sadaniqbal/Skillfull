import { Component, OnInit } from "@angular/core";
import { Person } from "../../assets/data/person.model";
import { PersonService } from "../../assets/data/person.service";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page implements OnInit {
  loadedPersons: Person[];
  constructor(private personService: PersonService) {}
  ngOnInit() {
    this.loadedPersons = this.personService.persons;
    console.log(this.loadedPersons);
  }
  ionViewWillEnter() {
    this.loadedPersons = this.personService.persons;
    this.personService.presentLoading();
  }
}
