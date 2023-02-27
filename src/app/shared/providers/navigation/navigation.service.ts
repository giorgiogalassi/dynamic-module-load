import {Location} from '@angular/common';
import {Injectable} from '@angular/core';
import {Event, NavigationEnd, Router} from '@angular/router';

import {filter, Observable, Subject, tap} from 'rxjs';

@Injectable()
export class NavigationService {
  private history: string[] = [];
  private mirrorRouterEvents$: Subject<Event> = new Subject<Event>();

  constructor(private router: Router, private location: Location) {
    this.router.events
      .pipe(
        tap((event) => this.mirrorRouterEvents$.next(event)),
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe((event) => this.history.push((event as NavigationEnd).urlAfterRedirects));
  }

  go(path: string): void {
    this.router.navigate([path], {queryParamsHandling: 'preserve'});
  }

  back(): void {
    this.history.pop();

    if (this.history.length > 0) this.location.back();
    else this.router.navigate([''], {queryParamsHandling: 'preserve'});
  }

  listenForRouterEvents(): Observable<Event> {
    return this.mirrorRouterEvents$.asObservable();
  }
}
