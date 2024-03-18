import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog} from '@angular/material/dialog';
import { TaskAddEditComponent } from './task-add-edit/task-add-edit.component';
import { TaskServiceService } from './services/task-service.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort,} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
 
})
export class AppComponent implements OnInit {
 

  displayedColumns: string[] = ['id','description','checkbox','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  readonly APIUrl="http://localhost:5000/";
  constructor(
    private http:HttpClient, 
    private _dialog: MatDialog,
    private _taskService: TaskServiceService,
    ){};

  openAddEditTaskForm(){
   const dialogRef = this._dialog.open(TaskAddEditComponent);
   dialogRef.afterClosed().subscribe({
    next: (val) => {
      if(val){
        this.getTasks()
      }
    }
   })
  };

  getTasks(){
    this._taskService.getAllTasks().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err: any) => {
        console.error(err)
      }
    });

  };

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  };

  deleteNotes(id: any){
    this._taskService.deleteTask(id).subscribe({
      next: (res) => {
        alert('Task deleted!');
        this.getTasks()
      },
      error: (err: any) => {
        console.error(err)
      }
    })
  }

  openEditForm(data: any){
   const dialogRef = this._dialog.open(TaskAddEditComponent, {
      data: data
    });
  
    dialogRef.afterClosed().subscribe({
     next: (val) => {
       if(val){
         this.getTasks()
       }
     }
    })
   };

  notes:any=[];

  refreshNotes(){
    this.http.get(this.APIUrl+"notes").subscribe((data)=>{
      this.notes=data;
    })
  };

  ngOnInit(): void{
    this.getTasks();
  };

  // addNotes(){
  //   const description = (<HTMLInputElement>document.getElementById("description")).value;
  //   const formdata = {
  //     "description": description
  //   };
   
  //   this.http.post(this.APIUrl+"notes", formdata).subscribe(data => {
  //     alert(data);
  //     this.refreshNotes();
  //   })
  // };

  // deleteNotes(id:any){
  
  //   this.http.delete(this.APIUrl+"notes/"+id).subscribe(data => {
  //     alert(data);
  //     this.refreshNotes();
  //   })
  // };

  // editNotes(id: any) {
  // this.http.get(this.APIUrl+"notes/"+id).subscribe(data => {
  //   console.log(data);
  //   const element = <HTMLInputElement>document.getElementById("description")
  
  //   element.textContent = "New"
  // });
  
    
  // }

  // onSubmit(form: NgForm) {
  //   console.log(form);

  //   this.taskArray.push({
  //     taskName: form.controls['task'].value,
  //     isCompleted: false
  //   })

  //   form.reset();
  // }
}
