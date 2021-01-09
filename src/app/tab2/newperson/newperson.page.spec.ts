import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewpersonPage } from './newperson.page';

describe('NewpersonPage', () => {
  let component: NewpersonPage;
  let fixture: ComponentFixture<NewpersonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewpersonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewpersonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
