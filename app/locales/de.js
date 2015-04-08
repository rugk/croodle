export default {
  answerTypes: {
    yes: {
      label: "Ja"
    },
    no: {
      label: "Nein"
    },
    maybe: {
      label: "Vielleicht"
    },
    freeText: {
      label: "Freitext erlauben"
    },
    yesNo: {
      label: "Ja, Nein"
    },
    yesNoMaybe: {
      label: "Ja, Nein, Vielleicht"
    }
  },
  create: {
    index: {
      input: {
        pollType: {
          label: "Was ist der Zweck deiner Umfrage?"
        }
      }
    },
    meta: {
      input: {
        title: {
          label: "Titel",
          placeholder: "Füge einen Umfragetitel hinzu."
        },
        description: {
          label: "Beschreibung",
          placeholder: "Optional: Füge der Umfrage eine Beschreibung hinzu."
        }
      }
    },
    next: "Weiter",
    options: {
      options: {
        label: "Antwort-Optionen"
      },
      error: {
        notEnoughDates: "Es müssen entweder zwei Tage ausgewählt, oder ein Tag und die Option 'Uhrzeiten festlegen' gewählt werden.",
        notEnoughOptions: "Es müssen mindestens zwei Antwort-Optionen eingetragen werden."
      },
      defineTimes: {
        label: "Uhrzeiten festlegen?"
      },
      input: {
        moreOptions: {
          label: "weitere Antwort-Optionen hinzufügen"
        }
      }
    },
    optionsDatetime: {
      datetimes: {
        label: "Uhrzeiten"
      },
      moreInputs: "Weitere Uhrzeiten eingeben",
      copyFirstLine: "Uhrzeiten der ersten Zeile für alle anderen übernehmen",
      error: {
        notEnoughTimes: "Es muss mindestens eine gültige Uhrzeit pro Tag festgelegt werden. Falls nur ein einziger Tag ausgewählt wurde, müssen mindestens 2 Uhrzeiten festgelegt werden.",
        correctTimeFormat: "Überprüfe deine Eingabe: Mindestens eine Uhrzeit hat nicht das korrekte Format. Stunden und Minuten der Uhrzeit müssen durch einen Doppelpunkt getrennt sein (z.B. 13:00)."
      }
    },
    settings: {
      answerType: {
        label: "Welche Antworten sollen verfügbar sein?"
      },
      anonymousUser: {
        label: "Anonyme Teilnahme an der Umfrage erlauben?"
      },
      forceAnswer: {
        label: "Eine Antwort für jede Option erzwingen?"
      }
    },
    save: "Speichern"
  },
  errors: {
    inclusion: "ist kein Bestandteil der Liste",
    exclusion: "reserviert",
    invalid: "ungültig",
    confirmation: "stimmt nicht mit {{attribute}} überein",
    accepted: "muss akzeptiert werden",
    empty: "darf nicht freigelassen werden.",
    blank: "Muss ausgefüllt werden.",
    present: "Muss frei bleiben.",
    tooLong: "ist zu lang (Maximum sind {{count}} Zeichen)",
    tooShort: "Bitte gebe mindestens {{count}} Zeichen ein.",
    wrongLength: "hat die falsche Länge (Mindestlänge {{count}} Zeichen)",
    notANumber: "ist keine Zahl",
    notAnInteger: "Muss eine ganze Zahl sein.",
    greaterThan: "muss größer als {{count}} sein",
    greaterThanOrEqualTo: "muss größer oder gleich {{count}} sein",
    equalTo: "muss gleich {{count}} sein",
    lessThan: "muss kleiner als {{count}} sein",
    lessThanOrEqualTo: "muss kleiner oder gleich {{count}} sein",
    otherThan: "muss einen anderen Wert als {{count}} haben",
    odd: "muss ungleich sein",
    even: "muss gleich sein",
    url: "ist keine gültige URL"
  },
  index: {
    title: "Croodle vereinfacht die Termin- und Entscheidungsfindung ...<br/>... und schützt dabei deine Daten",
    features: {
      title: "Funktionen",
      list: {
        overview: "<strong>Finde einen Termin</strong> oder <strong>mache eine Umfrage</strong> mit so vielen Leuten, wie du möchtest.",
        privacy: "Deine Daten bleiben privat: Sie werden bereits in deinem Browser <strong>verschlüsselt</strong>. Worum es in deiner Umfrage geht, wissen nur die Personen, denen du den Umfrage-Link sendest.",
        options: "Du kannst so viele <strong>Antwortmöglichkeiten</strong> festlegen, wie du möchtest. Du kannst deinen Wunschtermin im <strong>Kalender</strong> auswählen, oder <strong>beliebige Fragen</strong> erstellen.",
        answers: "Du kannst <strong>vordefinierte Anwortmöglichkeiten</strong> nutzen, wie zum Beispiel <i>ja</i>, <i>nein</i>, <i>vielleicht</i> oder <strong>selbsterstellte Antworten</strong> erlauben.",
        evaluation: "Du behälst den Überblick durch eine automatisch aktualisierte <strong>Übersicht der bevorzugten Antworten</strong>.",
      }
    },
    link: {
      haveATry: "probiere es jetzt aus"
    },
    hoster: {
      title: "Hoste dein eigenes Croodle:",
      text: "Du musst diesem Croodle nicht vertrauen. Croodle ist freie Software und kannst sie auf deinem eigenen Server installieren. Hierzu werden lediglich einige Megabyte Speicherplatz, PHP und SSL-Verschlüsselung benötigt. Die Software und Tipps zur Installation findest du auf <a href=\"https://github.com/jelhan/croodle\">GitHub</a>.",
    }
  },
  modal: {
    saveRetry: {
      title: "Speichern fehlgeschlagen.",
      text: "<p>Deine Teilnahme konnte nicht gespeichert werden. Bitte prüfe deine Internetverbindung und versuche es anschließend erneut.</p><p>Sollte dies nicht helfen, kann ein kurzfristiges Ausfall des Servers schuld sein. Warte bitte einige Minuten bevor du es erneut versuchst. Du kannst die Seite so lange geöffnet lassen.</p><p>Sollten die Probleme anhalten, wende dich bitte an die Administratoren der Seite.</p>",
      buttonRetry: "erneut versuchen"
    }
  },
  poll: {
    createdTime: "Erstellt am %@.",
    error: {
      newUser: {
        everyOptionIsAnswered: "Bitte beantworte jede Option."
      },
      newUserName: "Du musst einen Nutzernamen angeben."
    },
    evaluation: {
      label: "Auswertung"
    },
    input: {
      newUserName: {
        placeholder: "Dein Name"
      },
      showEvaluation: {
        hide: "Verbergen",
        show: "Anzeigen"
      }
    },
    modal: {
      timezoneDiffers: {
        title: "In welcher Zeitzone sollen die Daten angezeigt werden?",
        body: "Die Umfrage wurde für eine Zeitzone angelegt, die von deiner lokalen Zeit abweicht. In welcher Zeitzone sollen die Daten angezeigt werden?",
        button: {
          useLocalTimezone: "meine Zeitzone",
          usePollTimezone: "Original-Zeitzone"
        }
      }
    },
    save: "Speichern",
    share: {
      body: "Teile den Link und lade Andere zu deiner Umfrage ein.",
      notice: "Jeder der den Link kennt, kann deine Umfrage ansehen. Falls diese private Daten enthält, solltest du den Link nur per verschlüsselter Mail, oder Chat mit End-to-End-Verschlüsselung weitergeben."
    }
  },
  pollTypes: {
    findADate: {
      label: "Ich möchte einen Termin finden. (z.B. Datum oder Uhrzeit für eine Verabredung)"
    },
    makeAPoll: {
      label: "Ich möchte eine Frage beantworten. (z.B. Wozu schmeckt Kaffe am Besten?)"
    }
  }
};
