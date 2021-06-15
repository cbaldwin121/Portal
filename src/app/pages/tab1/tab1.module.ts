//import { AuthModule } from '../../service/auth/auth.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { S3ServiceProvider } from 'src/app/service/s3-service.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,

  ],
  declarations: [Tab1Page],
  providers: [S3ServiceProvider]
})
export class Tab1PageModule {}
