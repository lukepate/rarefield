import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  mic: any = true;
  hard: any = false;
  soft: any = false;
  Hardware: any;
  Software: any;
  dropdownShow: any = true;
  desktopRarefield: any = "../../assets/rarefield_1920.jpg"

  @HostListener('window:scroll', ['$event'])

  changeMic(){
    if(this.mic){
      this.mic = true;
    } else{
      this.mic = true;
      this.hard = false;
      this.soft = false;
    }
  }

  ngOnInit() {
    if(window.innerWidth < 800){
      this.desktopRarefield = "../../assets/bg_mobile.jpg";
    }

    console.log(window.innerWidth)
  }

  changeHard(){
    if(this.hard){
      this.hard = false;
      this.mic = true;
    } else{
      this.hard = true;
      this.mic = false;
      this.soft = false;
    }
  }

  changeSoft(){
    if(this.soft){
      this.mic = true;
    } else{
      this.soft = true;
      this.hard = false;
      this.mic = false;
    }
  }




}
