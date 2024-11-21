import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PrincipalService } from '../../services/principal.service';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent implements OnInit {

  message: string = '';
  messages: string[] = [];
  serverName: string = 'Servidor'; 

  constructor(private principalService: PrincipalService) { }

  ngOnInit() {
    this.principalService.getMessages().subscribe((message: string) => {
      this.messages.push(message);
    });
  }

  sendMessage() {
    if (this.message.trim()) {
      const fullMessage = `${this.serverName}: ${this.message}`; 
      this.principalService.sendMessage(fullMessage); 
      this.message = '';  
    }
  }
}
