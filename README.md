# Ardoonga Client

## Terminal

### Install

``` npm install ```

### Test

``` npx vitest ``` or ``` npm run test ```

### Build

``` npx vite build ``` or ``` npm run build ```

### Dev Server

``` npx vite ``` or ``` docker-compose up ``` or ``` npm run start ``` or ``` npm run dev -- --host ```

## Historia

Z 8 lat temu dzięki nadludzkim umiejętnościom udało mi się stworzyć jedyną gildię, 
która zakończyła erę w jednym z klonów Vallheru. Tak nauczyłem się PHP 4/5. 
Po wielkim zwycięstwie dyskutowaliśmy sobie jak tu zmienić świat na lepsze i 
pomyślałem sobie tak: 

1. Nikt nie chce klikać w mikroskopijne linki. Pozornie pomaga ale nie rozwiązuje przyczyny.
2. W kodzie źródłowym jest mnóstwo nagłych teleportów, wyłączonych funkcjonalności i czystej magii.
   - Im częściej bawisz się w górnika, tym większa szansa na śmierć. W kodzie nic o tym nie ma.
   - Próbując wprowadzać małą zmianę możesz niechcący zepsuć coś innego.
3. Badania pokazują, że ludzie szukają czegoś gdzie można dać własne teksty + zdjęcia,
   a nie gry którą podobno można modyfikować do swoich potrzeb.
   - Pamiętam jak zastępczyni króla stwierdziła, że robiła jakieś tam zmiany w tekstach
     ale cała reszta wymaga większych umiejętności.
4. Nikt nie wie jaki jest cel tej gry. Ani jak ją wygrać.   
5. Patrząc na gry z czasów legendarnego Adobe Air i Adobe Flasha widzę dwa schematy:
   - Albo masz mało czasu na odkrycie gry, więc musisz grać po kilka razy.
   - Albo mamy pozornie szczęśliwe miejsce, które musi ulec całkowitej zagładzie ze względu na
     strukturę dowodzenia albo ideologię. MLP i Deponia też się w to wpisują.
     - Zwróć uwagę, że po oficjalnym zakończeniu kontynuacja "na siłę" doprowadza do coraz
       gorszego końca.
     - Coraz mocniej też widać, że trafiliśmy na bardzo rzadki okres, kiedy
       działo się cokolwiek ciekawego.
   - Mi się najbardziej podobają gry w stylu: wszystko chce Cię zabić, niby możesz znajdować
     kolejnych członków drużyny i NPCów w losowych miejscach ale niektórzy z nich sprawią
     więcej problemów, niż jest to warte. Albo wręcz doprowadzą do złego zakończenia.
6. Najlepiej chyba zrobić podstawowy szablon swojej gry, którą zapakuję w oryginalne teksty,
   mechaniki i grafiki z Vallheru 1.6, czy Orodlina. Pisanie rozszerzeń będzie łatwiejsze,
   a z zewnątrz będzie wyglądać niemal identycznie jak oryginał.

w XXI wieku nie chciało mi się płacić za internet 10-20 mbps. Mam więc darmowy 2G, co nieco spowalnia mi pracę.

Zresztą albo się zastanawiam jakie problemy mogą się pojawić, zamiast robić. Albo czy rzeczywiście byłbym w 
stanie zrobić dobrą historię w stylu fantasy ? W końcu czasy, kiedy losowi ludzie pisali losowe postacie i 
losowe przygody w jednym uniwersum minęły gdzieś we wczesnych latach zerowych.

Nawet gdyby to coś powstało to nikt już na mnie nie czeka. Jeszcze początkowo chciałem zrobić coś w stylu oświeconym. 
Jak w tych blogach: zrób mniejszy projekt → wyślij w CV do bylejakiej firmy → spróbuj nie umrzeć z nudów → a dalej się zobaczy. 
Teraz wiem, że posiadanie jakiejkolwiek wiedzy zmniejsza szansę przyjęcia nawet o 90%. Tylko nie mam dowodów. 
Wystarczy przynależność to światowej sekty jak: tęczowi neomarksiści, życie białych czarnoskórych nie ma znaczenia  
albo szkolne kółka zainteresowań.

