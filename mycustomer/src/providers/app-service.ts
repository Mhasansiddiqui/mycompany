import { Injectable , OnInit} from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs'

import {ToastController} from 'ionic-angular'

@Injectable()
export class AppService implements OnInit{

  status
  constructor(private toastCtrl: ToastController,private http: Http) {
   this.status = this.getLoginStatus();
  }

  ngOnInit(){
     
  }

  //=========================admin======================== https://mycompanys . herokuapp . com/
  CreateUser(email, password, roll): Observable<any> {
    return this.http.post('https://mycompanys.herokuapp.com/admin/CreateUser',
      { Email: email, Password: password, isAdmin: roll })
       .map((r : Response) => r.json());
  }


  signIn(email, password): Observable<any> {
    let token = localStorage.getItem('token')
    return this.http.post('https://mycompanys.herokuapp.com/authentication', { Email: email, Password: password, token: token })
     
      .map(res =>{ 
        if(res)
         return res.json()
      })
      
      

      
  }
  getUsers(): Observable<any> {
    return this.http.get('https://mycompanys.herokuapp.com/admin/getUsers')
  }


  CreateBranch(BranchName, BranchOwner, ownerNumber, address, BusinessType, senderId, user, landline): Observable<any> {


    return this.http.post('https://mycompanys.herokuapp.com/admin/CreateBranch',
      {
        BranchName: BranchName, BranchOwner: BranchOwner, MobileNo: ownerNumber, SenderID: senderId, BusinessType: BusinessType, Address: address, Landline: landline, UserID: user
      })
      .map((r : Response) => r.json());
  }

  getCurrentBranchList(): Observable<any> {
    return this.http.get('https://mycompanys.herokuapp.com/admin/getBranches')
  }


  createReminder(title, body, UsersId): Observable<any> {
    return this.http.post('https://mycompanys.herokuapp.com/admin/SaveReminder',
      { UsersId: UsersId, title: title, body: body })
       .map((r : Response) => r.json());
  }

  //======================= user =========================
  CreateSMS(title, body): Observable<any> {
    return this.http
    .post('https://mycompanys.herokuapp.com/' + this.status + '/CreateSms',{ MessageName: title, MessasgeBody: body, Status: 'pendding' })
      .map((r : Response) => r.json());
  }
  getAllSMS(): Observable<any> {
    return this.http.get
      ('https://mycompanys.herokuapp.com/' + this.status + '/GetAllSms')
    /*.map((res) => {
     console
     .log(res);
    })*/
  }
  getAllCustomers(): Observable<any> {
    return this.http.get('https://mycompanys.herokuapp.com/'+ this.status + '/getCustomers')
    /*.map((res) => {
      if (res)
        res.json()
    })*/

  }
  createCustomer(sms, customer, name, phone, email) {
    
    
    return this.http.post('https://mycompanys.herokuapp.com/'+ this.status + '/CreateCustomer',
      { Sms: sms, customers: customer, CustomerName: name, MobileNo: phone, CustomerEmail: email })
       .map((r : Response) => r.json());
  }
  getAllMessages(): Observable<any> {
    return this.http.get('https://mycompanys.herokuapp.com/' + this.status + '/GetAllMessages')
  }

  getCurrentProf(): Observable<any> {
    return this.http.get('https://mycompanys.herokuapp.com/' + this.status + '/GetCurrProf')
  }
  SaveCampaign(campaignName, campaignText, campaign, customer): Observable<any> {
    return this.http.post('https://mycompanys.herokuapp.com/' + this.status + '/SaveCampaign',
      { CampaignName: campaignName, CampaignText: campaignText, SelectedCampaign: campaign, customers: customer })
       .map((r : Response) => r.json());
  }
  getLoginStatus() : String {
    
    let s = (JSON.parse(localStorage.getItem('currentUser'))) ;
    return s ? s['isAdmin'] ? "admin" : 'general' : ""
    
  }

  updateSmsTemplateStatus(_id,Status){
    return this.http.post('https://mycompanys.herokuapp.com/' + this.status + '/UpdateSmsTemp',
      { Status : Status , _id : _id})
       .map((r : Response) => r.json());
  }

    
  
}
