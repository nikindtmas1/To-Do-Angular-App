import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'to-do-app';

  readonly APIUrl="http://localhost:5000/notes";// Added APIUrl when created

  constructor(private http:HttpClient){

  };

  notes:any=[];

  refreshNotes(){
    this.http.get(this.APIUrl+"getNotes").subscribe((data: any)=>{
      this.notes=data;
    })
  };

  ngOnInit(){
    this.refreshNotes();
  };
}
