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
[5 pts] redux structure: \
Doda??em struktur?? redux??w pod ka??dy aspekt projektu (tj. gify, podpowiedzi lokacji, themowanie (dark/regular theme), d??ugo???? prognozy (current / daily / hourly), wysy??anie zapyta?? o pogod??)

[5 pts] epics and selectors usage \
Do w/w redux??w s?? epici i selectory.

[5 pts] code structure: clear containers and components distinction && [3 pts] code style \
Podzieli??em projekty na modu??y (folder pod ka??dy z??o??ony feature ze swoim reduxem, akcjami, selectorami etc.) + folder na elementy Reacta do wy??wietlania. Dodatkowo zastanawia??em si?? nie pokroi?? pliku ze styled elements na mniejsze ale uzna??em ??e analogicznie jak typowy plik css b??dzie czytelniej i wygodniej trzyma?? je razem.
Dodatkowe projekt zawiera sp??jny i optymalny styl wci????, u??ycia ??rednik??w, klamer, funkcji zwyk??ych (elementy Reacta) i strza??kowych (wszystkie inne - mniejsze funkcjonalno??ci), u??ycia const??w i default??w,  nazewnictwa i import??w.

[5 pts] search by city \
Dodane, u??ycie przez epica w weather, feature wykorzystuje Weather API.

[5 pts] search by user geolocation \
Dodane (funkcja w LocationButton), via wbudowana funkcja JS - jak sprawdza??em funkcja mo??e nie dzia??a?? na niekt??rych wersjach starszych przegl??darek - wtedy wy??wietla si?? stosowny komunikat. (U mnie na Chromie wszystko dzia??a poprawnie).

[3 pts] forecast version switch with loader \
Wykorzysta??em do????czony do zadania framework loader.

[3 pts] nice weather classification \
Zosta??a zaimplementowana odpowiednia analiza otrzymanych wynik??w przez weather API.

[5 pts] gif support \
Po zapytaniu do Weather API zostaje wys??ane zapytanie do Tenor API o adresy URL do gif??w, kt??re nast??pnie s?? wy??wietlane na stronie.

[3 pts] gif switching \
Zosta?? dodany prosty epic przesuwaj??cy wska??nik na tablicy gif??w co 30 sekundowy interwa??.

[5 pts] light/dark mode \
Tutaj za wiele si?? nie zmieni??o po prostu przycisk zmienia stan w reduxie do themingu a nie useState.

[3 pts] search results caching \
Nast??puje zapisanie wszystk??w gif??w zwracanych przez Tenora i potem wybieranie innego co 30s, zamiast kolejnych zapyta??.

[] Autocomplete \
Projekt zawiera tak jak poprzedni system podpowiedzi do uzupe??niania nazwy lokacji.

[] Icons \
Przy wy??wietlaniu pogody z wieloma wynikami (Hourly / Daily) jako wizualizacja

