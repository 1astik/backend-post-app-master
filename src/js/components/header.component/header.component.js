'use strict';
import './header.component.scss'
import { Component } from "../../core/component";

export class HeaderComponents extends Component{
    constructor( el ) {
        super( el );
    }
    init() {
        if ( localStorage.getItem( 'headerHide' ) ) {
            this.hide();
        }
        const startBtn = this.$el.querySelector( '.top__btn' );
        startBtn.addEventListener( 'click', startBtnClickHendler.bind( this ) );
    }
}

function startBtnClickHendler( ) {
    this.hide();
    localStorage.setItem( 'headerHide', JSON.stringify( true ) );
}
