'use strict';
import './navigation.component.scss';
import { Component } from "../../core/component";

export class NavigationComponent extends Component {
    constructor( el ) {
        super( el );
        this._tabs = [];
    }

    init() {
        this.$el.addEventListener( 'click', tabClickHandler.bind( this ) );
    }

    registrationTabs( tabs ) {
        this._tabs = tabs;
    }


}

function tabClickHandler( e ) {
    e.preventDefault();
    const target = e.target;
    this.$el.querySelectorAll( '.nav-item' ).forEach( _tab => {
        _tab.classList.remove( 'active' );
    } );
    console.log(target);
    target.parentElement.classList.add( 'active' );

    const activeTab = this._tabs.find( tab => tab.name === target.name );
    this._tabs.forEach( tab => tab.component.hide() );
    activeTab.component.show();



}
