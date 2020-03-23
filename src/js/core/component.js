'use strict';

export class Component {
    constructor( el ) {
        this.$el = document.querySelector( el );
        this.init();
    }

    init() {    }


    onShow(){

    }

    onHide(){

    }

    hide() {
        this.$el.classList.add( 'hide' );
        this.onHide();
    }

    show() {
        this.$el.classList.remove( 'hide' );
        this.onShow();
    }
}

