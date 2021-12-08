export default class DataManager {

    static myInstance = null;
    userID = "";

    places= [
        {
            userid: ["user1", "user2"],
            placeid:1,
            title:"Sydney",
            category: "restaurant",
            subtitle: "The MuMu",
            description: "This restaurant is the best, you can have the best mumu in Sydney",
            image: require("../Asset/mumu_restaurant.jpg"),
        },
        {
            userid: "user1",
            placeid:2,
            title:"Tokyo",
            category: "place",
            subtitle: "Tokyo Tower",
            description: "This palce is the most famous place in Tokyo with incredible nigh view",
            image: require("../Asset/tokyo_tower.jpg"),
        },
        {
            userid: "user2",
            placeid:3,
            title:"Sydney",
            category: "place",
            subtitle: "Habour Bridge",
            description: "The you have to visit place in Top 10 of Australia, you can even climb on it",
            image: require("../Asset/habour_bridge.jpg"),
        },
        {
            userid: "user2",
            placeid:4,
            title:"Tokyo",
            category: "hotel",
            subtitle: "Aman Resorts",
            description: "This hotel can blow up your mind because of its fancy and luxury",
            image: require("../Asset/aman_tokyo.jpg"),
        }
    ]

    static getInstance(){
        if(DataManager.myInstance==null){
            DataManager.myInstance =  new DataManager();
        }
        return this.myInstance;
    }

    getUserID(){
        return this.userID;
    }


    setUserID(newUserID){
        this.userID = newUserID;
    }


    getPlaces(userID){
        return this.places.filter((place) => place.userid.includes(userID));
    }

    getPlacesByTitle(title){
        return this.places.filter((place) => place.title === title);

    }

    addPlace(place){
        this.places.push(place);
    }

    
}