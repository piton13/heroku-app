import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public list = [{ id: 0, name: 'some name' }];

  constructor(public listService: ListService) {
  }

  ngOnInit() {
    this.listService.getItems().subscribe(list => {
      this.list = list;
    });
  }

}
