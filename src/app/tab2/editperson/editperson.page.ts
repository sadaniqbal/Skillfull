import { Component, OnInit } from "@angular/core";
import { Person } from "../../../assets/data/person.model";
import { ActivatedRoute, Router } from "@angular/router";
import { PersonService } from "../../../assets/data/person.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-editperson",
  templateUrl: "./editperson.page.html",
  styleUrls: ["./editperson.page.scss"],
})
export class EditpersonPage implements OnInit {
  person: Person;
  id: string;
  form: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("personId");
    this.person = this.personService.getPerson(this.id);
    this.form = new FormGroup({
      name: new FormControl(this.person.name, {
        updateOn: "blur",
        validators: [Validators.required],
      }),
      category: new FormControl(this.person.category, {
        updateOn: "blur",
        validators: [Validators.required],
      }),
      description: new FormControl(this.person.description, {
        updateOn: "blur",
        validators: [Validators.required, Validators.maxLength(180)],
      }),
      wage: new FormControl(this.person.wage, {
        updateOn: "blur",
        validators: [
          Validators.required,
          Validators.min(1),
          Validators.max(100),
        ],
      }),
      availableFrom: new FormControl(this.person.availableFrom.toISOString(), {
        updateOn: "blur",
        validators: [Validators.required],
      }),
      availableTo: new FormControl(this.person.availableTo.toISOString()),
    });
  }
  onEditperson() {
    console.log(this.form);
    this.personService.updatePerson(
      this.form.value.name,
      this.form.value.category,
      this.form.value.description,
      this.form.value.image,
      this.form.value.wage,
      new Date(this.form.value.availableFrom),
      new Date(this.form.value.availableTo)
    );
    this.form.reset();
    this.router.navigate(["/tabs/tab2"]);
  }
}
