const sleep = (time: number) => new Promise((acc) => setTimeout(acc, time));

const sendDiscordMessage = async (values: any) => {
  await sleep(3000);
  const contenido = {
    content: "Quelqu'un veut rejoindre Tara !",
    embeds: [
      {
        title: `${values.firstName} ${values.lastName}`,
        description: `**${values.prom}** ${values.domain}`,
      },
    ],
  };

  fetch(
    "https://discordapp.com/api/webhooks/860837542177538068/OdWvZZjhNPSKvviT47mRYgfvMZ4hBVT_E_QJp-BLNZdLEOSKzz1DX9MH4XXCg6UqaveP",
    {
      method: "POST",
      body: JSON.stringify(contenido),
      headers: { "Content-Type": "application/json" },
    }
  )
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
};

export default sendDiscordMessage;