Na ten moment mam:
- Prototyp zapisu/wczytania gry wieloosobowej.
- Jakieś eksperymenty z wyświetlaniem statystyk i przekazywaniem ich wtyczkom.
- Różne formy plików konfiguracyjnych.
- Eksperymenty z wykorzystaniem statystyk z Generatora map Azgaar'a.

  Albo wszystko czego potrzebowałem albo zupełnie nic w zależności jak się na to spojrzy.

## ToDo

- Mobilki: # Tutaj chcę stworzyć coś jak https://twinery.org/
  - writing-mode: sideways-rl; albo writing-mode: vertical-lr;
    - text-orientation: upright;
  - transform: rotate(0.25turn); albo transform: rotate(90deg);
- https://web.archive.org/web/20240526085357/https://minicss.us/docs.htm
- Mogę zrobić aliasy dla objektów z Nette Entity
- Spojrzeć na https://www.npmjs.com/package/eslint-plugin-project-structure i https://www.npmjs.com/package/eslint-plugin-testing-library#:~:text=ESLint%20plugin%20to%20follow%20best%20practices

### Wydajność

Generalnie sprawdzanie wydajności w testach wydaje mi się pozbawione sensu ale istnieje 
```js
//https://jestjs.io/docs/timer-mocks
jest.useFakeTimers({timerLimit: 100});
```

Origin Private Filesystem nie jest wspierany w trybie incognito. Zrobić fallback do IDB.

### Deprecated

Jako samouk mam obowiązek korzystania w pierwszej kolejności z funkcji wbudowanych 
w przeglądarkę. SolidJS jeszcze przeszło, bo sam zrobiłbym coś podobnego. Żadnych 
większych strat w rozmiarze dokumentu, czy szybkości ładowania strony.

Ale IndexedDB nie jestem pewny. Do tego będzie się teraz wyświetlać nieistotne ostrzeżenie: ```computations created outside a `createRoot` or `render` will never be disposed```. 

## Zakres

Zdaje się, że nazywają to upośledzoną architekturą sześcianów w duchu Androidowskim. 

Mamy tu jednocześnie kod przeglądarkowy, serwer budujący aplikację oraz implementację niestandardowego protokołu Ardoonga.

### Middle

Nowe strony utwórz w **src/ui/middle**. Później zamienię je automatycznie na pliki HTML o tej samej nazwie.

Jednocześnie obok ES6 dodaję CommonJS.

### onPageLoadList

src\data\onPageLoadList.js synchronizuje IndexedDB z Solid Stores.

W tym miejscu umieść wszystkie funkcje, które mają się załadować po uruchomieniu strony.

### Protokół

