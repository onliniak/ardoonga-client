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

## Zakres

Zdaje się, że nazywają to upośledzoną architekturą sześcianów w duchu Androidowskim. 

Mamy tu jednocześnie kod przeglądarkowy, serwer budujący aplikację oraz implementację niestandardowego protokołu Ardoonga.

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

Przyjmuje bardziej tradycyjne podejście, gdzie wiele małych plików CSS łączy się w jedną dużą klasę.

###### Picnic CSS

Obok SakuraCSS jedyny znany mi przykład tego okropnego podejścia "pobierz 1 plik i nagle wszystko jest czytelne". 
Być może nie współgra dobrze z niestandardowym gridem skopiowanym z Figmy. Być może część klas się nadpisuje mimowolnie. 
Być może za chwilę nie będę w stanie sam odczytać własnego **src\ui\scss\index.scss**. Ale lepszego sposobu na kopiowanie 
pomysłów różnych osób nie znam.

Najważniejsze, że odpowiada za te wszystkie efekty specjalne jak przesuwane tabele, tooltipsy, czy wyskakujące okienka.

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
