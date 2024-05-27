import { Component } from '@angular/core';
import { Message } from 'src/model/Message';
import { MessageService } from '../service/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addmessage',
  templateUrl: './addmessage.component.html',
  styleUrls: ['./addmessage.component.css']
})
export class AddmessageComponent {
  id:number = 0;
  name:string = ''

  //DI - this is Dependency Injection 
  //using DI angular is injecting MessageService Object and Router Object
  constructor(private service : MessageService,private router:Router){}

  addMessage()
  {
    const m = new Message(this.id,this.name);//this object MUST be added in messages array

    this.service.save(m).subscribe(success => {
      this.router.navigate(['messages'])  //routing programatically
    })  //calling service class save() method
  }
}
