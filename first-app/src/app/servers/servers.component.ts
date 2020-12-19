import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No Server was Created! ";
  serverName = "testServerName";
  serverCreated = false;
  servers = ['tserver','tserver 2'];

  constructor() {
    this.allowNewServer  = true;

    // setTimeout(() => {
    //   this.allowNewServer = true;
    // },2000);
   }

  ngOnInit(): void {
  }

  onServerCreation(){
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = this.serverName;

  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
