const Cookies = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Cookie-Richtlinie</h1>
      
      <section className="prose dark:prose-invert max-w-none">
        <h2>Cookie-Richtlinie</h2>
        
        <p>
          Kristian Munsche<br />
          Gleimstraße 12<br />
          10437 Prenzlauer Berg<br />
          Deutschland
        </p>

        <h2>1. Was sind Cookies?</h2>
        <p>
          Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Sie dienen dazu, unseren Service
          nutzerfreundlicher, effektiver und sicherer zu machen.
        </p>

        <h2>2. Arten von Cookies</h2>
        <p>
          2.1. Notwendige Cookies:<br />
          • Session-Cookies für die Funktionalität der Plattform<br />
          • Authentifizierungs-Cookies für den Login-Status<br />
          • Sicherheits-Cookies zum Schutz vor Missbrauch
        </p>
        <p>
          2.2. Funktionale Cookies:<br />
          • Sprach-Einstellungen<br />
          • Personalisierte Einstellungen<br />
          • Design-Präferenzen
        </p>
        <p>
          2.3. Analyse-Cookies (mit Ihrer Einwilligung):<br />
          • Nutzungsstatistiken<br />
          • Performance-Monitoring<br />
          • Verbesserung der Benutzerfreundlichkeit
        </p>

        <h2>3. Verwendete Cookies</h2>
        <p>
          3.1. Eigene Cookies:<br />
          • session_id: Sitzungsverwaltung (Ablauf: Sitzungsende)<br />
          • auth_token: Authentifizierung (Ablauf: 30 Tage)<br />
          • language: Spracheinstellung (Ablauf: 1 Jahr)<br />
          • theme: Design-Einstellung (Ablauf: 1 Jahr)
        </p>
        <p>
          3.2. Drittanbieter-Cookies:<br />
          • Stripe: Zahlungsabwicklung<br />
          • Google Analytics: Nutzungsanalyse (optional)<br />
          • Cloudflare: Sicherheit und Performance
        </p>

        <h2>4. Cookie-Einstellungen</h2>
        <p>
          4.1. Sie können Ihre Cookie-Einstellungen jederzeit anpassen:<br />
          • Über die Cookie-Einstellungen in Ihrem Browser<br />
          • Über unser Cookie-Banner auf der Website<br />
          • In Ihren Kontoeinstellungen
        </p>

        <h2>5. Widerruf der Einwilligung</h2>
        <p>
          Sie können Ihre Einwilligung zur Nutzung von nicht-essentiellen Cookies jederzeit widerrufen. Dies hat keine
          Auswirkungen auf die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung.
        </p>

        <h2>6. Datensicherheit</h2>
        <p>
          Wir verwenden sichere Übertragungsprotokolle (SSL/TLS) und weitere Sicherheitsmaßnahmen zum Schutz Ihrer Daten.
        </p>

        <h2>7. Aktualisierungen</h2>
        <p>
          Wir behalten uns vor, diese Cookie-Richtlinie bei Bedarf zu aktualisieren. Die aktuelle Version finden Sie
          jederzeit auf dieser Seite.
        </p>

        <p className="text-sm mt-8">
          Stand: {new Date().toLocaleDateString('de-DE')}
        </p>
      </section>
    </div>
  );
};

export default Cookies; 