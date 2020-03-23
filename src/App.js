'use strict';

//Styles
import './main.scss'

//Components
// import { HeaderComponents } from "./js/components/header.component/header.component";
import { NavigationComponent } from "./js/components/navigation.component/navigation.component";
import { PostComponent } from "./js/components/post.component/post.component";
// import { CreateComponent } from "./js/components/create.component/create.component";
import { FavoritesComponent } from "./js/components/favorites.component/favorites.component";
import {DoneComponent} from "./js/components/done.component/done.component";

// new HeaderComponents('.top');
// const create = new CreateComponent('.create');
const post = new PostComponent('.post');
const favorites = new FavoritesComponent( '.favorites' );
const done = new DoneComponent( '.done' );
const navigation = new NavigationComponent( '.menu' );

navigation.registrationTabs( [
    { name: 'post', component: post },
    { name: 'done', component: done },
    { name: 'favorites', component: favorites },
] );


