import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditpersonPage } from './editperson.page';

describe('EditpersonPage', () => {
  let component: EditpersonPage;
  let fixture: ComponentFixture<EditpersonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpersonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditpersonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
