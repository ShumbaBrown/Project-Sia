import React from 'react';
import ReactDOM from 'react-dom';

const webdriver = require("selenium-webdriver");

const driver = new webdriver.Builder().forBrowser("chrome").build();


class WebScraper {
    /*
    Responsible for obtaining relevant dates and times from
    Howard's calendar to sync up with deadlines and the apps
    event calendar
    */
      Configuration(){
        /*
        A class used to represent the configurations for program execution
        Attributes
        ----------
        chromedriver_path : str
            the file path to the ChromeDriver executable
        headless : bool
            whether or not the ChromeDriver should run headless (w/o GUI)
        deep_scrape : bool
            whether or not the web scraper will `deep scrape` (extract additional info from individual event pages)
        start_page : int
            the page of the HU Events Calendar where the web scraper will begin scraping events
        end_page : int
            the page of the HU Events Calendar where the web scraper will stop scraping events (at bottom of page)
        all_pages : bool
            whether or not the web scraper will scrape from all pages
        export : bool
            whether or not the scraped events will be exported to an external file
        overwrite : bool
            whether or not an external file with the same name as `export_path` is allowed to be overwritten
        export_path : str
            the destination file path for the exported file
        export_extension : str
            the file type of the exported file
        print_events : bool
            whether or not scraped events will be printed to the command line
        */
        }

      Event(){
        /*
        A class used to represent an event from the Howard University Events Calendar
        Attributes
        ----------
        title : str
            the title of the event
        link : str
            a hyperlink to the event's page
        start : str
            a formatted string (MM/DD/YYYY HH:MM AM/PM UTC-OFFSET) representing the start time of the event
        end : str
            a formatted string (MM/DD/YYYY HH:MM AM/PM UTC-OFFSET) representing the end time of the event
        description : str
            description of the event
        location : str
            location of the event
        contact : dict
            contact information for the event (name of host, phone number, email)
        additional_info : dict
            additional information for the event
        */
        }

     Scraper(){
        /*
        Basic web scraper, running off of Selenium WebDriver
        Attributes
        ----------
        browser : WebDriver
            WebDriver that controls Google Chrome
        timeout : int
            number of seconds that browser will wait for the page to load before timing out (default 10 seconds)
        num_tabs : int
            number of tabs currently open in browser's Google Chrome session
        Methods
        -------
        open_url(url, class_name, new_tab=False)
            opens a url
        close_tab(close_tab_idx=-1, dest_tab_idx=-1)
            closes a tab
        quit()
            quits the WebDriver and closes the Google Chrome session
        */
        }

       HUEventsCalendarScraper(Scraper){
        /*
        Web scraper for the Howard University Events Calendar
        Attributes
        ----------
        config : Configuration
            configuration settings for the web scraper
        event_list : list
            list of events scraped from the Howard University Events Calendar
        Methods
        -------
        deep_scrape(evt)
            `deep scrape` a single event -- scrape data from that event's web page
        scrape_events()
            scrape events from the Howard University Events Calendar based upon the configuration settings
        next_page_button_exists()
            sees whether or not a next page button exists
        click_next_page_button()
            click on the next page button
        */
        }
}

export default WebScraper;
