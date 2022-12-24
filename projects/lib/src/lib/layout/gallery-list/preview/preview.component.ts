import {ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild, OnInit} from '@angular/core';
import {v4 as uuid}                                                                                             from "uuid";
import {File, Item}                                                                                             from '../../../models';

@Component({
    selector:    'preview',
    templateUrl: './preview.component.html',
    styleUrls:   ['./preview.component.scss'],
})
export class PreviewComponent implements OnInit {
    @Input() item!: Item;
    @Input() showSize = true;
    @Output() onOpen: EventEmitter<void> = new EventEmitter();
    @ViewChild('containerElem') containerElemRef!: ElementRef;

    isInit     = false;
    identifier = uuid();

    constructor(private ref: ChangeDetectorRef) { }

    ngOnInit(): void {
        this.ref.detectChanges();
    }

    get height(): number {
        if (!this.containerElemRef) return 0;
        return this.containerElemRef.nativeElement.offsetWidth * 1.3333333333;
    }

    get containerClass(): string {
        return `preview-${this.identifier}`;
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any): void {
        this.ref.detectChanges();
    }


    onClick(): void {
        this.onOpen.emit();
    }

    get mainImage(): File | null {
        return this.item.images && this.item.images.length > 0 ? this.item.images[0]?.fields?.file : null;
    }

    get containerStyle(): any {
        return {
            backgroundImage: 'url(\'' + this.mainImage?.url + '\')',
            height:          this.height + 'px',
        };
    }
}
