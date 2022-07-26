import { Component, OnInit } from '@angular/core';
import { IList } from '../../interfaces/List';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {
  public list: Array<IList> = [
    {
      title: 'Task One',
      isActive: false
    },
    {
      title: 'Task Two',
      isActive: true
    },
    {
      title: 'Task Three',
      isActive: false
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  public checkTask(index: number): void {
    this.list[index].isActive = !this.list[index].isActive
  }

  public sortList(): Array<IList> {
    return [{
      title: 'a',
      isActive: false
    }]
  }
}
