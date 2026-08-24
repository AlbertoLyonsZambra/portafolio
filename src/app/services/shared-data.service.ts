import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private formDataSubject = new BehaviorSubject<any>({});
  formData$ = this.formDataSubject.asObservable();

  updateFormData(data: any) {
    this.formDataSubject.next(data);
  }

  getCurrentData() {
    return this.formDataSubject.value;
  }
}