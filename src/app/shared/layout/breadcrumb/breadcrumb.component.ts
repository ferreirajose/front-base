import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

interface Breadcrumb {
  label: string;
  url: string;
}


@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
})
export class BreadcrumbComponent implements OnInit {


  breadcrumbs: Breadcrumb[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Inicializa breadcrumbs no carregamento da página
    this.updateBreadcrumbs(this.route.root);

    // Atualiza breadcrumbs em mudanças de rota
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateBreadcrumbs(this.route.root);
      });
  }

  private updateBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Breadcrumb[] = []): void {
    const children: ActivatedRoute[] = route.children;

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      const fullPath = routeURL ? `${url}/${routeURL}` : url;

      const label = child.snapshot.data['breadCrum'];

      if (label && !breadcrumbs.some(breadcrumb => breadcrumb.label === label && breadcrumb.url === fullPath)) {
        breadcrumbs.push({ label, url: fullPath });
      }

      this.updateBreadcrumbs(child, fullPath, breadcrumbs);
    }

    this.breadcrumbs = breadcrumbs;
  }

}
