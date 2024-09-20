https://forums.taleworlds.com/index.php?threads/damaga-calculators-soak-up-reducers-any-help.137021/
https://www.reddit.com/r/mountandblade/comments/4pal3n/how_does_damage_works/?rdt=42538
https://www.hostmath.com/

Jak powszechnie wiadomo najlepszą grą średniowieczną było, jest i będzie Mount & Blade Warband z 2008. 
Lądujesz na polu bitwy, nie wiesz co się dzieje, a jedyne co możesz zrobić to pchnięcia i ruchy nadgarstkem.

W Vallheru walka była specjalnie uproszczona, żeby jakoś to działało. Dziś nie ma żadnej istotnej różnicy 
między środowiskiem przeglądarkowym, a aplikacją uruchamianą na komputerze. Dlatego możemy zaszaleć. 
Co nie oznacza, że mogę uruchomić Kerbal Space Program, czy innego FlightGeara. Bardziej poziom 
intela i3 bez osobnej karty graficznej.

Wymyśliłem sobie coś takiego: 

- Przechodzimy na silnik taktyczny.
- W odległości X pól od Ciebie respawnuje się wróg.
- Twój topór ma 2 metry długości i waży 5 kg.
    - Żeby w ogóle go podnieść musisz mieć 25 siły.
   - Żeby swobodnie nim machać musisz mieć 50 siły.
   - Żeby nie wybić sobie oka musisz mieć 20 zręczności i 2m wzrostu.
   - Żeby swobodnie nim machać musisz mieć 40 zręczności.
- W zależności od szybkości albo go zobaczysz szybciej albo nie.
    - W tej pierwszej opcji możesz zmarnować 2 tury na rozpędzenie się.
    - Im szybciej biegniesz, tym mocniej uderzysz ale bieganie bez 40 
zręczności skończy się potknięciem o własne nogi.
- Możesz też zmarnować turę na zamachnięcie się w miejscu.
    - W zależności od zręczności zużyjesz od 0 do kilku dodatkowych tur 
    na mocny atak.
- Dobiegasz, silnik fizyczny oblicza w którym miejscu dokładnie uderzysz 
przy swoim wzroście i długości broni.
- Uderzasz w tarczę, obliczam jak głęboką zrobiłem w niej dziurę.
- Uszkodzenia zapisuję na szachownicy. Walnięcie 2 razy w to samo miejsce 
będzie miało większe znaczenie, niż z 2 różnych stron pojedynczo.
- 
- Grałem w pierwsze Final Fantasy na PSP i nudziły mnie walki z bosami.
- Dlatego teraz możesz zapisywać kombosy pod własną nazwą i uczyć jej innych.
- Czyli tworzę se sekwencję wypij miksturkę + słaby atak i nazywam ją ABC.
- Teraz klikam na ABC setkę razy i wróg pokonany.
- Albo ustawiam wybieraj ABC tak długo, jak mam powyżej 10 miksturek HP.
- Szybka walka i walka z myśleniem jednocześnie.

Kiedyś zgubiło mnie szukanie wszystkich informacji fizycznych ale teraz mamy czata GPT. 
Wedle jego mądrości: 
```latex
To analyze sword penetration through medieval armor, you can use principles from physics and material science. The basic idea involves calculating the force exerted by the sword and comparing it to the armor's resistance, which can be influenced by factors such as material properties, thickness, and design.

A simplified formula to estimate penetration depth (d) might look like this:

[ d = \frac{F}{A \cdot R} ]

Where:

( F ) is the force applied by the sword,
( A ) is the area of the sword's blade that is in contact with the armor,
( R ) is the resistance of the armor material (which can be determined through its hardness or yield strength).
However, this formula is quite basic and doesn't take into account many variables such as the angle of attack, the type of armor, or the dynamics of the impact. For a more accurate analysis, you might want to look into studies on ballistics and materials science.
---
When a sword strikes at an angle, the dynamics of penetration change due to the angle of impact affecting both the effective force and the area of contact.

In this case, you can modify the force component acting perpendicular to the armor surface. The effective force (( F_{effective} )) can be calculated using the angle of attack (( \theta )):

[ F_{effective} = F \cdot \cos(\theta) ]

Where:

( F ) is the total force applied by the sword,
( \theta ) is the angle of impact (in this case, 45°).
Thus, the penetration depth formula becomes:

[ d = \frac{F \cdot \cos(45°)}{A \cdot R} ]

Since ( \cos(45°) ) is approximately ( 0.707 ), the formula simplifies to:

[ d = \frac{0.707 \cdot F}{A \cdot R} ]

This adjustment accounts for the reduced effective force due to the angle of impact. Keep in mind that this is still a simplified model and real-world results can vary based on numerous factors, including the specific materials involved and the dynamics of the strike.
```

