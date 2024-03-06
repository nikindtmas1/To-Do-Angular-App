import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'to-do-app';

  readonly APIUrl="";// Added APIUrl when created

  constructor(private http:HttpClientModule){

  };

  notes:any=[];

  
}
