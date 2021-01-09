import { Component } from '@angular/core';
import { Person } from '../../assets/data/person.model';
import { PersonService } from '../../assets/data/person.service';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  persons: Person[];
  constructor(
    public  alertController: AlertController,
    private personService: PersonService,
    private actionSheetController: ActionSheetController,
    private router: Router) {}
  

    // ionViewWillEnter() {
    //   console.log('ionViewWillEnter ')
    // }
  
    //   ionViewDidLoad() {
    //   console.log('ionViewDidLoad ')
    //   }
    //   ionViewDidEnter() {
    //   console.log('ionViewDidEnter ')
    //   }
    //   ionViewWillLeave() {
    //   console.log('ionViewWillLeave  ')
    //   }
    //   ionViewDidLeave() {
    //   console.log('ionViewDidLeave   ')
    //   }
    //   ionViewWillUnload() {
    //   console.log('ionViewWillUnload    ')
    //   }
    ionViewWillEnter(){
      this.persons=this.personService.fetchPersons();
      console.log(this.persons);
      // this.personService.presentLoading();
    }

    async presentAlertConfirm(id:string) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Are you sure you want to delete this person?',
        message: 'The change you are about to make is irreversible!',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              // console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Delete',
            handler: () => {
              this.personService.removePerson(id);
              this.persons = this.personService.persons;
              console.log("Removed")
            }
          }
        ]
      });
  
      await alert.present();
    }

  async onClickperson(id:string) {
    const actionSheet = await this.actionSheetController.create({
      header: 'You would like to:',
      buttons: [
        {text: 'Remove Person',
         icon: 'trash',
         handler: () => {
           this.presentAlertConfirm(id);
         },
        },
        {text: 'View Detail',
         icon: 'eye',
         handler: () => {
           this.router.navigate(['/tabs/tab2/persondetail/'+id]);
           
         },
        },
        {text: 'Edit',
         icon: 'pencil',
         handler: () => {
           this.router.navigate(['/tabs/tab2/persondetail/'+id]);
           
         },
        },
        {text: 'Cancel',
         icon: 'close',
         role: 'cancel'
        },
      ]
    })
    await actionSheet.present();

    

   
}}
