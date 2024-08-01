import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {


  ngOnInit(): void {


  }

  click = 0

  changeColor() {
    
    const containerAll:any = document.getElementById('containerAll')
    this.click++
    

    if(this.click == 1) {
    containerAll.style.background = "url(/gifs/night.gif)"
    containerAll.style.backgroundSize = "100%"
   

    } else {
      containerAll.style.background = "url(/gifs/day.gif)"
      containerAll.style.backgroundSize = "100%"
      this.click = 0
   

    }


  }

  changeGit() {

    window.location.href = "https://github.com/FranzieYoogan"

  }

  changeLinkedin() {

    window.location.href = "https://www.linkedin.com/in/franzie-yoogan-5968451ab/"

  }

}
