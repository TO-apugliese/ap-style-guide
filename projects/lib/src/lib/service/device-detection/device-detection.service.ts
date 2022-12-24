import {Injectable} from '@angular/core';

export enum DeviceType {
    TABLET = 'TABLET',
    MOBILE = 'MOBILE',
    DEKTOP = 'DESKTOP'
}

const tabletRegx = /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i;
const mobileRegx = /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/;

@Injectable()
export class DeviceDetectionService {
    private deviceType(): DeviceType {
        const ua = navigator.userAgent;

        if (tabletRegx.test(ua)) return DeviceType.TABLET;

        if (mobileRegx.test(ua)) return DeviceType.MOBILE;

        return DeviceType.DEKTOP;
    }

    get isMobile(): boolean {
        return this.deviceType() === DeviceType.MOBILE || window.document.body.clientWidth <= 600;
    }

    get isTablet(): boolean {
        return this.deviceType() === DeviceType.TABLET;
    }

    get isDesktop(): boolean {
        return this.deviceType() === DeviceType.DEKTOP;
    }
}
