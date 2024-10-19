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

All rights belong to their respective owners.

### Neon

https://ehrpg.github.io/qstar/

Trzeba przepisać JSON Schema na https://github.com/matej21/neon-js

https://www.npmjs.com/package/to-json-schema

Źle się za to zabieram ... jeden duży NEON trzeba rozbić na mniejsze Schemy.

```yaml
$id: https://json-schema.hyperjump.io/schema
$schema: https://json-schema.org/draft/2020-12/schema
type: array
items:
  type: object
  properties:
    key:
      type: string
    value:
      anyOf:
        - type: string
        - type: object
          properties:
            _items:
              type: array
              items:
                type: object
                properties:
                  key:
                    anyOf:
                      - type: string
                      - type: number

```

```json
[
    {
        "key": "name",
        "value": "test"
    },
    {
        "key": "description",
        "value": "test"
    },
    {
        "key": "avatar",
        "value": {
            "_items": [
                {
                    "key": "male",
                    "value": "https://myhost.eu/image.webp"
                },
                {
                    "key": "female",
                    "value": "https://myhost.eu/image.webp"
                },
                {
                    "key": "awidth",
                    "value": 1
                },
                {
                    "key": "aheight",
                    "value": 1
                }
            ],
            "_indexes": {
                "male": 0,
                "female": 1,
                "awidth": 2,
                "aheight": 3
            },
            "_key": 0,
            "length": 4
        }
    },
    {
        "key": "extra",
        "value": {
            "_items": [
                {
                    "key": 0,
                    "value": {
                        "value": "heritage",
                        "attributes": {
                            "_items": [
                                {
                                    "key": 0,
                                    "value": "test"
                                }
                            ],
                            "_indexes": {
                                "0": 0
                            },
                            "_key": 1,
                            "length": 1
                        }
                    }
                },
                {
                    "key": 1,
                    "value": {
                        "value": "skills",
                        "attributes": {
                            "_items": [
                                {
                                    "key": 0,
                                    "value": "test"
                                }
                            ],
                            "_indexes": {
                                "0": 0
                            },
                            "_key": 1,
                            "length": 1
                        }
                    }
                },
                {
                    "key": 2,
                    "value": {
                        "value": "attributes",
                        "attributes": {
                            "_items": [
                                {
                                    "key": 0,
                                    "value": "test"
                                }
                            ],
                            "_indexes": {
                                "0": 0
                            },
                            "_key": 1,
                            "length": 1
                        }
                    }
                }
            ],
            "_indexes": {
                "0": 0,
                "1": 1,
                "2": 2
            },
            "_key": 3,
            "length": 3
        }
    }
]
```

```neon
name = test
description = test

avatar = [ 
male    = https://myhost.eu/image.webp
female  = https://myhost.eu/image.webp
awidth  = 1
aheight = 1
]

extra:
- heritage (
test
)
- skills (
test
)
- attributes (
test
)
```

```js
import * as neon from 'neon-js'

try {
  const neo = `
name = test
description = test

avatar = [ 
male    = https://myhost.eu/image.webp
female  = https://myhost.eu/image.webp
awidth  = 1
aheight = 1
]

extra:
- heritage (
test
)
- skills (
test
)
- attributes (
test
)
  `
  const result = neon.decode(neo)
  console.log(JSON.stringify(result.items()))
} catch (e) {
  if (e instanceof neon.Error) {
    console.log(e.message);
  }
  throw e;
}
```

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

Ale IndexedDB nie jestem pewny. Do tego będzie się teraz wyświetlać nieistotne ostrzeżenie: 
```computations created outside a `createRoot` or `render` will never be disposed```. 

Szczególnie zastanawia mnie przypadek Windowsa XP. Korzystałem z niego i wiem, że 
system lubi wyrzucać bluescreena jeśli w tle odbywa się zbyt wiele operacji jednocześnie. 
To dlatego pierwszym rozszerzeniem zwykle jest NoScript. Pytanie jest o tyle istotne, że 
Dexie zdaje się wspierać wszystko z pełnym wsparciem dla IndexedDB.

