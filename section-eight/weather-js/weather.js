class Weather {
    constructor(city, state) {
        this.apiKey = 'FuGjp5AITIKVbzAhzvnScsq4jAbcyMGk';
        this.city = city;
        this.state = state;

        // Accuweather uses a location key to find the condition for the current location. This can be found with the City, State, or Zip Code.
        this.locationURL = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${this.apiKey}&q=`;

        // Accuweather conditions are found with the locationKey fetched from the locationURL.
        this.conditionURL = `http://dataservice.accuweather.com/currentconditions/v1/`;
    }

    // Fetch weather from API
    async getWeather() {
        const locationFetch = await fetch(`${this.locationURL}${this.city} ${this.state}`);
        console.log(locationFetch)
        const locationKey = await locationFetch.json();
        console.log(locationKey)
        const response = await fetch(`${this.conditionURL}${locationKey[0].Key}?apikey=${this.apiKey}&details=true`);

        const responseData = await response.json();

        return {
            condition: responseData[0],
            location: locationKey[0]
        }
    }

    // Change weather location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}