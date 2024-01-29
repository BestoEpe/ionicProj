import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div id="container">
      <p id='title'>Yleiskatsaus</p>
      <p id='content'>
      Ionic keskittyy mobiilisovelluksen frontendin käyttökokemukseen ja käyttöliittymän vuorovaikutukseen - käyttöliittymäkontrollit, interaktiot, eleet, animaatiot. Se on helppo oppia ja integroituu muiden kirjastojen tai kehysten kanssa, kuten Angular, React tai Vue. Vaihtoehtoisesti sitä voi käyttää itsenäisesti ilman frontend-kehystä yksinkertaisella skriptin sisällyttämisellä. Ionic on ainoa mobiilisovelluspinon, joka mahdollistaa web-kehittäjien rakentaa sovelluksia kaikkiin merkittäviin sovelluskauppoihin ja mobiiliverkkoon yhdestä koodipohjasta. Ja Adaptiivisen ulkoasun avulla Ionic-sovellukset näyttävät ja tuntuvat kotonaan jokaisella laitteella. Ionic on suunniteltu toimimaan ja näyttämään kauniilta kaikilla nykyisillä mobiililaitteilla ja alustoilla. Valmiilla komponenteilla, typografialla ja upealla perusteemalla, joka mukautuu jokaiseen alustaan, rakennat tyylikkäästi.
      </p>
      <div id='crossline'></div>
      <p id='title'>Tavoitteet</p>
      <p id='content'>Ristiinalustainen: Rakenna ja julkaise sovelluksia, jotka toimivat useilla alustoilla, kuten natiivi iOS, Android ja web Progressiivisena Web-sovelluksena - kaikki yhdellä koodipohjalla. Kirjoita kerran, toimi kaikkialla.
Web-standardipohjainen: Ionic on rakennettu luotettavien, standardisoitujen web-teknologioiden päälle: HTML, CSS ja JavaScript, käyttäen moderneja Web-rajapintoja, kuten Mukautetut elementit ja Varjodomi. Tämän ansiosta Ionic-komponenteilla on vakaat API:t eivätkä ne ole yhden alustantoimittajan mielivallan alaisia.
Kaunis suunnittelu: Ionic on suunniteltu toimimaan ja näyttämään kauniilta suoraan laatikosta kaikilla alustoilla. Aloita valmiilla komponenteilla, typografialla, vuorovaikutusparadigmoilla ja upealla perusteemalla.
Yksinkertaisuus: Ionic on rakennettu yksinkertaisuus mielessä, jotta sovellusten luominen olisi nautittavaa, helppo oppia ja saavutettavissa lähes kenelle tahansa, jolla on web-kehitystaitoja
Kehysyhteensopivuus: Ionicia voi käyttää useimmissa frontend-kehyksissä menestyksekkäästi, mukaan lukien React ja Vue, vaikka jotkut kehykset tarvitsevat täyden Web-komponenttituen saamiseksi shimmin.
Ionic CLI: Ionic CLI on työkalu, joka pikaisesti tekee Ionic-sovelluksien pohjien luomisen ja tarjoaa lukuisia hyödyllisiä komentoja Ionic-kehittäjille. Se sisältää kehityspalvelimen, rakennus- ja vianmääritystyökalut ja paljon muuta. Appflow: Appflow auttaa rakentamaan, julkaisemaan ja hallinnoimaan Ionic-sovelluksia niiden elinkaaren aikana. Se tarjoaa kaupallisen palvelun tuotantosovelluksille, joka mahdollistaa natiivien sovellusten rakenteiden kokoamisen ja elävien koodipäivitysten jakamisen keskitetystä hallintapaneelista. Ilmaisen "Harrastus" -suunnitelman lisäksi tarjolla on lisämaksullisia päivityksiä edistyneempiin toimintoihin.</p>
      <div id='crossline'></div>
      <p id='title'>Käytettävät teknologiat</p>
      <img id='logos' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png"></img>
      <img id='logos' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/768px-Angular_full_color_logo.svg.png?20160527092314"></img>
      <img id='logos' src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png?20170311074507"></img>
    </div>
  );
};

export default ExploreContainer;
