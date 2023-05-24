import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  //function button
  dropDownMenu(){
    const btn = document.querySelector("button.mobile-menu-button");
    const menu = document.querySelector(".mobile-menu")

    btn?.addEventListener("click", ()=>{
      menu?.classList.toggle("hidden")
    })
  }

}
