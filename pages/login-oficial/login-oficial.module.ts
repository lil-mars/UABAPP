import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginOficialPage } from './login-oficial';

@NgModule({
  declarations: [
    LoginOficialPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginOficialPage),
  ],
})
export class LoginOficialPageModule {}
