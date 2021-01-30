import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {

  nav: Nav[] = [
    {
      link: '/home',
      name: 'Home',
      exact: true,
      admin: false
    },
    {
      link: '/todo',
      name: 'To Do',
      exact: false,
      admin: false
    }
  ];

}



interface Nav {
  link: string,
  name: string,
  exact: boolean,
  admin: boolean
}
