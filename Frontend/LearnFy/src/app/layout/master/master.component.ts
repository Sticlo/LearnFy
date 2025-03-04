import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-master',
  standalone: true, 
  imports: [CommonModule, RouterModule, NavbarComponent],
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent { }
