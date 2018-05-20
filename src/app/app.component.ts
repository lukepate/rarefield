import { Component } from '@angular/core';

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

  changeMic(){
    if(this.mic){
      this.mic = true;
    } else{
      this.mic = true;
      this.hard = false;
      this.soft = false;
    }
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
