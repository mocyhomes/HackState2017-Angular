import { Component, OnInit } from '@angular/core';
import { ContributionsService } from '../../services/contributions.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
	todo:boolean;
	todos:any[];
	show:boolean;
  newToDo:string;
  contributionType :string;
  contributionValue:number = 0;
  contributionUnit :string;

  constructor(
  	private contributionsService:ContributionsService,
    private flashMessagesService:FlashMessagesService
  ) { }

  ngOnInit() {
		this.show = false;
  	this.contributionsService.getTodos().subscribe(todos => {
  		this.todos = todos;
  		if (todos.length > 0) this.todo = true;
  		else this.todo = false;
  	});
	}
	
	toggleShow() {
		this.show = !this.show;
	}

  addToDo() {
    this.contributionsService.addToDo(this.newToDo);
    this.newToDo = null;
    this.show    = false;
  }

  removeToDo(key) {
    this.contributionsService.removeToDo(key);
  }

  checkToDo(todo, key) {
    var that = this;
    document.getElementById('doneButton').onclick = function() {
      if (that.contributionType  && that.contributionUnit) {
        that.contributionsService.convertToDotoContribution(todo, that.contributionType, that.contributionValue, that.contributionUnit);
        that.removeToDo(key);
      }
      else {
        that.flashMessagesService.show('Please fill in all the blanks.', { cssClass:'alert-danger', timeout:3000 });
      }
    };
    this.contributionType  = null;
    this.contributionValue = 0;
    this.contributionUnit  = null;
  }

}
