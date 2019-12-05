import React from 'react';
import ReactDOM from 'react-dom';

const webdriver = require("selenium-webdriver");

const driver = new webdriver.Builder().forBrowser("chrome").build();


class WebScraper {
    /*
    Responsible for obtaining relevant dates and times from
    Howard's calendar to sync up with deadlines and the app's
    event calendar
    */
      Configuration(){
        /*
        A class used to represent the configurations for program execution
        */
        }

      Event(){
        /*
        A class used to represent an event from the Howard University Events Calendar

        */
        }

     Scraper(){
        /*
        Basic web scraper, running off of Selenium WebDriver

        */
        }

       HUEventsCalendarScraper(){
        /*
        Web scraper for the Howard University Events Calendar

        */
        }
}

export default WebScraper;

