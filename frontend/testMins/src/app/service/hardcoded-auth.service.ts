import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthService {

  constructor() { }

  authenticate(username, password){
    if(username === 'deadboy' && password === 'azerty'){
      return true
    }
    return false
  } 
}