src/data/adapters odbiera wiadomości ze świata zewnętrznego. Protokół jest tworzony na bieżąco w [Postmanie](https://www.postman.com/). Jak powstanie stabilna wersja, to utworzę nowe repozytorium.

### Wydarzenia

src/data/eventsEmitters zwany w skrócie @/events wywołuje niestandardowe wydarzenia po otrzymaniu polecenia od adaptera.

### Komponenty

src/ui zwany w skrócie @/components zostanie dołączony do przetworzonych plików xhtml. <br /> 
**¡ Nie umieszczaj tutaj zależności serwerowych !** Tylko przeglądarkowy CSS3, XHTML5 i ES6.

Komponenty modyfikują treść po otrzymaniu niestandardowego wydarzenia.

#### SSR

Wyrzucony html zostanie dołączony do [ECR](https://crystal-lang.org/api/latest/ECR.html). 
Z tego powodu nie zajmujemy się nagłówkami serwera, czy autoryzacją.
Elementy fallback mogą korzystać z składni EJS/ERB i podobnych. 
```erb
{"<%= user.profile.name %>"}

<ul>
  {`<% users.forEach(function(user){ %>
    <%- include('user/show', {user: user}); %>
  <% }); %>`}
</ul>

{'<%%= foo %>'}
```

#### Pages

Zgodnie z konwencją ogólny szablon index.html wywołuje src/ui/index.jsx, który z kolei renderuje 
left.jsx (lewy panel), right.jsx(prawy panel) oraz środkową część z katalogu src/ui/pages/*.jsx.

#### CSS

##### CSS Modules

Domyślnie włączone, przygotowane z myślą o tym nowoczesnym stylu a´la Tailwind albo Bootstrap.

https://docs.solidjs.com/guides/styling-components/css-modules <br /> 
https://github.com/css-modules/css-modules/blob/master/docs/composition.md <br />
https://github.com/css-modules/css-modules/blob/master/docs/theming.md

```css
.base {}

/* Variants */
.normal { composes: base; /* ...  */ }
.alternate { composes: base; /* ... */ }

.normal:hover {}
```

##### SCSS

Ma bardziej tradycyjne podejście:

1. Chciałbym skorzystać z tego okropnego podejścia "pobierz jeden plik i strona od razu wygląda ładniej".
2. Pobieram więc Mini CSS ale brakuje mi przesuwanych tabelek.
3. Dodaję Picnic CSS i modlę się, by nie zepsuł mi całej strony.
4. Na zdjęciu w Figmie wszystko wyglądało nieco inaczej. Tworzę więc kilka własnych plików i łączę z Mini CSS.
5. Za chwilę zacznę się zastanawiać co zrobić z wersją mobilną.

Wszystkie pliki trzymane są w **src\ui\scss**. Widziałem już coś podobnego i na dziś wszystko jest nieczytelne. U mnie pewnie będzie podobnie.

Masz wybór albo CSS Modules albo SCSS (z tym mi się wygodniej pracuje). Dodatkowe wtyczki możemy brać z PostCSS. Kolory bierzemy z Figma's Material Theme Builder Baseline.

### Data

src/data znany również jako @/ zawiera wszystkie pliki serwerowe.

#### Decorators

W tym miejscu znajdują się wszystkie pliki, które nadpisują działanie istniejących funkcji. Na przykład chciałbym, by wygenerowany komponent został wklejony do HTML.

#### jsonSchema

Wszystkie pliki konfiguracyjne i wszystkie adaptery muszą być zgodne z określonymi tutaj regułami.

## Konfiguracja

Korzystamy z plików [neon](https://github.com/nette/neon).

Jak dla mnie format czytelny dla ludzi:

- Składa się z kilku łatwych do odróżnienia znaków.
- Nie powoduje problemów przy kopiowaniu i wklejaniu (Yaml się nie nadaje).
- Jest kompatybilny z innym szerzej stosowanym formatem plików.

Neon jest w pełni zgodny z JSON i w połowie z Yaml. Wygląda tak: 

### JSON Style

```neon
dzielnice3: [
 
biedy: [
dd
gg
(
vv = fffd
www = d
)
mm
]
 
bogata: [
hh
(ff: dd)
io
 
]]
```
```json
{
    "dzielnice2": {
        "biedy": [
            "dd",
            "gg",
            {
                "vv": "fffd",
                "www": "d"
            },
            "mm"
        ],
        "bogata": [
            "hh",
            {
                "ff": "dd"
            },
            "io"
        ]
    }
}
```

### Yaml Style

```yaml
dzielnice2:
  biedy:
    - dd
    - gg
    - vv: fffd
      www: d
    - mm
  bogata:
    - hh
    - ff: dd
    - io
```
```yaml
dzielnice1:
  biedy:
    - dd
    - gg
    - [vv: fffd, www: d]
    - mm
  bogata:
    - hh
    - ff: dd
    - io
```

## Known problems

### StackBlitz Out of memory ← Chromebook

1. Chrome → Ustawienia → Więcej narzędzi → Menedżer zadań
Zabij wszystko oprócz pierwszej pozycji, żeby wyczyścić wszystkie dane w przeglądarce.
2. Nie włączaj narzędzi deweloperskich, wybierz otwórz podgląd w nowym oknie.
Tutaj możesz spokojnie korzystać z konsoli.
3. Czyść terminal regularnie.
4. Zanim vite się nie uruchomi nie zamykaj okienka z pytaniem o instalację bota.

### NPM Permissions

1. Install Docker Desktop.
2. Run container.
3. In Docker Terminal: PS C:\Users\onliniak> docker exec -it --user=root ardoonga-client-node-1 /bin/sh
4. rm package-lock.json
5. npm cache validate
6. npm update --include=dev --verbose