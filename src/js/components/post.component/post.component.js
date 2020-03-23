'use strict';
import './post.component.scss';

import { Component } from "../../core/component";
import {fbService} from "../../services/fb.api.service";
import {convertFbService} from "../../services/converData.fb.service";
import {CreateCard} from "../../card_template/create.card";

const createCard = new CreateCard();

export class PostComponent extends Component{
    constructor( el ) {
        super( el );


    }

    init() {
        // this.$el.addEventListener('click',)

    }

    async onShow() {
        const data = await fbService.getPosts();
        const posts = convertFbService.convertData(data);
        const cards = createCard.getCard(posts);

        await this.$el.append(cards);
    }



}
