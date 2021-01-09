import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CredentialsDetailPage } from './credentialsdetail.page';

describe('CredentialsDetailPage', () => {
  let component: CredentialsDetailPage;
  let fixture: ComponentFixture<CredentialsDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredentialsDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CredentialsDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
