import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TaskServiceService } from '../services/task-service.service';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task-add-edit',
  templateUrl: './task-add-edit.component.html',
  styleUrl: './task-add-edit.component.css'
})
export class TaskAddEditComponent implements OnInit {
  readonly APIUrl="http://localhost:5000/";
  taskForm:FormGroup

  constructor(
    private _fb: FormBuilder, 
    private _taskService: TaskServiceService,
    private _dialogRef: MatDialogRef<TaskAddEditComponent>,
    private _http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any
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
    this.taskForm.patchValue(this.data);
  };

  onFormSubmit(){
    if(this.taskForm.valid){
      const formdata = this.taskForm.value
      this._taskService.addedTask(formdata).subscribe({
        next: (val: any) => {
          alert("Task added successfully");
          this._dialogRef.close(true);
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
