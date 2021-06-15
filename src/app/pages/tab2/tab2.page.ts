import { AlertController, ModalController, NavController, Platform } from '@ionic/angular';

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';

import { S3ServiceProvider } from 'src/app/service/s3-service.service';
import { AuthService } from "../../service/auth.service";

// this page gets the user image and calls auth.service to push photo post to aws S3

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

//This array will only contain the name of a file like “1234.png”,
//so for each entry we need to resolve the name to the local path of our app which we add to the object as filePath.
//export class imgPost
//{
//  img: string;
//  description: string
//}

export class Tab2Page{
  public imageData: string;
  public imageView: string;
  public imageName: string;


  constructor(
    public navCtrl: NavController,
      public platform: Platform, private camera: Camera, public s3Service: S3ServiceProvider, private loader: AlertController, public auth: AuthService
  ) {}
  
  openCamera() {
    this.platform.ready().then(readySource => {
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      };

      this.camera.getPicture(options).then(
        imageData => {
          this.imageView = "data:image/jpeg;base64," + imageData;
          this.imageData = imageData;
        },
        err => {
          alert("Error in capture image");
        }
      );
    });
  }

  async uploadPhoto() {

  }
}
