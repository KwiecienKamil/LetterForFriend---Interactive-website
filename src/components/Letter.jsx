import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import Reveal from "../Reveal";
import Typewriter from "typewriter-effect";

const Letter = () => {
  return (
    <Reveal>
      <div className="h-screen w-full flex justify-center items-center bg-gradient-to-r from-gradient1 to-gradient2 text-sm font-gummy">
        <div className="relative w-[90%] sm:w-[75%] md:w-[60%] h-[95%] bg-white px-[2%] py-[2%] text-wrap rounded-xl overflow-y-auto">
          <a
            href="/"
            className="absolute top-2 right-2 bg-red-500 text-white text-xl rounded-md px-1 py-1 z-10"
          >
            <span className="font-bold">
              <CgClose />
            </span>
          </a>

          {/* Typewriter for the Title */}
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("<h1 class='text-4xl'>Droga Paulino!<br><br></h1>")
                .pauseFor(500)
                .typeString(
                  "Piszę ten list przed naszym spotkaniem, które mam nadzieję przebiegnie bardzo dobrze. Proszę, doceń moje chęci i przymknij oko na pisownię, gdyż dobrze wiesz, że z moim polskim jest coraz gorzej. Będę wspomagał się słownikiem(jak już dobrze wiesz), ale obiecuję, że całość jest szczera i od serca, tak jak mam wrażenie, że nasza krótka znajomość jest od samego początku. W tym liście postaram się zachować powagę i używać bardziej oficjalnego słownictwa, choć nie ukrywam, że będzie to dla mnie wyzwaniem.<br><br>"
                )
                .pauseFor(500)
                .typeString(
                  "Muszę zwrócić uwagę na tę niezwykłą ilość podobieństw między nami, które odkryłem w tak krótkim czasie. Jestem tym zaskoczony, a jednocześnie zafascynowany. Z moich obserwacji wynika, że oboje jesteśmy osobami ambitnymi, niebojącymi się dążyć do swoich celów, niezależnie od przeszkód, jakie napotykamy po drodze. W tym dążeniu znajdujemy wzajemne zrozumienie i wsparcie - to, co w życiu tak trudno jest odnaleźć. Nie mogę też nie wspomnieć o naszej wspólnej miłości do psów. Nasza wrażliwość i czułość wobec zwierząt wiele mówi o naszych charakterach. Psy uczą nas lojalności, cierpliwości i bezwarunkowej miłości. To cechy, które wywołują we mnie ogromny szacunek. Nasze rozmowy o czworonogach przypominają mi, jak ważna jest dla nas obojga empatia i troska o innych.<br>"
                )
                .pauseFor(500)
                .typeString(
                  "Twoja pasja do muzyki, a zwłaszcza do gry na gitarze, jest czymś absolutnie wyjątkowym. Kiedy miałem okazję usłyszeć, jak grasz, doznałem uczucia, którego trudno mi opisać słowami. Muzyka, którą tworzysz, sprawiła, że miałem dreszcze i przez chwilę zapomniałem o wszystkim innym. Twoja muzyka otworzyła mi oczy na nowe przestrzenie we mnie samym, na myśli, które od dawna były gdzieś ukryte, a Ty, z takim zaangażowaniem i oddaniem, jakiego w życiu nie spotkałem, pokazałaś mi, czym może być prawdziwa pasja. Zachęcam Cię, byś nigdy nie przestawała grać i rozwijać tej niezwykłej umiejętności, która jest częścią Twojej duszy. Ta autentyczność i zaangażowanie są inspiracją nie tylko dla mnie, ale na pewno dla wielu ludzi, którzy mają szczęście usłyszeć Twoją muzykę.<br>"
                )
                .pauseFor(500)
                .typeString(
                  "Żyjemy w bardzo specyficznych czasach. Świat wokół nas zmienia się w zawrotnym tempie, a to, co kiedyś było stabilne i pewne, teraz często jest pełne niepokoju i niepewności. Codziennie mierzymy się z wyzwaniami, które czasem mogą przytłaczać — od natłoku informacji i technologii po nowe problemy społeczne i kulturowe. W tych czasach łatwo się zagubić, poczuć samotność czy oddalić się od prawdziwych wartości. Jednak, mimo wszystkich trudności, myślę, że mamy ogromne szczęście. Takie chwile przypominają mi, jak cenne jest poznanie kogoś, kto rozumie, inspiruje i wnosi w życie coś więcej niż tylko codzienną rutynę. Spotkanie osoby, z którą można dzielić się przemyśleniami, pasjami i czasem - to prawdziwy dar, który rzadko się zdarza. W czasach pełnych pośpiechu i powierzchownych relacji prawdziwe zrozumienie między dwojgiem ludzi jest wyjątkowym skarbem.<br><br>"
                )
                .pauseFor(500)
                .typeString(
                  "Dziękuję losowi, że mogliśmy się spotkać. Myślę, że niektóre spotkania są zapisane w naszych życiach od zawsze, jakby z góry przeznaczone. I chociaż nie znamy jeszcze całej swojej historii, to cieszę się, że mogłem Cię poznać właśnie teraz. Poznanie twojej wizji na niektóre sprawy zdecydowanie mnie zainspirowały. Czasami nie zdajemy sobie sprawy, jak wielką siłę mają te przypadkowe spotkania, które wcale nie są przypadkowe.<br><br>"
                )
                .pauseFor(500)
                .typeString("Z wyrazami wdzięczności i radości, Kamil")
                .start();
            }}
            options={{
              autoStart: true,
              delay: 40,
            }}
          />
        </div>
      </div>
    </Reveal>
  );
};

export default Letter;
