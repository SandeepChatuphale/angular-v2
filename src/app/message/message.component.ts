import { Component } from '@angular/core';
import { Message } from 'src/model/Message';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  
  //todo - make a rest call
  messages:Message[] = []

  message = 'No Data'

  //DI - this is Dependency Injection 
  //using DI angular is injecting MessageService Object
  constructor(private service : MessageService){
    this.showAll()
  }

  showAll()
  {
   /* this.service.findAll().subscribe((success:Message[]) => {
      this.messages = success;
      this.message = 'data fetched'
    } )*/

    this.service.findAll().subscribe({
    next:  (success:Message[]) => {
      this.messages = success;
      this.message = 'data fetched'
    },
    error : (e) => {
      if(e.status == 0)
        {
          this.message = 'Server Down please try after sometime'
        }
    }
  })

    this.message = 'Loading...'
  }

  deleteById(id:number)
  {
    const result = confirm('are you sure?')
    if(result)
    {
     /* this.service.deleteMessageById(id).subscribe(success => {
        this.messages =  this.messages.filter(m => m.id != id)
      }) */

      this.service.deleteMessageById(id).subscribe(
      {
          //success path
        next : (success) => {this.messages =  this.messages.filter(m => m.id != id)},

        //error - is error
        error: (e) => { console.log(e) 

          if(e.status == 404 )
          {
            this.message = 'resource not found'
          }
          if(e.status == 401 )
            {
              this.message = 'you are not authenticated'
            }
        }
      })  
    }
      
  }
}
