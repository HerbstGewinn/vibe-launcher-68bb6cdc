const Privacy = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>
      
      <section className="prose dark:prose-invert max-w-none">
        <h2>Datenschutzerklärung</h2>
        
        <p>
          Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:<br /><br />
          Kristian Munsche<br />
          Gleimstraße 12<br />
          10437 Prenzlauer Berg<br />
          Deutschland
        </p>

        <h2>1. Ihre Rechte</h2>
        <p>
          Sie haben als betroffene Person folgende Rechte:<br />
          • Recht auf Auskunft (Art. 15 DSGVO)<br />
          • Recht auf Berichtigung (Art. 16 DSGVO)<br />
          • Recht auf Löschung (Art. 17 DSGVO)<br />
          • Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)<br />
          • Recht auf Datenübertragbarkeit (Art. 20 DSGVO)<br />
          • Recht auf Widerspruch (Art. 21 DSGVO)
        </p>

        <h2>2. Erhebung personenbezogener Daten</h2>
        <p>
          2.1. Bei der Nutzung unserer Plattform erheben wir folgende Daten:<br />
          • E-Mail-Adresse<br />
          • Benutzername<br />
          • Zahlungsinformationen<br />
          • Generierte Designs<br />
          • Nutzungsstatistiken
        </p>

        <h2>3. Zweck der Datenverarbeitung</h2>
        <p>
          3.1. Wir verarbeiten Ihre Daten zu folgenden Zwecken:<br />
          • Bereitstellung unserer Dienstleistungen<br />
          • Verbesserung unserer KI-Technologie<br />
          • Abwicklung von Zahlungen<br />
          • Kundenservice<br />
          • Marketing (mit Ihrer Einwilligung)
        </p>

        <h2>4. Speicherdauer</h2>
        <p>
          Wir speichern Ihre Daten nur so lange, wie es für die genannten Zwecke erforderlich ist oder gesetzliche
          Aufbewahrungsfristen dies vorschreiben.
        </p>

        <h2>5. Weitergabe von Daten</h2>
        <p>
          5.1. Eine Weitergabe Ihrer Daten erfolgt nur:<br />
          • An Zahlungsdienstleister zur Abwicklung von Zahlungen<br />
          • An Cloud-Service-Provider zur Speicherung der Daten<br />
          • Wenn eine gesetzliche Verpflichtung besteht
        </p>

        <h2>6. Cookies und Analyse-Tools</h2>
        <p>
          Informationen über die von uns verwendeten Cookies und Analyse-Tools finden Sie in unserer Cookie-Richtlinie.
        </p>

        <h2>7. Datensicherheit</h2>
        <p>
          Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten gegen Manipulation,
          Verlust, Zerstörung oder unbefugten Zugriff zu schützen.
        </p>

        <h2>8. Kontakt</h2>
        <p>
          Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten können Sie sich
          jederzeit an uns wenden.
        </p>

        <p className="text-sm mt-8">
          Stand: {new Date().toLocaleDateString('de-DE')}
        </p>
      </section>
    </div>
  );
};

export default Privacy; 