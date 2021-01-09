import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewcredentialsPage } from './newcredentials.page';

describe('NewcredentialsPage', () => {
  let component: NewcredentialsPage;
  let fixture: ComponentFixture<NewcredentialsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcredentialsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewcredentialsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
