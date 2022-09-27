const content = [
  {
    stepLabel: "Bienvenue",
    stepEmojis: "🤗",
    title: "Rejoins l'équipe Tookea",
    texts: [
      {
        content:
          "Que tu sois ancien ou nouveau remplis ce formulaire pour que l'on sache qui tu es et quelles missions tu veux faire !",
        variant: "subtitle2",
      },
      {
        content:
          "Si tu es nouveau, ce formulaire te présentera aussi le projet et l'équipe pour que tu saches dans quoi tu t'embarques. Les réponses nous serons envoyées directement sur notre Discord, nous te recontacterons si on a d'autres questions. N'hésite pas aussi à nous contacter si tu as des questions !",
        variant: "body2",
      },
      {
        content:
          "Pour nous contacter : Marie Gautron par Teams ou Linkedin ou marie.gautron@ynov.com",
        variant: "body2",
        fontWeight: 600,
      },
      {
        type: "quote",
        content:
          'Attention, en fonction de tes réponses, le questionnaire peut être un peu long, installe toi bien et mets toi dans de bonnes conditions. Pour les questions ouvertes, décris-nous ce que tu penses ou tes expériences, cela nous permettra de mieux te connaître. Il ne faut pas que ce questionnaire te fasse peur, nous préférons un bon feeling pendant les entretiens que de "bonnes" réponses sur ce questionnaire.',
      },
    ],
    form: [
      {
        type: "select",
        name: "old",
        label: "Déjà chez Tookea l'année dernière ?",
        items: [
          { label: "Oui", value: "oui" },
          { label: "Non", value: "non" },
        ],
      },
    ],
  },
  {
    stepLabel: "Tookea, c'est quoi ?",
    stepEmojis: "🌞",
    title: "🌞 Tookea, c'est quoi ?",
    texts: [
      {
        content:
          "Que tu sois ancien ou nouveau remplis ce formulaire pour que l'on sache qui tu es et quelles missions tu veux faire !",
        variant: "subtitle2",
      },
      {
        content:
          "Si tu es nouveau, ce formulaire te présentera aussi le projet et l'équipe pour que tu saches dans quoi tu t'embarques. Les réponses nous serons envoyées directement sur notre Discord, nous te recontacterons si on a d'autres questions. N'hésite pas aussi à nous contacter si tu as des questions !",
        variant: "body2",
      },
      {
        content:
          "Pour nous contacter : Marie Gautron par Teams ou Linkedin ou marie.gautron@ynov.com",
        variant: "body2",
        fontWeight: 600,
      },
      {
        type: "quote",
        content:
          'Attention, en fonction de tes réponses, le questionnaire peut être un peu long, installe toi bien et mets toi dans de bonnes conditions. Pour les questions ouvertes, décris-nous ce que tu penses ou tes expériences, cela nous permettra de mieux te connaître. Il ne faut pas que ce questionnaire te fasse peur, nous préférons un bon feeling pendant les entretiens que de "bonnes" réponses sur ce questionnaire.',
      },
    ],
    form: [
      {
        type: "select",
        name: "old",
        label: "Déjà chez Tookea l'année dernière ?",
        items: [
          { label: "Oui", value: "oui" },
          { label: "Non", value: "non" },
        ],
      },
    ],
  },
];

export default content;
