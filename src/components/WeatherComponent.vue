<template>
  <div class="weather">
    <v-row justify="center" no-gutters>
      <v-col lg="2" dense>
        <v-card height="450">
          <v-card-text>{{forecast["name"]}}, {{state}}</v-card-text>
          <v-card-text>{{forecast["sys"].country}}</v-card-text>

          <v-icon>{{weatherIcon(forecast["weather"][0].main)}}</v-icon>
          <v-card-text>{{forecast["weather"][0].main}}</v-card-text>
          <v-card-text>Current Temp: {{forecast["main"].temp}}F</v-card-text>
          <v-card-text>High: {{forecast["main"].temp_max}}F / Low: {{forecast["main"].temp_min}}F</v-card-text>
          <v-card-text>Humidity: {{forecast["main"].humidity}}</v-card-text>
          <v-card-text>Wind Speeds: {{forecast["wind"].speed}}</v-card-text>

          <v-btn absoluate bottom right icon @click="getCurrentWeather">
            <v-icon small>fa-sync</v-icon>
          </v-btn>
        </v-card>
      </v-col>

      <v-col lg="2" dense>
        <v-card height="450">
          <v-card-title>5 Day Forecast</v-card-title>
          <v-card-text v-for="(day, index) in fiveDayForecast" :key="index">
            {{weekDays[(index + 1 + dayIndex) % 7]}}:
            <v-icon>{{weatherIcon(day["weather"][0].main)}}</v-icon>
            {{day["main"].temp_max}}F / {{day["main"].temp_min}}F
          </v-card-text>

          <v-btn absoluate bottom right icon @click="getFutureForecast">
            <v-icon small>fa-sync</v-icon>
          </v-btn>
        </v-card>
      </v-col>
    </v-row>

  </div>

</template>

<script lang="ts">
import {Vue, Component, Watch} from 'vue-property-decorator';
import {Forecast} from '@/model/forecast';
import {FutureForecast} from '@/model/future-forecast';

@Component({})
export default class WeatherComponent extends Vue{

    private weatherKey: string = "b44a41f326e037e0a665bfe85e11b39d";
    private apiURL: string = "https://api.openweathermap.org/data/2.5";
    private city: string = "Plano";
    private state: string = "Texas";
    private forecast: Forecast = new Forecast();
    private futureForecast: FutureForecast = new FutureForecast();
    private fiveDayForecast: Forecast[] = [];

    private weatherIconArray: object = {"Clear": "fa-sun", "Clouds": "fa-cloud", "Rain": "fa-cloud-rain"};
    private weekDays: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    private dayIndex!: number;

    public created(){
      let d = new Date();
      this.dayIndex = d.getDay();

      this.getCurrentWeather();
      this.getFutureForecast();
    }

    public weatherIcon(condition: string){
      return this.weatherIconArray[condition];
    }

    public getCurrentWeather(){
      this.$http.get(`${this.apiURL}/weather?q=${this.city},${this.state}&units=imperial&appid=${this.weatherKey}`).then((result)=>{
        if(result.ok && result.data){
          this.forecast = result.data;
        } else{
          throw new Error(result.statusText);
        }
      }, (error) => {
        alert(error.body.error);
        console.log("[ERROR] getCurrentWeather - WeatherComponent - GET/" + this.city + this.state);
      });
    }

    public getFutureForecast(){
      this.$http.get(`${this.apiURL}/forecast?q=${this.city},${this.state}&units=imperial&appid=${this.weatherKey}`).then((result)=>{
        if(result.ok && result.data){
          this.futureForecast = result.data;
          this.fiveDayForecast = [];
          this.futureForecast["list"].forEach((value: Forecast, index: number) =>{
            if(index % 8 === 0){
              this.fiveDayForecast.push(value);
            }
          });
        } else{
          throw new Error(result.statusText);
        }
      }, (error) => {
        alert(error.body.error);
        console.log("[ERROR] getFutureForecast - WeatherComponent - GET/" + this.city + this.state);
      });
    }

}
</script>

<style lang="scss">
</style>
