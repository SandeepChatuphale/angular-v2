import { Injectable } from '@angular/core';
import { Message } from 'src/model/Message';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages:Message[] = []


  //DI - this is Dependency Injection 
  //using DI angular is injecting HttpClient Object
  //HttpClient is needed to make rest calls
  constructor(private http:HttpClient) { }

  findAll() : Observable<Message[]>
  {
    return this.http.get<Message[]>('http://localhost:8080/api/message');
  }

  save(m:Message)
  {
    return this.http.post<Message[]>('http://localhost:8080/api/message',m)
    //this.messages.push(m)
  }

  deleteMessageById(id:number){
    return this.http.delete<void>('http://localhost:8080/api/message/'+id);
  }

}
