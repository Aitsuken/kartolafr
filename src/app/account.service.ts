import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAccounts() : Observable<Account[]>{
    return this.http.get<Account[]>(`${this.apiServerUrl}/manage/account/all`);
  }

  public addAccount(account: Account) : Observable<Account>{
    return this.http.post<Account>(`${this.apiServerUrl}/manage/account/add`, account);
  }

  public updateAccount(account: Account) : Observable<Account>{
    return this.http.put<Account>(`${this.apiServerUrl}/manage/account/update`, account);
  }

  public deleteAccount(accountId: number) : Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/manage/account/delete/${accountId}`);
  }
}
