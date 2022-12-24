import {Component, Input, OnInit}                      from '@angular/core';
import {DescriptionContent, Fragment, Item, NodeTypes} from '../../models';
import {BaseComponent, waitFor}                        from '../../shared';

;

const typeToTag = new Map<NodeTypes, (data: Fragment) => string>([
    [
        'paragraph',
        (data: Fragment) => `<p>${data.value}</p>`,
    ],
    [
        'bold',
        (data: Fragment) => `<b>${data.value}</b>`,
    ],
    [
        'hyperlink',
        (data: Fragment) => {
            const text = data.content[0].value;
            const url  = data.data.uri;

            return `<a href="${url}">${text}</a>`;
        },
    ],
]);

const resolveWithTypeHandler = (fragment: Fragment) => {
    const mark    = !!fragment.marks && fragment.marks.length > 0 ? fragment?.marks[0]?.type : 'none';
    const handler = typeToTag.get(fragment.nodeType) || typeToTag.get(mark);

    return handler ? handler(fragment) : fragment.value;
};

@Component({
    selector:    'ap-gallery-list',
    templateUrl: './gallery-list.component.html',
    styleUrls:   ['./gallery-list.component.scss'],
})
export class GalleryListComponent extends BaseComponent<any, any> implements OnInit {
    @Input() type!: string;
    @Input() showOrderButton = true;
    @Input() showSize        = true;
    selectedItem!: Item | null;
    inDetailView             = false;

    items!: Item[];

    constructor() {
        super();
    }

    async ngOnInit(): Promise<void> {
        await waitFor(() => !!this.contentSrv);

        this.items = (await this.contentSrv.getContent(this.type))
            .map(content => ({...content, descriptionAsHtml: this.descriptionAsHtml(content.description)}));
    }

    async select(item: Item): Promise<void> {
        this.selectedItem = item;
        window.scrollTo({top: 0, behavior: 'smooth'});


        await waitFor(() => window.scrollY === 0);

        this.inDetailView = true;
    }

    unselect(): void {
        this.inDetailView    = false;
        window.location.hash = '';
    }

    descriptionAsHtml(item: DescriptionContent): string {
        return item.content.map((row: Fragment) => {
            const content = row.content.map((col: Fragment) => {
                col.value = col.value
                    ? col.value
                        .split(/\n/g)
                        .join('<br>')
                    : col.value;

                return resolveWithTypeHandler(col);
            }).join('');

            return resolveWithTypeHandler({value: content} as Fragment);
        }).join('<br><br>');
    }

    get orderedItems(): Item[] {
        return this.items ? this.items.sort((a, b) => a.order - b.order) : [];
    }
}
