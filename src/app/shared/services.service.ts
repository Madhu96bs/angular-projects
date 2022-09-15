import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";

const httpHeaders = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  public baseURL: string = "http://localhost:3000/";

  constructor(public http: HttpClient) { }

  // Get All the Items to List
  getAllItem(){
    return this.http.get<any>(this.baseURL + "posts", httpHeaders).pipe(map((res: any) => {
      return res;
    }),
    catchError(this.handleError("Get Item", []))
    );
  }

  // Save the Item
  saveItem(req: any){
    return this.http.post<any>(this.baseURL + "posts", req, httpHeaders).pipe(map((res: any) => {
      return res;
    }),
    catchError(this.handleError("Save Item", []))
    );
  }

  // Update the Item
  updateItem(id: any, req: any){
    return this.http.put<any>(this.baseURL + "posts/" + id, req, httpHeaders).pipe(map((res: any) => {
      return res;
    }),
    catchError(this.handleError("Update Item", []))
    );
  }

  // Get the Item by Id for Edit
  getItem(id: any){
    return this.http.get<any>(this.baseURL + "posts/" + id, httpHeaders).pipe(map((res: any) => {
      return res;
    }),
    catchError(this.handleError("Get Item for Edit", []))
    );
  }

  // Delete the Item from the List
  deleteItem(id: any){
    return this.http.delete<any>(this.baseURL + "posts/" + id, httpHeaders).pipe(map((res: any) => {
      return res;
    }),
    catchError(this.handleError("Delete Item", []))
    );
  }

  // Network Error Handling
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
