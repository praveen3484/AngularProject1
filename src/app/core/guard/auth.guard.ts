// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
// import { AuthService } from '../service/auth.service';

// @Injectable()
// export class AuthGuard implements CanActivate {
// constructor(private authService : AuthService, private router : Router){}
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
//     let url : string = state.url;
//       return this.checkLogin(url);
//   }
//   checkLogin(url: string): boolean 
//   {
//     if (localStorage.getItem('currentUser'))
//     {return true;}
  
//   // Store the attempted URL for redirecting
//   this.authService.redirectUrl = url;
  
//           // Navigate to the login page with extras
//           this.router.navigate(['/login']);
//           return false; 
//     }
//   }
