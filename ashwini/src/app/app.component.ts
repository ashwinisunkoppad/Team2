import { Component, ViewEncapsulation, Inject, ViewChild } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { SelectEventArgs } from '@syncfusion/ej2-angular-lists';

@Component({
    selector: 'app-root',
    styleUrls: ['app.component.css'],
    templateUrl: 'app.component.html',
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild('sidebarInstance', { static: true })
    public sidebarInstance: SidebarComponent;
    public width: string = '250px';
    public type: string = 'Over';
    public dataList: { [key: string]: Object }[] = [
        { text: 'Home' },
        { text: 'About' },
        { text: 'Careers' },
        { text: 'FAQs' },
        { text: 'Blog' },
        { text: 'Uses' },
        { text: 'Contact' }
    ];
    public fields: Object = { tooltip: 'text' };
    constructor( ) {

    }

    // open new tab
    newTabClick(): void {
        let URL = location.href.replace(location.search,'');
        document.getElementById('newTab').setAttribute('href', URL.split('#')[0] + 'sidebar/sidebar-list');
    }
    // Listview select event handler
    onSelect(args: SelectEventArgs) {
        this.sidebarInstance.hide();
        document.getElementsByClassName('textArea')[0].innerHTML =args.text+ " Page Content";
    }

    openClick() {
        this.sidebarInstance.show();
    }
    closeClick() {
        this.sidebarInstance.hide();
    }
};
