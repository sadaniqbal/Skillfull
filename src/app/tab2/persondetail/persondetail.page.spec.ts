import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { persondetailPage } from './persondetail.page';

describe('persondetailPage', () => {
  let component: persondetailPage;
  let fixture: ComponentFixture<persondetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ persondetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(persondetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
