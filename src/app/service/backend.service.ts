import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private url:string = "http://localhost:3000/employee";
  private url_user: string = "http://localhost:3000/user";

  employees:any;
  public employee:any;
  public user_logged_In  = false;

  constructor(private http:HttpClient) { }


  //return all employees
  getEmployees()
  {
    return this.http.get(this.url)    
  }

  //return single employee

  getEmployee(id:any)
  {
    return this.http.get(this.url + "/" + id)    
  }

  //delete single employee
 deleteEmployee(id: any) {
   return this.http.delete(this.url + "/" + id)
 } 

 //update single employee
 updateEmployee(body:any):any {
  console.log(body.name)
   return this.http.put(this.url + "/" + body.id,body)
 }


 //create employee
 createEmployee(employee:any):any
 {
  return this.http.post(this.url,employee);
 }


   //return all employees
   searchEmployee(query:any)
   {
     return this.http.get(this.url + "/" + "?name=" + query)    
   }



   //user signup
   userSignup(user:any):any
   {
    return this.http.post(this.url_user,user);
   }

   //authenticate user
   loginAuth(user:any)
   {
    return this.http.get(this.url_user + "/" + "?email=" + user.email + "&" + "password=" + user.password)    
   }
  
}
