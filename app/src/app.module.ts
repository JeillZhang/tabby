import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { ToastrModule } from 'ngx-toastr'

export function getRootModule (plugins: any[]) {
    let imports = [
        BrowserModule,
        ...plugins,
        NgbModule.forRoot(),
        ToastrModule.forRoot({
            positionClass: 'toast-bottom-center',
            toastClass: 'toast',
            preventDuplicates: true,
            extendedTimeOut: 5000,
        }),
    ]
    let bootstrap = [
        ...(plugins.filter(x => x.bootstrap).map(x => x.bootstrap)),
    ]

    if (bootstrap.length === 0) {
        throw new Error('Did not find any bootstrap components. Are there any plugins installed?')
    }

    @NgModule({
        imports,
        bootstrap,
    }) class RootModule { }

    return RootModule
}
