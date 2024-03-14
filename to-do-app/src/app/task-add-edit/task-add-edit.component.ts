import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task-add-edit',
  templateUrl: './task-add-edit.component.html',
  styleUrl: './task-add-edit.component.css'
})
export class TaskAddEditComponent {
  readonly APIUrl="http://localhost:5000/";
  taskForm:FormGroup

  constructor(private _fb: FormBuilder, private http:HttpClient){
    this.taskForm = _fb.group({
      description: ""
    })
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

  onFormSubmit(){
    if(this.taskForm.value){
      const formdata = this.taskForm.value
      
      console.log(formdata);
      this.http.post(this.APIUrl+"notes", formdata).subscribe(data => {
        alert(data);
        this.refreshNotes();
      })
    }
  }
}
