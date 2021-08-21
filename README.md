# JNP2-Weather-App
React application that connects to the Weather API and allows for forecasts search.

# Project detailed description
Create an application that connects to the [Weather API](https://www.weatherapi.com/) and allows for forecasts search. Requirements:

- Don't use external design systems - create styled-components by yourself. Aesthetics won't be rated, only components decomposition. You can even use existing CSS (e.g., from bootstrap or material) and copy it to your components. The website doesn't have to be responsive or support mobile in any way
- Forecast search options: \
      - search forecast by city, autocomplete city name: \
        - [autocomplete API](https://www.weatherapi.com/docs/#apis-search/) \
        - [react-autocomplete](https://github.com/reactjs/react-autocomplete) (you can use the library of your choice) \
      - forecast for the [user's geolocation](https://www.w3schools.com/html/html5_geolocation.asp) (we assume that the user always accepts geolocalization access query) \
      - switch for choosing forecast option type: [Realtime data](https://www.weatherapi.com/docs/#apis-realtime) (refreshed every 15 minutes), [Daily Forecast](https://www.weatherapi.com/docs/#apis-forecast) for 3 days and [Hourly Forecast](https://www.weatherapi.com/docs/#apis-forecast)
  - results should be cached until page refresh - if a user queries for the same parameters, data should be taken from redux instead of API call
  - show loader while the search is in progress, you can use an [external library](https://github.com/mhnpd/react-loader-spinner)
  - display [weather-related icon](https://www.weatherapi.com/docs/#weather-icons)
  - display information if the weather will be nice. Nice weather attributes:
      * no rainy days
      * the average temperature between 18 and 25 degrees
      * the temperature never drops below 15 or raises above 30 degrees
      * "Nice" weather has all these attributes, "passable" weather has 2 out of 3 attributes and "not nice" weather has 1 or 0 attributes
  - display a gif depicting weather. Use [tenor gif API](https://tenor.com/gifapi/documentation#quicks)

# Project features (useState):
[3 pts] search results caching
Feature based on useState element for storing data.
It was decided that faster access to data is worth more
    that rare cases when two function add the same data to the cache.

[5 pts] search by city
Feature based on Weather API requests.

[5 pts] search by user geolocation
User geolocation obtained via in-built javaScript functions.

[3 pts] gif switching
Feature based on useEffect, gif caching and useState as React argument.

[5 pts] light/dark mode
Feature based on Styled-component styling and themes.

[5 pts] redux structure && epics and selectors usage
It was decided that in this project usage of different approach (mainly useState, useEffect and fetch()) will be better for the project.

[3 pts] forecast version switch with loader
Feature based on react-loader-spinner library and styled-components
    theming for different loader variant for each mode.

[3 pts] nice weather classification
Feature based on simple weather analysis with basic functions.

[5 pts] gif support
Feature based on Tenor Gif API.

[5 pts] code structure: clear containers and components distinction && [3 pts] code style
All work was done with most common good programming practices such as:
- Diving projects into parts - each file consist of only one functionality or react component.
- Using readable names for variable
- Coherent indentation style
- Coherent usage of semicolons (only for import, styled-component definition and constants)
- Usage of standard functions for wrapping whole (element / feature of module)
     and arrow function for everything else.

# Project features (Redux, in Polish):
[5 pts] redux structure:
Dodałem strukturę reduxów pod każdy aspekt projektu (tj. gify, podpowiedzi lokacji, themowanie (dark/regular theme), długość prognozy (current / daily / hourly), wysyłanie zapytań o pogodę)

[5 pts] epics and selectors usage
Do w/w reduxów są epici i selectory.

[5 pts] code structure: clear containers and components distinction && [3 pts] code style
Podzieliłem projekty na moduły (folder pod każdy złożony feature ze swoim reduxem, akcjami, selectorami etc.) + folder na elementy Reacta do wyświetlania. Dodatkowo zastanawiałem się nie pokroić pliku ze styled elements na mniejsze ale uznałem że analogicznie jak typowy plik css będzie czytelniej i wygodniej trzymać je razem.
Dodatkowe projekt zawiera spójny i optymalny styl wcięć, użycia średników, klamer, funkcji zwykłych (elementy Reacta) i strzałkowych (wszystkie inne - mniejsze funkcjonalności), użycia constów i defaultów,  nazewnictwa i importów.

[5 pts] search by city
Dodane, użycie przez epica w weather, feature wykorzystuje Weather API.

[5 pts] search by user geolocation
Dodane (funkcja w LocationButton), via wbudowana funkcja JS - jak sprawdzałem funkcja może nie działać na niektórych wersjach starszych przeglądarek - wtedy wyświetla się stosowny komunikat. (U mnie na Chromie wszystko działa poprawnie).

[3 pts] forecast version switch with loader
Wykorzystałem dołączony do zadania framework loader.

[3 pts] nice weather classification
Została zaimplementowana odpowiednia analiza otrzymanych wyników przez weather API.

[5 pts] gif support
Po zapytaniu do Weather API zostaje wysłane zapytanie do Tenor API o adresy URL do gifów, które następnie są wyświetlane na stronie.

[3 pts] gif switching
Został dodany prosty epic przesuwający wskaźnik na tablicy gifów co 30 sekundowy interwał.

[5 pts] light/dark mode
Tutaj za wiele się nie zmieniło po prostu przycisk zmienia stan w reduxie do themingu a nie useState.

[3 pts] search results caching
Następuje zapisanie wszystków gifów zwracanych przez Tenora i potem wybieranie innego co 30s, zamiast kolejnych zapytań.

[] Autocomplete
Projekt zawiera tak jak poprzedni system podpowiedzi do uzupełniania nazwy lokacji.

[] Icons
Przy wyświetlaniu pogody z wieloma wynikami (Hourly / Daily) jako wizualizacja

