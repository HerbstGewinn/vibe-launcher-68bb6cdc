const Disclaimer = () => {

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Haftungsausschluss</h1>
      
      <section className="prose dark:prose-invert max-w-none">
        <h2>Haftungsausschluss (Disclaimer)</h2>
        
        <p>
          Kristian Munsche<br />
          Gleimstraße 12<br />
          10437 Prenzlauer Berg<br />
          Deutschland
        </p>

        <h2>1. Inhalt des Onlineangebotes</h2>
        <p>
          1.1. Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt erstellt. Der Anbieter übernimmt jedoch
          keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte.<br /><br />
          
          1.2. Die durch unsere KI-Technologie generierten Designs sind Vorschläge und künstlerische Interpretationen.
          Eine Garantie für die Einzigartigkeit oder rechtliche Unbedenklichkeit der Designs kann nicht übernommen werden.
        </p>

        <h2>2. Haftungsbeschränkung</h2>
        <p>
          2.1. Die Nutzung der generierten Designs als Tattoo-Vorlagen erfolgt auf eigenes Risiko. Der Anbieter haftet
          nicht für eventuelle negative Folgen der Verwendung der Designs.<br /><br />
          
          2.2. Für Schäden, die durch die Nutzung oder Nichtnutzung der angebotenen Informationen entstehen, haftet der
          Anbieter nur, soweit ihm Vorsatz oder grobe Fahrlässigkeit nachgewiesen werden kann.
        </p>

        <h2>3. KI-generierte Inhalte</h2>
        <p>
          3.1. Die von unserer Plattform generierten Designs werden durch künstliche Intelligenz erstellt. Wir können
          nicht garantieren, dass diese Designs:<br />
          • Keine Ähnlichkeit mit existierenden Werken aufweisen<br />
          • Frei von Rechten Dritter sind<br />
          • Für alle Arten von Tätowierungen geeignet sind<br />
          • Keine Ähnlichkeiten mit realen Personen, Ereignissen oder Beziehungen aufweisen<br /><br />

          3.2. Der Nutzer erkennt an, dass:<br />
          • Die Plattform ein kreatives Werkzeug ist und die generierten Inhalte fiktiv sein können<br />
          • Die Interpretation und Verwendung der generierten Designs in seiner alleinigen Verantwortung liegt<br />
          • Er für alle rechtlichen Folgen der Nutzung der generierten Designs selbst verantwortlich ist
        </p>

        <h2>4. Urheberrecht und Haftung</h2>
        <p>
          4.1. Die durch die KI generierten Designs unterliegen dem Urheberrecht. Die Nutzungsrechte werden gemäß
          unseren Nutzungsbedingungen eingeräumt.<br /><br />
          
          4.2. Eine kommerzielle Nutzung der Designs bedarf einer ausdrücklichen schriftlichen Genehmigung.<br /><br />

          4.3. Der Nutzer stellt den Anbieter von sämtlichen Ansprüchen frei, die sich aus der Nutzung der generierten Designs ergeben können, einschließlich aber nicht beschränkt auf:<br />
          • Ansprüche wegen Persönlichkeitsrechtsverletzungen<br />
          • Ansprüche wegen Urheberrechtsverletzungen<br />
          • Ansprüche wegen Markenrechtsverletzungen<br />
          • Ansprüche wegen irreführender oder missverständlicher Darstellungen
        </p>

        <h2>5. Gesundheitshinweis</h2>
        <p>
          5.1. Wir weisen ausdrücklich darauf hin, dass:<br />
          • Vor dem Tätowieren eine ärztliche Beratung empfohlen wird<br />
          • Die Umsetzung der Designs nur durch professionelle Tätowierer erfolgen sollte<br />
          • Mögliche gesundheitliche Risiken beim Tätowieren bestehen können
        </p>

        <h2>6. Links auf andere Websites</h2>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter. Auf die Inhalte dieser externen Seiten haben
          wir keinen Einfluss. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.
        </p>

        <h2>7. Änderungsvorbehalt</h2>
        <p>
          Wir behalten uns vor, diesen Haftungsausschluss jederzeit ohne gesonderte Benachrichtigung zu ändern
          oder zu aktualisieren.
        </p>

        <p className="text-sm mt-8">
          Stand: {new Date().toLocaleDateString('de-DE')}
        </p>
      </section>
    </div>
  );
};

export default Disclaimer; 