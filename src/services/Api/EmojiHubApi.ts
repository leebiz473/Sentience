import {HttpClient} from './HttpClient';

export class EmojiHubApi extends HttpClient {

    category : Record<string, string> = {
        'random': '/random',
        'animals-and-nature': '/all/category/animals-and-nature',
        'food-and-drink': '/all/category/food-and-drink',
        'travel-and-places': '/all/category/travel-and-places',
        'activities': '/all/category/activities',
        'objects': '/all/category/objects',
        'symbols': '/all/category/symbols',
        'flags': '/all/category/flags',
    };

    constructor() {
        super('https://emojihub.yurace.pro/api/', {
            headers: {},
        });
    }

    fetchRandomEmoji() {
        return this.get(this.category.random);
    }

    fetchAnimalsAndNatureEmojis(){
        return this.get(this.category['animals-and-nature']);
    }

    fetchFoodAndDrinkEmojis(){
        return this.get(this.category['food-and-drink']);
    }

    fetchTravelAndPlacesEmojis(){
        return this.get(this.category['travel-and-places']);
    }

    fetchActivitiesEmojis(){
        return this.get(this.category.activities);
    }

    fetchObjectsEmojis(){
        return this.get(this.category.objects);
    }

    fetchSymbolsEmojis(){
        return this.get(this.category.symbols);
    }

    fetchFlagsEmojis(){
        return this.get(this.category.flags);
    }


}

export default EmojiHubApi;
