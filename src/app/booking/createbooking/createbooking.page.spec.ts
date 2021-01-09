import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreatebookingPage } from './createbooking.page';

describe('CreatebookingPage', () => {
  let component: CreatebookingPage;
  let fixture: ComponentFixture<CreatebookingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatebookingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatebookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
