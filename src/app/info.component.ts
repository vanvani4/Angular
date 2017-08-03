import { Component } from '@angular/core';

@Component({
    selector: 'app-info',
    templateUrl: `./info.component.html`,
    styleUrls: [`./info.component.css`]
})
export class InfoComponent {
    info = `Администрация морских портов Украины (АМПУ)  – 
    одно из крупнейших государственных предприятий, имеющее 
    стратегическое значение для экономики и безопасности Украины.`
}