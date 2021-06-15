import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertController, NavController, Platform } from '@ionic/angular';
//import { AuthActions, AuthObserver, AuthService, IAuthAction } from 'ionic-appauth';
import { PhotoService } from '../../service/photo.service';
import { AuthService } from 'src/app/service/auth.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { S3ServiceProvider } from 'src/app/service/s3-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


// Called in the front end:
//    title, button [function- openCamera]


export class Tab1Page implements OnInit, OnDestroy {

  constructor(
    public navCtrl: NavController,
      public platform: Platform, private camera: Camera, private loader: AlertController, public auth: AuthService, private photoService: PhotoService,
      public s3Service: S3ServiceProvider) {}

  async ngOnInit() {

  }

  

  ngOnDestroy() {

  }



  public imageData: string;
  public imageView: string;
  public imageName: string;


  
  
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
}
