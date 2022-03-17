import { Component, OnInit } from '@angular/core';
import {Todo} from '../model/Todo';
import {CalculService} from '../services/calcul.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  listTodo: Todo[];
  count: number;

  constructor(private serviceCal: CalculService) { }

  ngOnInit(): void {
    this.listTodo = [
      {userId: 1, id: 1, title: 'Task1', completed: true},
      {userId: 1, id: 2, title: 'Task2', completed: true},
      {userId: 2, id: 3, title: 'Task3', completed: true},
      {userId: 3, id: 4, title: 'Task4', completed: false}
    ];
  }

  getStat(){
 this.count = this.serviceCal.getNumberOf(this.listTodo, 'completed', true);
  }
}
