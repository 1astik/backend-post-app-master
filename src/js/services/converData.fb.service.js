"use strict";


export class convertFbService {
    static convertData( data ) {
        const obj =  Object.keys(data).map(item => {
            return {
                id:item,
                ...data[item]
            }
        });
       return obj
    }
}