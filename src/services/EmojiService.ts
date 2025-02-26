import EmojiHubApi from './Api/EmojiHubApi';

class EmojiService {

    private context: EmojiHubApi;

    constructor() {
        // Instantiate the EmojiHubApi class
        this.context = new EmojiHubApi();
    }

    async getRandomEmoji() {
        try {
            // Calling the fetchRandomEmoji method
            const emoji = await this.context.fetchRandomEmoji();
            console.log('Random Emoji:', emoji);
            return emoji;
        } catch (error) {
            // Handle the error appropriately (logging, throw, etc.)
            console.error('Error fetching random emoji:', error);
            throw new Error('Failed to fetch random emoji');
        }
    }

    async getAnimalsAndNatureEmojis() {
        try {
            // Calling the fetchRandomEmoji method
            const emoji = await this.context.fetchAnimalsAndNatureEmojis();
            console.log('Random Emoji:', emoji);
            return emoji;
        } catch (error) {
            // Handle the error appropriately (logging, throw, etc.)
            console.error('Error fetching random emoji:', error);
            throw new Error('Failed to fetch random emoji');
        }
    }
}

export default EmojiService;
