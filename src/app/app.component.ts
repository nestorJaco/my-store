import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Nestor';
  age = 18;
  img:string='https://www.w3schools.com/howto/img_avatar.png';
  btnDisabled = true;
  person = {
    name: 'Nestor',
    age: 54,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png',
  }
  names: string[] = ['Nico', 'Juli', 'Santi'];
  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }
  increaseAge(){
    this.person.age += 1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);

  }
  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  
  }


}
