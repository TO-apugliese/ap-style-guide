import {InjectionToken} from '@angular/core';
import {BasePages}      from '../pages/base-pages';

interface CmsConfig {
    space: string;
    accessToken: string;
    openKeyCombination: string[];
}

interface NavigationConfig<Pages> {
    defaultPage: Pages | null | undefined;
    orderPage: Pages | null | undefined;
    mainNavItems: Pages[] | BasePages[];
    subNavItems: Pages[]| BasePages[];
}

interface Address {
    name: string;
    city: string;
    zip: string;
    street: string;
    country: string;
}

interface SocialPlatform {
    name: string;
    link: string;
}
interface OwnerConfig {
    email: string;
    phone: string;
    website: string;
    address: Address;
    instagram?: SocialPlatform;
    facebook?: SocialPlatform;
    twitter?: SocialPlatform;
}

export interface ApplicationConfig<Pages> {
    logoUrl?: string;
    title: string;
    cmsConfig: CmsConfig;
    navigationConfig: NavigationConfig<Pages>;
    ownerConfig: OwnerConfig;
}

export const applicationConfigToken = new InjectionToken('application-config');

