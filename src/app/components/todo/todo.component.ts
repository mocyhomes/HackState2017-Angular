import { Component, OnInit } from '@angular/core';
import { ContributionsService } from '../../services/contributions.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
	todo:boolean;
	todos: any[];

  constructor(
  	private contributionsService:ContributionsService
  ) { }

  ngOnInit() {
  	this.contributionsService.getTodos().subscribe(todos => {
  		this.todos = todos;
      console.log(todos);
  		if (todos) this.todo = true;
  		else this.todo = false;
  	});
  }
}
