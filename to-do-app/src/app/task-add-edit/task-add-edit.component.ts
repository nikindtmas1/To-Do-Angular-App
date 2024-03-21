import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TaskServiceService } from '../services/task-service.service';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-task-add-edit',
  templateUrl: './task-add-edit.component.html',
  styleUrl: './task-add-edit.component.css'
})
export class TaskAddEditComponent implements OnInit {
  isChecked = false;
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
      description: "",
      checkBox: this.isChecked
    })
  }

  notes:any=[];

  refreshNotes(){
    this._taskService.getAllTasks().subscribe((data)=>{
      this.notes=data;
    })
  };

  ngOnInit(){
    this.taskForm.patchValue(this.data);
  };

  onCheck(id: any) {
    this._taskService.getTaskById(id).subscribe((data) => {
      console.log(data.checkBox);

    })
    // this.isChecked = true;
    // this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }

  

  checkValue(event: any){
    console.log(event);
    if(event === 'A'){
      this.isChecked = true;
      console.log(this.isChecked);
      
    }else{
      this.isChecked = false
      console.log(this.isChecked);
      
    }

  }
  

  onFormSubmit(){

    if(this.taskForm.valid){
      if(this.data){
        
        const description = this.taskForm.value.description;
        const check = this.isChecked
        const formdata = {
          description,
          checkBox : check
        }
         
        this._taskService.editTask(this.data._id, formdata).subscribe({
          next: (val: any) => {
            alert("Task detail updated!");
            this._dialogRef.close(true);
            this.refreshNotes();
          },
          error: (err: any) => {
            console.error(err);
          },
        })
      }else{

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
      }
      
      // this.http.post(this.APIUrl+"notes", formdata).subscribe(data => {
      //   alert(data);
      //   this.refreshNotes();
      // })
    }
  }
}
