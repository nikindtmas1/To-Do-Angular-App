import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task-add-edit',
  templateUrl: './task-add-edit.component.html',
  styleUrl: './task-add-edit.component.css'
})
export class TaskAddEditComponent {

  taskForm:FormGroup

  constructor(private _fb: FormBuilder){
    this.taskForm = _fb.group({
      description: "description"
    })
  }
}
