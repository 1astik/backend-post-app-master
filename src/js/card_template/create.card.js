"use strict";


export class CreateCard {
    constructor() {
        this.$fragment = document.createDocumentFragment();
    }
    createCard( {id, fulltext, time, title, type} ) {

        const card = document.createElement( 'div' );
        card.classList.add( 'card' );

        const card_body = document.createElement( 'div' );
        card_body.classList.add( 'card-body', 'elegant-color', 'white-text', 'rounded-bottom' );

        const del = document.createElement( 'a' );
        del.classList.add( 'activator', 'waves-effect', 'mr-4' );
        const em = document.createElement( 'i' );
        em.classList.add( 'fas', 'fa-share-alt', 'white-text' );
        del.append( em );
        card_body.append( del );

        const h4 = document.createElement( 'h4' );
        h4.classList.add( 'card-title' );
        h4.textContent = title;
        card_body.append( h4 );


        const hr = document.createElement( 'hr' );
        hr.classList.add( 'hr-light' );
        card_body.append( hr );


        const card_text = document.createElement( 'p' );
        card_text.classList.add( 'card-text', 'white-text', 'mb-4' );
        card_text.textContent = fulltext;
        card_body.append( card_text );


        const h5 = document.createElement( 'h5' );
        h5.textContent = '';

        const double_right = document.createElement( 'i' );
        double_right.classList.add( 'fas', 'fa-angle-double-right' );
        h5.append( double_right );
        card_body.append( h5 );

        const h6 = document.createElement( 'h6' );
        h6.textContent = time;
        card_body.append( h6 );
        card.append( card_body );

        console.log(title);
        return card
    }

    createFragment(posts) {
        posts.forEach(post => {
            this.$fragment.append(this.createCard(post));
            console.log(post);
        })
    }

    getCard(info){
        this.createFragment(info);

        return this.$fragment;
    }
}