import { Component, OnInit } from '@angular/core';

//icons from @fortawesome
import {faGlobeAsia, faPen, faEyeSlash,faMobile} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-devroletimeline',
  templateUrl: './devroletimeline.component.html',
  styleUrls: ['./devroletimeline.component.css']
})
export class DevroletimelineComponent implements OnInit {

  constructor() { }

    //icons
    faGlobeAsia = faGlobeAsia;
   faPen = faPen;
   faMobile = faMobile;
  
  //developer role name and appropriate icon
  NameandIcon = [{name: " Web Designer", icon: this.faPen},
              {name:  " Web Developer", icon: this.faGlobeAsia},
              {name:  "  Moblie App Developer", icon: this.faMobile},
              {name:  "Data Scientist", icon: this.faMobile} 
              ]

  ngOnInit(): void {
  }

}
