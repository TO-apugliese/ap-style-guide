import {Inject, Injectable}                        from '@angular/core';
import {Router}                                    from '@angular/router';
import {ApplicationConfig, applicationConfigToken} from '../../shared/application-config';
import {BasePages}                                 from '../../pages/base-pages';

export interface NavItem {
    name: string;
    url: string;
}

@Injectable()
export class NavigationService<Pages> {

    constructor(
        private router: Router,
        @Inject(applicationConfigToken) private navConfig: ApplicationConfig<Pages>,
    ) { }

    get currentPage(): Pages {
        const url = this.router.url;
        if (!url) return this.navConfig.navigationConfig.defaultPage as unknown as Pages;

        return url
            .split('?')[0]
            .replace('/', '')
            .toLowerCase() as unknown as Pages;
    }

    get mainNavItems(): NavItem[] {
        return this.navConfig.navigationConfig.mainNavItems
            .map(this.mapToNavItem);
    }

    get subNavItems(): NavItem[] {
        return this.navConfig.navigationConfig.subNavItems
            .map(this.mapToNavItem);
    }

    goTo(page: Pages): void {
        this.router.navigateByUrl(`/${page}`);
    }

    private mapToNavItem(page: Pages | BasePages): NavItem {
        return {
            name: `navigation.${page}`,
            url:  `/${page}`,
        };
    }
}