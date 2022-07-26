import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IList } from '../../interfaces/IList';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {

  @Input() public list: Array<IList> = []
  @Output() private listShared = new EventEmitter()
  @Output() private indexTaskDel = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  public checkTask(index: number): void {
    this.list[index].isActive = !this.list[index].isActive
    this.listShared.emit(this.list)
  }

  public delTask(index: number): void {
    this.indexTaskDel.emit(index)
  }
}