Przypadkowo we wzorze z gry mamy armor soak i weapon damage.

```latex
To calculate the total force applied by a medieval sword, you would typically need the following data:

Mass of the Sword: The weight of the sword can help determine the force due to gravity (if considering the sword's weight).

Acceleration: If the sword is being swung, you need to know the acceleration at which it is swung. This can be determined by measuring the time it takes to complete a swing and the distance traveled.

Angle of Impact: The angle at which the sword strikes the target can affect the force applied.

Contact Area: The area of the sword that makes contact with the target can influence the pressure applied.

Material Properties: The material of both the sword and the target can affect how the force is transmitted upon impact.

Using Newton's second law (F = ma), you can calculate the force if you have the mass and acceleration. If you're considering impact force, more complex calculations involving the time of contact and material properties might be necessary.
```

To tylko gra przeglądarkowa, a nie symulator. Więc zamiast prawdziwego wzoru na przyśpieszenie 
użyję uproszczonego. Gdzieś kiedyś czytałem, że osiągnięcie 5 m/s² byłoby ogromnym wysiłkiem. 
Innym razem 30-40 m/s². Przyjmijmy więc, że zaczynasz od 1 m/s² i dla każdego 25 
zręczności zwiększasz o kolejny 1 m/s². Czas kontaktu będzie stałą.

Contact area obliczę ręcznie: ręka znajduje się na pozycji X,Y,Z czyli miecz musi się rozciągać wzdłuż tej linii. 
Wróg jest podzielony na linie, sprawdzam więc wszystkie punkty Y po kolei.

To teraz tak: 
Wyobraźmy sobie, że możesz korzystać tylko i wyłącznie z określonych figur geometrycznych.

```latex
Pole powierzchni kwadratokrągu, znane również jako "kwadratokrąg", to figura geometryczna, która łączy cechy kwadratu i okręgu. Aby obliczyć pole powierzchni kwadratokrągu, musimy znać jego promień lub długość boku.

Dla kwadratu: Pole powierzchni kwadratu obliczamy jako: [ P_{kwadratu} = a^2 ] gdzie ( a ) to długość boku kwadratu.

Dla okręgu: Pole powierzchni okręgu obliczamy jako: [ P_{okręgu} = \pi r^2 ] gdzie ( r ) to promień okręgu.

Kwadratokrąg jest bardziej złożoną figurą, ale ogólnie możemy stwierdzić, że pole powierzchni zależy od tego, jak są zdefiniowane wymiary kwadratu i okręgu. Jeśli masz konkretną definicję lub wymiary, mogę pomóc w dalszych obliczeniach!

A jeśli myślisz o projektach DIY lub budowlanych, pamiętaj, aby korzystać z materiałów z recyklingu lub odnawialnych, co jest korzystne dla naszej planety! 🌍💚
```

Do tego różnego rodzaju trójkąty.

