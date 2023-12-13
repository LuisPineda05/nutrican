import {Component, HostListener, OnInit} from '@angular/core';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatDialog} from "@angular/material/dialog";
import {sidenavMenuData} from "./sidenavMenuData";
import {RouterLink} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent implements OnInit {

  sidenavData = sidenavMenuData;
  isExpanded = true;

  constructor(private dialog: MatDialog) { }

@HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkWindowSize();
  }
  ngOnInit(): void {

    this.checkWindowSize();
  }

private checkWindowSize(): void {
    this.isExpanded = window.innerWidth > 1800; // Cambia isExpanded a false si el ancho es menor o igual a 800px
  }

  protected readonly RouterLink = RouterLink;
}
