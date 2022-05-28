import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Account } from './account';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //public accounts: Account[];
  //title = 'Kartola';
  public accounts: Account[];

  constructor(private accountService: AccountService){}

  ngOnInit(){
    this.getAccounts();
  }
  
  public getAccounts(): void{
  
    this.accountService.getAccounts().subscribe({
      next: (response: Account[]) =>{
        this.accounts = response;
        console.log(this.accounts);
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
      complete: () => {
        // do something when the observable completes
      }
    });

  }
}
