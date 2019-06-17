class UI {
    constructor() {
        // Accuweather URL for Icons
        this.weatherIconURL = `https://developer.accuweather.com/sites/default/files/`;
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
    }
    paint(weather) {
        console.log("weather: ",weather);
        let degree = '°';
        this.location.textContent = weather.location.LocalizedName + ', ' + weather.location.AdministrativeArea.LocalizedName;
        this.desc.textContent = weather.condition.WeatherText;
        // Display both Imperial and Metric temperatures.
        this.string.textContent = `${weather.condition.Temperature.Imperial.Value} ${degree}${weather.condition.Temperature.Imperial.Unit} / ${weather.condition.Temperature.Metric.Value} ${degree}${weather.condition.Temperature.Metric.Unit} `;

        // Check if the number is less than 10. If it is then add a zero in front to match with the image file name from Accuweather.
        let zeroNumber = (weather.condition.WeatherIcon < 10 ? '0' : '') + weather.condition.WeatherIcon;
        this.icon.setAttribute('src', `${this.weatherIconURL}${zeroNumber}-s.png`);

        this.humidity.textContent = `Relative Humidity: ${weather.condition.RelativeHumidity}%`;

        // Display both Imperial and Metric RealFeelTemperature.
        this.feelsLike.textContent = `Feels Like: ${weather.condition.RealFeelTemperature.Imperial.Value} ${degree}${weather.condition.RealFeelTemperature.Imperial.Unit} / ${weather.condition.RealFeelTemperature.Metric.Value} ${degree}${weather.condition.RealFeelTemperature.Metric.Unit}`;
        // Display both Imperial and Metric Dew Points.
        this.dewpoint.textContent = `Dew Point: ${weather.condition.DewPoint.Imperial.Value} ${degree}${weather.condition.DewPoint.Imperial.Unit} / ${weather.condition.DewPoint.Metric.Value} ${degree}${weather.condition.DewPoint.Metric.Unit}`;

        // Wind speed, degree, direction.
        this.wind.textContent = `Wind: ${weather.condition.Wind.Speed.Imperial.Value} ${weather.condition.Wind.Speed.Imperial.Unit}, ${weather.condition.Wind.Direction.Degrees}${degree}${weather.condition.Wind.Direction.Localized} / ${weather.condition.Wind.Speed.Metric.Value} ${weather.condition.Wind.Speed.Metric.Unit}, ${weather.condition.Wind.Direction.Degrees}${degree}${weather.condition.Wind.Direction.Localized}`;


    }
}