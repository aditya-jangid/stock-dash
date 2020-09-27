import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/MA', title: 'MASTERCARD', icon: 'https://s3-symbol-logo.tradingview.com/mastercard.svg', class: '' },
  { path: '/ADBE', title: 'ADOBE', icon: 'https://s3-symbol-logo.tradingview.com/adobe.svg', class: '' },
  { path: '/USDJPY', title: 'USDJPY', icon: 'https://s3-symbol-logo.tradingview.com/country/US.svg' , class: '' },
  { path: '/VIX', title: 'VIX', icon: 'https://s3-symbol-logo.tradingview.com/country/US.svg', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
