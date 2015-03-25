export default {
  answerTypes: {
    yes: {
      label: "Yes"
    },
    no: {
      label: "No"
    },
    maybe: {
      label: "Maybe"
    },
    freeText: {
      label: "Allow free text"
    },
    yesNo: {
      label: "Yes, No"
    },
    yesNoMaybe: {
      label: "Yes, No, Maybe"
    }
  },
  create: {
    index: {
      input: {
        pollType: {
          label: "What is the purpose of your poll?"
        }
      }
    },
    meta: {
      input: {
        title: {
          label: "Title",
          placeholder: "Add a poll title."
        },
        description: {
          label: "Description",
          placeholder: "Optional: Add a description to the poll."
        }
      }
    },
    next: "Next",
    options: {
      options: {
        label: "Answer options"
      },
      error: {
        notEnoughDates: "You have to choose either two days or one day plus the option 'set times'.",
        notEnoughOptions: "Enter at least two answer options."
      },
      defineTimes: {
        label: "Set times?"
      },
      input: {
        moreOptions: {
          label: "Add further answer options"
        }
      }
    },
    optionsDatetime: {
      datetimes: {
        label: "Times"
      },
      moreInputs: "Add further times",
      copyFirstLine: "Adopt times of the first line for all others",
      error: {
        notEnoughTimes: "At least one valid time has to be set per day. If only one day was chosen, at least two times have to be set.",
        correctTimeFormat: "Check your entry: At least one time does not comply with the correct format. Hours and minutes of the time have to be separated by a colon (e.g. 13:00)."
      }
    },
    settings: {
      answerType: {
        label: "Which answers should be available?"
      },
      anonymousUser: {
        label: "Allow anonymous participation in the poll?"
      },
      forceAnswer: {
        label: "Force answer for every option?"
      }
    },
    save: "Save"
  },
  errors: {
    inclusion: "is not part of the list",
    exclusion: "reserved",
    invalid: "invalid",
    confirmation: "does not accord with {{attribute}}",
    accepted: "has to be accepted",
    empty: "cannot be left blank",
    blank: "Must be filled in.",
    present: "Has to be left blank.",
    tooLong: "is too long (Maximum are {{count}} characters)",
    tooShort: "Please insert at least {{count}} characters.",
    wrongLength: "has invalid length (Minimum length {{count}} characters)",
    notANumber: "is not a number",
    notAnInteger: "Has to be a whole number.",
    greaterThan: "has to be bigger than {{count}}",
    greaterThanOrEqualTo: "must be bigger or same as {{count}}",
    equalTo: "must equal {{count}}",
    lessThan: "must be smaller than {{count}}",
    lessThanOrEqualTo: "must be smaller or equal to {{count}}",
    otherThan: "must be a different number than {{count}}",
    odd: "must be unequal to",
    even: "must be equal to",
    url: "is not a valid URL"
  },
  index: {
    title: "Croodle simplifies making appointments and finding decisions ...<br/>... and at the same time protects your data",
    features: {
      title: "Functions",
      list: {
        overview: "<strong>Find a date</strong> or <strong>do a poll</strong> with as many people as you like.",
        privacy: "Your data stays private: Already in your browser they are being <strong>encrypted</strong>. Only the people who you send the link of the poll to will know what your poll is about.",
        options: "You can set as many  <strong>answer options</strong> as you like. You can choose your <strong>preferred date</strong> or compile <strong>any questions</strong>",
        answers: "you can use <strong>pre-defined answer options</strong> like <i>yes</i>, <i>no</i>, <i>maybe</i> or allow <strong>own questions</strong>.",
        evaluation: "You keep the overview through <strong>overview of preferred answers</strong>."
      }
    },
    link: {
      haveATry: "test it now"
    },
    hoster: {
      title: "Host your own Croodle:",
      text: "You don’t have to trust this Croodle. Croodle is a free software and you can install it on your own server. You only a few megabytes memory capacity, PHP and SSL-encryption. You can find the software and tips for installation here <a href=\"https://github.com/jelhan/croodle\">GitHub</a>."
    }
  },
  modal: {
    saveRetry: {
      title: "Save failed",
      text: "<p>Deine Teilnahme konnte nicht gespeichert werden. Bitte prüfe deine Internetverbindung und versuche es anschließend erneut.</p><p>Sollte dies nicht helfen, kann ein kurzfristiges Ausfall des Servers schuld sein. Warte bitte einige Minuten bevor du es erneut versuchst. Du kannst die Seite so lange geöffnet lassen.</p><p>Sollten die Probleme anhalten, wende dich bitte an die Administratoren der Seite.</p>",
      buttonRetry: "Retry"
    }
  },
  poll: {
    createdTime: "Created on {{creationDate}}.",
    error: {
      newUser: {
        everyOptionIsAnswered: "Please answer ever option."
      },
      newUserName: "You have to give a user name."
    },
    evaluation: {
      label: "Evaluation"
    },
    input: {
      newUserName: {
        placeholder: "Your name"
      },
      showEvaluation: {
        hide: "Hide",
        show: "Show"
      }
    },
    modal: {
      timezoneDiffers: {
        title: "Which time zone should be used to display the data?",
        body: "The poll has been set up for a time zone that differs from your local time. Which time zone should be used to display the data?",
        button: {
          useLocalTimezone: "my time zones",
          usePollTimezone: "Original time zone"
        }
      }
    },
    save: "Save",
    share: {
      body: "Share the link and invite others to the poll.",
      notice: "Anyone who knows the link can see your poll. If this contains private data, you should only pass on this link via encrypted e-mail or chat with end-to-end-encryption."
    }
  },
  pollTypes: {
    findADate: {
      label: "I would like to make a date. (e.g. date or time for appointment)"
    },
    makeAPoll: {
      label: "I would like to answer a question. (e.g. what goes best with coffee?)"
    }
  }
};
