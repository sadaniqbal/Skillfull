import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonService } from '../../../assets/data/person.service';
import { PhotoService } from '../../services/photo.service'

import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


const { Camera } = Plugins;

@Component({
  selector: 'app-newperson',
  templateUrl: './newperson.page.html',
  styleUrls: ['./newperson.page.scss'],
})
export class NewpersonPage implements OnInit {
  form: FormGroup
  photo: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer,
    private personService: PersonService,
    private router: Router,
    private photoService: PhotoService) { }


    async takePicture() {
      const image = await Camera.getPhoto({
       quality: 90,
       allowEditing: true,
       resultType: CameraResultType.DataUrl,
       source: CameraSource.Camera,
       //saving to gallery
       saveToGallery: true
      });
  
      this.photo = this.sanitizer.bypassSecurityTrustResourceUrl( image && (image.dataUrl));
      console.log(this.photo);

    }
     
  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null,{
        updateOn: "blur",
        validators: [Validators.required]
      }),
      category: new FormControl(null,{
        updateOn: "blur",
        validators: [Validators.required]
      }),
      description: new FormControl(null,{
        updateOn: "blur",
        validators: [Validators.required, Validators.maxLength(180)]
      }),
      wage: new FormControl(null,{
        updateOn: "blur",
        validators: [Validators.required, Validators.min(1)]
      }),
      // image: new FormControl(null,{
      //   updateOn: "blur",
      //   validators: [Validators.required]
      // }),
      availableFrom: new FormControl(null,{
        updateOn: "blur",
        validators: [Validators.required]
      }),
      availableTo: new FormControl(null,{updateOn: "blur",
      validators: [Validators.required]}),
    });
  }


  clickPicture(){this.photoService.addNewToGallery()}
  
  onCreateperson(){
    console.log(this.form);
    this.personService.addPerson(
      this.form.value.name,
      this.form.value.category,
      this.form.value.description,
      this.form.value.wage,
      //adding image
      this.form.value.image,
      new Date(this.form.value.availableFrom),
      new Date(this.form.value.availableTo),
    );
    this.form.reset();
    // this.router.navigate(['/tabs/tab2'])
  }

  
}
