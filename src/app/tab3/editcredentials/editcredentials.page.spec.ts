import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditcredentialsPage } from './editcredentials.page';

describe('EditcredentialsPage', () => {
  let component: EditcredentialsPage;
  let fixture: ComponentFixture<EditcredentialsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcredentialsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditcredentialsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