#### Dexie - mniej znnae funkcje

```js
import { add } from "dexie";

db.friends.update(friend.id, {
  hobbies: add([
    "skating",
    "football"
  ])
});
import { remove } from "dexie";

db.friends.update(friend.id, {
  hobbies: remove([
    "curling"
  ])
});
```

## Tłumaczenie

**Ta sekcja jest czysto notatkowa i gdybająca.**

Jak powszechnie wiadomo polski jest najważniejszym językiem świata. 
Wspiera odmiany przez przypadki, czas męsko- i nie-męsko- -osobowy oraz 
powtarzanie spółgłosek (nauczycielka od niemieckiego i niemka z urodzenia 
mówiła na to rolowanie czy jakoś tak).

Tymczasem język prymitywny, stworzony przez kosmitów z myślą o sztucznej inteligencji 
-- znany również jako angielski -- nie jest przygotowany na naszą gramatykę. 
To właśnie dlatego tradycyjne tłumaczenie słownikowe wygląda tak źle. Dla Google 
Tłumacza wszystkie przypadki są zamieniane na formę podstawową. Albo Crusader Kings II po polsku. 

### Emoji

Tak sobie myślę i czysto teoretycznie nie ma żadnych przeciwskazań dla użycia 
pisma obrazkowego zamiast tekstu w normalnym języku. Po dodaniu komentarzy 
co tu jest podmiotem, orzeczeniem i resztą mógłbym nawet generować polski zaawansowany.

