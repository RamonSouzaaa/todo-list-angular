import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IList } from '../../interfaces/IList';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  private PROP_STATUS_LIST: string = 'isActive'
  private list: Array<IList> = []

  @Output() listShared = new EventEmitter()

  public getList(): Array<IList> {
    return this.list
  }

  public orderListByStatus(): void{
    let listOrder: Array<IList> = []
    this.list.forEach((item: any) => {
      if(item[this.PROP_STATUS_LIST]){
        listOrder.push(item)
      }else{
        listOrder.unshift(item)
      }
    })
    this.list = listOrder
  }

  public addItem(item: string): void {
    this.list.push({
      title: item,
      isActive: false
    })
  }

  public deleteItem(index: number) {
    this.list = this.list.filter((item) => {
      return item != this.list[index]
    })
  }

  public removeAll(): void {
    this.list = []
  }

  public setList(data: Array<IList>): void {
    this.list = data
    this.orderListByStatus()
  }

  constructor() { }

  ngOnInit(): void {
    this.listShared.emit(this.list)
  }
}