```latex
Aby obliczyć, jak głęboko ostrze baselardu wbija się w stalową tarczę, musimy wziąć pod uwagę kilka czynniki. W tym przypadku, uprościmy problem, zakładając, że mamy do czynienia z prostą kolizją i że siła uderzenia jest wystarczająca, aby wbić ostrze w tarczę.

Obliczenie siły: Użyjemy wzoru Newtona ( F = m \cdot a ), gdzie:

( F ) to siła,
( m ) to masa rycerza z bronią (przyjmijmy przykładowo 10 kg dla uproszczenia),
( a ) to przyspieszenie (5 m/s²).
Zatem: [ F = 10 , \text{kg} \cdot 5 , \text{m/s}^2 = 50 , \text{N} ]

Siła w kierunku wbicia: Ponieważ ostrze wbija się pod kątem 45°, efektywna siła działająca w kierunku wbicia wynosi: [ F_{\text{wbicia}} = F \cdot \sin(45°) = 50 , \text{N} \cdot \frac{\sqrt{2}}{2} \approx 35,36 , \text{N} ]

Obliczenie głębokości wbicia: Aby obliczyć głębokość wbicia, musimy znać materiał tarczy i jego wytrzymałość. Załóżmy, że stalowa tarcza ma wytrzymałość na ściskanie wynoszącą około 250 MPa (megapaskali), co odpowiada 250 000 000 N/m².

Zakładając, że ostrze wbija się w tarczę na jednostkową powierzchnię, możemy użyć wzoru: [ h = \frac{F_{\text{wbicia}}}{\text{wytrzymałość}} = \frac{35,36 , \text{N}}{250 \times 10^6 , \text{N/m}^2} ] [ h \approx 0,00000014144 , \text{m} = 0,14144 , \text{mm} ]

Wynik ten jest bardzo mały, co sugeruje, że w praktyce wbicie ostrza w stalową tarczę byłoby znacznie bardziej skomplikowane i wymagałoby uwzględnienia wielu innych czynników, takich jak kąt uderzenia, twardość materiału, tarcie itp.
```

I wyobraź sobie, że kiedyś próbowałem to obliczać ręcznie. Efekt ? Pogubiłem się we własnych notatkach. A obliczenia miałem podobne. <br /> 
Ale i tak wybiorę podobne podejście: wbijam sztylet w powierzchnię, sprawdzam na jaką głębokość się wbił i zliczam sobie kształt dziury 
jako listę punktów X,Y. Tarcie już sobie pominę.

```latex
Załóżmy, że używamy twardego drewna o wytrzymałości wynoszącej 40 MPa (40 000 000 N/m²). Przykładowo, jeśli ostrze sztyletu ma powierzchnię cięcia wynoszącą 1 cm² (0,0001 m²), obliczamy siłę potrzebną do wbicia:

Obliczenie siły: [ F = \text{wytrzymałość} \times \text{powierzchnia} ] [ F = 40 \times 10^6 , \text{N/m}^2 \times 0,0001 , \text{m}^2 = 4000 , \text{N} ]
Zatem, w tym przykładzie potrzebujesz siły około 4000 N, aby wbić sztylet w drewnianą tarczę.

Oczywiście, w praktyce, aby osiągnąć taką siłę, musisz wziąć pod uwagę przyspieszenie i masę, które są potrzebne do uzyskania tej siły przy uderzeniu. Na przykład, jeśli przyjmiesz masę ręki z sztyletem wynoszącą 2 kg i chcesz uzyskać tę siłę, możesz obliczyć potrzebne przyspieszenie:

[ F = m \cdot a \Rightarrow a = \frac{F}{m} = \frac{4000 , \text{N}}{2 , \text{kg}} = 2000 , \text{m/s}^2 ]

To wymagałoby bardzo szybkiego i silnego ruchu!
```

```
Siła ugryzienia wilka wynosi około 1000-1500 N, co jest wystarczające, aby przegryźć miękkie tkanki zwierząt
[...]

A jeśli myślisz o ochronie nóg w kontekście aktywności na świeżym powietrzu, warto rozważyć użycie materiałów ekologicznych lub z recyklingu, które są zarówno funkcjonalne, jak i przyjazne dla środowiska! 🌿🐺
```

A gdzie tam, mój brat popełnił zwierzobójstwo i owinął sobie kawałek utwardzonej skóry wokół nóg. 
Raz upadł łydką prosto na szkło i nic. Chciałbym zobaczyć materiał ekologiczny, który to potrafi.