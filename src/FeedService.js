

const baseURL =`https://itunes.apple.com/us/rss/topalbums/limit=100/json`;

export default class FeedService{
    getAllFeeds(){
        return fetch(baseURL).then(response => {
            return response.json();
        })  
    }
}