import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'to-do-app';

  readonly APIUrl="http://localhost:5000/";
  constructor(private http:HttpClient){

  };

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
    const newNotes = (<HTMLInputElement>document.getElementById("description")).value;
    const formdata = new FormData();
   
    
    const description = formdata.get('description');
    console.log(formdata);
    
    this.http.post(this.APIUrl+"notes", formdata).subscribe(data => {
      alert(data);
      this.refreshNotes();
    })
  }

  deleteNotes(id:any){
  
    this.http.delete(this.APIUrl+"notes"+id).subscribe(data => {
      alert(data);
      this.refreshNotes();
    })
  }
}
