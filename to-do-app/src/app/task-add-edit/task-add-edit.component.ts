import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TaskServiceService } from '../services/task-service.service';
import { DialogRef } from '@angular/cdk/dialog';
import { HttpClient } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task-add-edit',
  templateUrl: './task-add-edit.component.html',
  styleUrl: './task-add-edit.component.css'
})
export class TaskAddEditComponent {
  readonly APIUrl="http://localhost:5000/";
  taskForm:FormGroup

  constructor(
    private _fb: FormBuilder, 
    private _taskService: TaskServiceService,
    private _dialogRef: DialogRef<TaskAddEditComponent>,
    private _http: HttpClient,
    ){
    this.taskForm = this._fb.group({
      description: ""
    })
  }

  notes:any=[];

  refreshNotes(){
    this._http.get(this.APIUrl+"notes").subscribe((data)=>{
      this.notes=data;
    })
  };

  ngOnInit(){
    this.refreshNotes();
  };

  onFormSubmit(){
    if(this.taskForm.valid){
      const formdata = this.taskForm.value
      this._taskService.addedTask(formdata).subscribe({
        next: (val: any) => {
          alert("Task added successfully");
          this._dialogRef.close();
          this.refreshNotes();
        },
        error: (err: any) => {
          console.error(err);
        },
      })
      
      // this.http.post(this.APIUrl+"notes", formdata).subscribe(data => {
      //   alert(data);
      //   this.refreshNotes();
      // })
    }
  }
}
