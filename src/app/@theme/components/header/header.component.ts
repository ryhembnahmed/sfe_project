import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';

import { UserData } from '../../../@core/data/users';
import { LayoutService } from '../../../@core/utils';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;

  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    /*{
      value: 'corporate',
      name: 'Corporate',
    },*/
    {
      value: 'aquamarine',
      name: 'Aqua',
    },
  ];

  currentTheme = 'default';

  userMenu = [
      { title: 'Profile', action: 'ProfileClicked()' },
      { title: 'Log out', action: 'logout()' }
  ]

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private userService: UserData,
              private layoutService: LayoutService,
              private breakpointService: NbMediaBreakpointsService,
              private _router: Router,
              private authService: NbAuthService) {
  }

  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;

    /*this.userService.getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe((users: any) => this.user = users.ryhem);*/

    this.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {
      if (token.isValid()) {
        let tokenpayload = token.getPayload()
        let username = tokenpayload['sub'].substring(0, tokenpayload['sub'].indexOf('@'));
        let connected_user = {name : username}
        this.user = connected_user;
      }
    });

    this.menuService.onItemClick().subscribe((event) => {
      if (event.item.title === 'Log out') {
        this.user = null;
        localStorage.removeItem('auth_app_token');
        this._router.navigate(['/auth/login']);
      }
    });

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }

  logout() {console.log('logout') }

}
