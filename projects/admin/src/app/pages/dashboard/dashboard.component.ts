import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public af: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
  }

  logout () {
    this.af.signOut();
    this.router.navigateByUrl('login');

  }
}
