import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: []
})
export class ErrorPageComponent implements OnInit {
  
  errorMessage!: string;
 

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    //Primera alternativa
    this.errorMessage = this.route.snapshot.data['message'];
    //Segunda alternativa
    /*this.route.data.subscribe(
      (data: Data) => {
        this.errorMessage = data['message'];
      }
    )*/
  }

}
