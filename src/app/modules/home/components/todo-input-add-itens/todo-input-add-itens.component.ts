import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})

export class TodoInputAddItensComponent implements OnInit {

  @Output() private itemShared = new EventEmitter()
  public item: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public addItem(): void {
    this.itemShared.emit(this.item)
    this.item = ""
  }
}
