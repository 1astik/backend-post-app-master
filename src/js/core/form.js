'use strict';

export class Form {
    constructor( form, inputs ) {
        this.form = form;
        this.inputs = inputs;
    }

    _inputsValues() {
        const value = {};
        Object.keys( this.inputs ).forEach( inputVal => {
            value[ inputVal ] = this.form[ inputVal ].value;
        } );
        return value;
    }
}
