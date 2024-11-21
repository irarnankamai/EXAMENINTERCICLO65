import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {
  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  private socket = io.connect('http://192.168.124.97:8080'); 

  sendMessage(message: string) {
    console.log("send message: ", message);
    this.socket.emit('chat message', message);
  }

  getMessages = () => {
    this.socket.on('chat message', (message) => {
      this.message$.next(message);
    });

    return this.message$.asObservable();
  }
}
