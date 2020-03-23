"use strict";

class FirebaseService {
    constructor( url ) {
        this.url = url;
    }

    async createPost( post ) {
        try {
            const request = new Request( `${ this.url }/posts.json`, {
                method: 'post',
                body: JSON.stringify( post )
            } );
            const response = await fetch( request );
            const data = await response.json();
        } catch ( e ) {
            
        }
    }

    async getPosts() {
        try {
            const request = new Request( `${ this.url }/posts.json` );
            const response = await fetch( request );
            const data = await response.json();
            return data
        } catch ( e ) {

        }
    }
}


export const fbService = new FirebaseService( 'https://project-b5aed.firebaseio.com/' );