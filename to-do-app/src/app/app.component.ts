import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TaskAddEditComponent } from './task-add-edit/task-add-edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'to-do-app';
  taskArray = [{ taskName: 'Brush teeth', isCompleted: false }];

  readonly APIUrl="http://localhost:5000/";
  constructor(private http:HttpClient, private _dialog: MatDialog){

  };

  openAddEditTaskForm(){
    this._dialog.open(TaskAddEditComponent)
  }

  notes:any=[];

  refreshNotes(){
    this.http.get(this.APIUrl+"notes").subscribe((data)=>{
      this.notes=data;
    })
  };

  ngOnInit(){
    this.refreshNotes();
  };

  addNotes(){
    const description = (<HTMLInputElement>document.getElementById("description")).value;
    const formdata = {
      "description": description
    };
   
    this.http.post(this.APIUrl+"notes", formdata).subscribe(data => {
      alert(data);
      this.refreshNotes();
    })
  };

  deleteNotes(id:any){
  
    this.http.delete(this.APIUrl+"notes/"+id).subscribe(data => {
      alert(data);
      this.refreshNotes();
    })
  };

  editNotes(id: any) {
  this.http.get(this.APIUrl+"notes/"+id).subscribe(data => {
    console.log(data);
    const element = <HTMLInputElement>document.getElementById("description")
  
    element.textContent = "New"
  });
  
    
  }

  onSubmit(form: NgForm) {
    console.log(form);

    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false
    })

    form.reset();
  }
}
