import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs'

@Injectable()
export class AppService {

  constructor(private http: Http) {
    console.log('Hello AppService Provider');
  }

  //=========================admin========================
  CreateUser(email, password, roll): Observable<any> {
    return this.http.post('api/admin/CreateUser',
      { Email: email, Password: password, isAdmin: roll })
      .map((res) => {
        if (res)
          res.json()
      })
  }


  signIn(email, password): Observable<any> {

    return this.http.post('api/authentication', { Email: email, Password: password })
      .map(res => res.json()  )
    /*, (error, res) => {
      console.log(error, res)
    })
      .map((res) => {
       
          res.json()
      })*/
  }
  getUsers() : Observable<any>{
    return this.http.get('api/admin/getUsers')
  }
   

  CreateBranch(BranchName,BranchOwner,ownerNumber ,address,BusinessType,senderId,user,landline): Observable<any> {
  

    return this.http.post('api/admin/CreateBranch',
      { BranchName: BranchName,BranchOwner:BranchOwner, MobileNo: ownerNumber,SenderID: senderId,BusinessType:BusinessType,Address : address ,Landline:landline , UserID : user
       })
      .map((res) => {
        if (res)
          res.json()
      })
  }

  //======================= user =========================
  CreateSMS(title, body): Observable<any> {
    return this.http.post('api/general/CreateSms',
      { MessageName: title, MessasgeBody: body, Status: 'pendding' })
      .map((res) => {
        if (res)
          res.json()
      })
  }
  getAllSMS(): Observable<any> {
    return this.http.get
      ('api/general/GetAllSms')
    /*.map((res) => {
     console
     .log(res);
    })*/
  }
  getAllCustomers(): Observable<any> {
    return this.http.get('api/general/getUsers')
    /*.map((res) => {
      if (res)
        res.json()
    })*/

  }
  createCustomer(sms, customer, name, phone, email) {
    console.log(customer);
    return this.http.post('api/general/CreateCustomer',
      { Sms: sms, customers: customer, CustomerName: name, MobileNo: phone, CustomerEmail: email })
      .map((res) => {
        if (res)
          res.json()
      })
  }
  //

}
