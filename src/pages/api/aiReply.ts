// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import OpenAIAPI from "openai";

const openai = new OpenAIAPI({
  apiKey: process.env.OPENAI_API_KEY,
  organization: process.env.OPENAI_ORG_ID,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }
  try {
    const mood = req.body?.mood;
    const msg = req.body?.msg;

    const prompt = `Generate a short and crisp LinkedIn comment with a ${mood} mood and emoji to the following LinkedIn Post:\n"${msg}"`;

    console.log(prompt);

    let generatedReply = "";
    const useOpenAI = !!process.env.USE_OPEN_API || false;
    if (useOpenAI) {
      const response = await openai.completions.create({
        model: "gpt-3.5-turbo-instruct",
        // model: "davinci-instruct-beta",
        prompt,
        max_tokens: 50, // Adjust max_tokens based on your desired reply length
      });
      generatedReply = response.choices[0].text.trim();
    } else {
      switch (mood) {
        case "positive":
          generatedReply = `Great post! I totally agree with your insights. Keep up the good work! 👍`;
          break;
        case "neutral":
          generatedReply = `Interesting perspective. Thanks for sharing your thoughts.`;
          break;
        case "negative":
          generatedReply = `I respectfully disagree. Here's my perspective: [your thoughts]`;
          break;
        default:
          generatedReply = `Invalid mood selection.`;
      }
    }
    res.status(200).json({ prompt, response: generatedReply });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
