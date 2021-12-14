import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css']
})
export class TutorialsListComponent implements OnInit {

  tempList:any = []
  constructor(private service:TutorialService){}

  ngOnInit(): void {
    this.refreshList();
  }

  refreshList() {
    this.service.get(1).subscribe(data=>{this.tempList = data['string']});
  }

}
