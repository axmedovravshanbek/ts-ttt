import {makeAutoObservable} from "mobx";
import {IMenu} from "../interfaces";


class Store {
    constructor() {
        makeAutoObservable(this);
    }

    items: number[] = Array.from({length: 10});

    menu: IMenu[] = [
        {link: '/', text: 'Home', color: '#FF0266'},
        {link: '/slider', text: 'Slider', color: '#0336FF'},
        {link: '/scroll', text: 'Scroll', color: '#FFDE03'},
    ]
    game: string[] = Array.from({length: 9}, () => '');

    setGame(game: string[]) {
        this.game = game
    }

    addItems(newItems: number[]) {
        this.items = this.items.concat(newItems)
    }
}

export const xStore = new Store();