Gdzie się podziały te czasy, gdy Unicode walczył o jak najmniejszą ilość znaków ? 
Teraz potrzebna jest cała [EmojiPedia](https://emojis.wiki/) by poznać nowo-prostacko-obrazkowy. 
Jeszcze ostatnio trafiłem na 🪝💦 jako łowienie ryb. Jeszcze trochę i przejdziemy na japoński.

Wracając, z tego co widzę mam tu czasowniki i rzeczowniki. Resztę trzeba wymusić na odbiorcy. 
Powiedzmy, że miałem tekst idę dalej. Teraz mam 🚶. Ale zamiast poszedłem ? 
🚶🌅 = 🌅🚶 Może użyję 🔙🚶, a może oznacza to zawróć ? 🚶🔜 czy 🔜🚶 ? 
Oczywiście zamiast zrobiłem X w przeszłości i teraz wpływa to na Y mam 
miliardy gender neutralnych identycznych emotek i ich wariacji z kolorami skóry. 


### Dalsza część

Niemiecki ma nie tylko odmiany ale również korzysta z nazw łacińskich: 

- Nominative = Mianownik
- Accusative = Biernik
- Genitive = Dopełniacz
- Dative = Celownik
- Instrumental = Narzędnik
- Locative = Miejscownik
- Vocative = Wołacz

Wszystkie 7 przypadków jest do odszukania w anglojęzycznym internecie. 
Teoretycznie wystarczy użyć ideologii Chata GPT, czyli wszystkie słowa 
zapisać jako **słowo-rzeczownik-męski-pojedynczy-biernik-nieformalny-emocja:smutek**. 
Tak działa DeepL. Czasem zdarza mu się zarzucać jakąś dziwną gwarą (np. 
zamiast *cargo* pisze *transport*) ale na ogół ma rację.

Tylko teraz: chcę, by plik tłumaczeń był odczytywany przez wszystkie 
urządzenia i języki programowania świata. Tak jakbym w przyszłości chciał 
przejść na androida albo grafikę 2D. Noi jeśli skorzystam z 40 letniego 
programu całość będzie wyglądać dość dziwnie i będzie wiecznie wyrzucać 
ostrzeżenia o brakujących tłumaczeniach. 

Mysłałem o po2json albo poedit.

Ale później patrzę sobie na [context-group](https://stackoverflow.com/questions/46822326/what-is-context-group-in-xliff#:~:text=The%20%3Ccontext-group%3E%20element%20holds%20context%20elements%20relating%20to,be%20named%2C%20allowing%20different%20uses%20for%20each%20group.) 
oraz alt-trans. Więcej: https://www.w3.org/International/its/wiki/XLIFF_Mapping i oficjalne https://www.oasis-open.org/committees/xliff/faq.php

XLIFF 2.1 ma niemalże zero rozszerzeń ale nie powinien być aż tak trudny w użyciu. 
Szczególnie, że istnieje *js-xml*. W podobny sposób mógłbym przenosić tłumaczenia na nowe języki programowania. 

Końcówkka: xlif2

Przykłady z: https://multilingual.com/article/201406-42.pdf
```html
 <p lang="en">He bought a yellow car. He loves yellow.</p>
```
```xliff
<unit id="1">
 <segment>
  <source>He bought a yellow car. </source>
  <target order="2">Il a acheté une voiture jaune.</
 target>
 </segment>
 <segment>
  <source>He loves yellow.</source>
  <target order="1">Il adore le jaune. </target>
 </segment>
 </unit>
```
```xml
<unit id="1">
 <segment id="1">
  <source>First sentence. </source>
  <target>Première phrase. </target>
 </segment>
 <segment id="2">
  <source>Second sentence.</source>
  <target>Deuxième phrase.</target>
 </segment>
 </unit>
```
```xlif2
 <unit id="u123">
 <mtc:matches>
  <mtc:match id="1" ref="#m1" type="mt" origin="MS
Translator-Hub" similarity="100">
   <source>He is a good friend of mine.</source>
   <target>Il est un bon ami à moi.</target>
  </mtc:match>
 <mtc:match id="2" ref="#1" type="tm" origin="myTM" 
similarity="97">
   <source>Good friends</source>
   <target>Bons amis</target>
  </mtc:match>
 </mtc:matches>
 <segment>
 <source><mrk id="m1" type="mtc:match">He is a <pc id="1" 
type="fmt">good friend</pc> of mine.</mrk></source>
 </segment>
 </unit>
```

Teoretycznie mogę dzielić zdania na mniejsze ale moja teoria wciąż jest aktualna. 
Jako oryginalne źródło muszę dać wystarczająco dużo informacji, by ktoś mógł 
powiedzmy na pierwszy rzut oka rozpoznać czas w angielskim jakiego użyć. Albo jak 
w jego języku jest 5 odmian, żeby wiedział które gdzie użyć. Bez doświadczenia 
nie jestem w stanie tego zrobić. A może ?

W każdym bądź razie XML został uśmiercony, bo za długo się w nim pisze. 
I nie określa niczego po za własnymi rozszerzeniami. Jednocześnie wymuszając 
stosowanie podstawowych zasad albo nie uruchomi się w ogóle. Po przetłumaczeniu 
na prostszy w edycji JSON uzyskam super format. 

CzytaćPóźniej:

- https://stackoverflow.com/questions/7665274/gettext-automatic-comments-generation 
- https://github.com/vslavik/poedit/issues/618
- https://github.com/vslavik/poedit/issues/752
- https://github.com/vslavik/poedit/issues/586
- VS Code -> rvanbekkum.xliff-sync
- https://github.com/locize/xliff
- https://github.com/forsatus/Xliff-AI-Translator


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

### Asciidoc(tor)

```adoc 
[Rasa]
[fizycznie]
wzrost:: 100

[umiejętności]
siła:: 100
zręczność:: 100

[zdolności]
łuk::   +50
miecz:: -50
jazda_konna::          *2
jazda_na_wielbłądzie:: /2
```

```html
<div aria-labelledby="toggle1_preview" id="editorPreview">
    <div class="dlist fizycznie">
        <dl>
            <dt>wzrost</dt>
            <dd>
                <p>100</p>
            </dd>
        </dl>
    </div>
    <div class="dlist umiejętności">
        <dl>
            <dt>siła</dt>
            <dd>
                <p>100</p>
            </dd>
            <dt>zręczność</dt>
            <dd>
                <p>100</p>
            </dd>
        </dl>
    </div>
    <div class="dlist zdolności">
        <dl>
            <dt>łuk</dt>
            <dd>
                <p>+50</p>
            </dd>
            <dt>miecz</dt>
            <dd>
                <p>-50</p>
            </dd>
            <dt>jazda_konna</dt>
            <dd>
                <p>*2</p>
            </dd>
            <dt>jazda_na_wielbłądzie</dt>
            <dd>
                <p>/2</p>
            </dd>
        </dl>
    </div>
</div>
```

Trafiłem na to przez przypadek ale to po prostu genialne. 
Najczytelniejszy format jaki widziałem, niewrażliwy na spacje/taby, obsługuje zmienne i ... waży prawie 1MB. 
Co prawda od dawien dawna wszyscy powtarzają, by nie mieszać modeli i widoków ale co się może stać ? 
Tym bardziej, że parser html jest wbudowany wszędzie i jest równie szybki co wczytywanie danych z IndexedDB.

Zgodnie z nowym planem konwerter Asciidoc jest wbudowany w GitHuba. Większość danych będzie nieruchoma 
na przykład wspomniane rasy i ich bonusy. Więc nie muszę ich parsować po stronie przeglądarki. 

Problemem będą dopiero labirynty. Mając warunki i zmienne mógłbym z łatwością przekazywać dane od serwera. 
Ale co dalej? Po stronie przeglądarki pobieram skrypt z CDN na konkretnej stronie i gotowe. 
Gdybym jednak chciał wydać wersję bez JavaScriptu to muszę napisać prosty parser rozumiejący 
1% specyfikacji. Co doprowadzi do pytań "a czemu to nie działa"? Chyba, że bym oszukiwał i program 
dzieliłby ify na osobne pliki i w odpowiedniej chwili wczytywał gotowy HTML z dysku. 

Wracając, NEON prawdopodobnie zostanie wyrzucony. A rozwój ruszy do przodu. Użytkownik generuje sobie html, 
ja przepisuję wszystkie elementy wczytujące dane na WebComponenty. Trafia to do Solida, który oczyszcza 
kod strony. Wszystkie modele biorą się z jednego miejsca. Zamiast języków ludzkich stosuję emotki i podmieniam 
z pliku XLIFF na zmienne Asciidoc.

https://blog.adrgautier.co/til-how-to-write-a-web-component-with-solidjs

### Deprecated

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

### Rasa i Klasa

Mam to w osobnej notce ale w skrócie. 

U mnie nie ma konceptu klasy. Mam za to wyuczone umiejętności 
i wiem jak ich użyć do sprawdzenia, czy moja postać ma jedną z nich. 

Wzięło się to z pytania w fazie projektowej "Czy wojownicy mogą korzystać z magii"? 
Mogłem albo użyć przedmiotu z efektem (alchemia, jednorazowe zwoje) albo zaznaczyć sobie, 
że postać X poznała najbardziej podstawowy krąg magii.

Podobnie zamiast rasy mam szablony JSON Schema wysyłane przez ludzi. Tyle że opcjonalnie 
można je napisać w NEONie. Jest tylko jedna zasada: jeśli dodajesz X do umiejętności, 
musisz zabrać tyle samo z innej. Możesz też używać mnożenia dzielenia albo procentów 
na tej samej zasadzie. Żeby dało się tego użyć dopuszczalne będzie Y punktów różnicy. 
Czyli daję +15 do walki mieczem -10 do walki łukiem i sprawdzam, ile maksymalnie 
punktów mogę przekroczyć. Jak 5 lub więcej to zostaje, jak mniej to propozycja odrzucona.

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