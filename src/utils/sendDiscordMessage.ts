import { FormikValues } from "formik";
import markdown from "./discordMessage";

const sleep = (time: number) => new Promise((acc) => setTimeout(acc, time));

const sendDiscordMessage = async (values: FormikValues) => {
  await sleep(3000);
  const contenido = {
    content: "Quelqu'un veut rejoindre Tookea !",
    embeds: [
      {
        title: `${values.firstName} ${values.lastName}`,
        description: markdown(values),
      },
    ],
  };

  fetch(
    "https://discord.com/api/webhooks/1024309324186648618/FjvaiKMIlmRdhKopvNdI8YLoKQVhbAI3f_oHWFHTbARnN1sPhyG7-56wHcyMT8_CA4Kr",
    {
      method: "POST",
      body: JSON.stringify(contenido),
      headers: { "Content-Type": "application/json" },
    }
  )
    .then((res) => console.log(res))
    .catch((e) => console.log(e.message));
};

export default sendDiscordMessage;
