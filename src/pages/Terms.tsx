const Terms = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">AGB</h1>
      
      <section className="prose dark:prose-invert max-w-none">
        <h2>Impressum</h2>
        <p>
          Kristian Munsche<br />
          Gleimstraße 12<br />
          10437 Prenzlauer Berg<br />
          Deutschland
        </p>

        <h2>1. Geltungsbereich</h2>
        <p>
          Diese Allgemeinen Geschäftsbedingungen gelten für alle gegenwärtigen und zukünftigen Geschäftsbeziehungen zwischen
          Kristian Munsche (nachfolgend "Anbieter") und den Nutzern der KI-gestützten Tattoo-Design-Plattform (nachfolgend "Nutzer").
        </p>

        <h2>2. Vertragsgegenstand</h2>
        <p>
          2.1. Der Anbieter betreibt eine Online-Plattform zur KI-gestützten Erstellung von Tattoo-Designs.<br />
          2.2. Die Plattform ermöglicht es Nutzern, mittels künstlicher Intelligenz personalisierte Tattoo-Designs zu erstellen.<br />
          2.3. Der Anbieter stellt die technische Infrastruktur und die KI-Technologie zur Verfügung.
        </p>

        <h2>3. Nutzungsrechte und Verantwortung</h2>
        <p>
          3.1. Die durch die Plattform generierten Designs sind ausschließlich für den persönlichen Gebrauch bestimmt.<br />
          3.2. Mit der Erstellung erhält der Nutzer ein nicht-exklusives, nicht übertragbares Nutzungsrecht an den generierten Designs.<br />
          3.3. Eine kommerzielle Nutzung der Designs bedarf der ausdrücklichen schriftlichen Zustimmung des Anbieters.<br />
          3.4. Der Nutzer ist allein verantwortlich für die von ihm eingegebenen Prompts und die daraus resultierenden Designs.<br />
          3.5. Der Nutzer stellt den Anbieter von allen Ansprüchen Dritter frei, die aus der Nutzung der generierten Designs entstehen.
        </p>

        <h2>4. Haftungsausschluss</h2>
        <p>
          4.1. Der Anbieter übernimmt keine Garantie für die Einzigartigkeit der generierten Designs.<br />
          4.2. Die Nutzung der generierten Designs als Tattoo-Vorlage erfolgt auf eigenes Risiko des Nutzers.<br />
          4.3. Der Anbieter haftet nicht für Schäden, die aus der Nutzung der Designs entstehen.<br />
          4.4. Der Anbieter übernimmt keine Haftung für die Art und Weise, wie generierte Designs Personen, Ereignisse oder Beziehungen darstellen.<br />
          4.5. Der Anbieter haftet nicht für etwaige Ähnlichkeiten der generierten Designs mit existierenden Werken, Personen oder Marken.<br />
          4.6. Jegliche Haftung für die Verwendung der generierten Designs durch den Nutzer wird ausgeschlossen, soweit gesetzlich zulässig.
        </p>

        <h2>5. Preise und Zahlungsbedingungen</h2>
        <p>
          5.1. Die Nutzung der Plattform erfolgt gemäß der aktuellen Preisliste.<br />
          5.2. Alle Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer.<br />
          5.3. Die Zahlung erfolgt im Voraus über die angebotenen Zahlungsmethoden.
        </p>

        <h2>6. Datenschutz</h2>
        <p>
          Die Erhebung und Verarbeitung personenbezogener Daten erfolgt gemäß unserer Datenschutzerklärung, die unter dem
          entsprechenden Link eingesehen werden kann.
        </p>

        <h2>7. Schlussbestimmungen</h2>
        <p>
          7.1. Es gilt das Recht der Bundesrepublik Deutschland.<br />
          7.2. Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.<br />
          7.3. Gerichtsstand ist Berlin, soweit der Nutzer Kaufmann ist.
        </p>

        <p className="text-sm mt-8">
          Stand: {new Date().toLocaleDateString('de-DE')}
        </p>
      </section>
    </div>
  );
};

export default Terms; 