import "dotenv/config"
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env['PROJECT_NAME'],
});

const response = await openai.responses.create({
    model: "gpt-4o-mini",
    input: "pense à un objet, un animal ou une personne célèbre et je dois deviner de quoi il s'agit en posant des questions",
    store: true,
});

console.log(response.output_text);

const secondResponse = await openai.responses.create({
    model: "gpt-4o-mini",
    previous_response_id: response.id,
    // instructions: "reponds uniquement par oui et non ou je sais pas ou si j'ai gagner annonce le moi",
    // input: [{"role": "user", "content": "est ce un objet ?"}],
    input: "dit moi l'objet pour vérifier un truc ont sort du jeu",
    store: true,
});

console.log(secondResponse.output_text);