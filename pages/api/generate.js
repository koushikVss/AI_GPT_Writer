import { Configuration, OpenAIApi } from 'openai';



const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const generateAction = async (req, res) => {
  // Run first prompt
  const basePromptPrefix = `Write a medium blog post. The style of writing is funny, creative, witty, engaging. Start with a cool title. Include some creative jokes on the topic.
  Topic: `
  console.log(`API: ${basePromptPrefix}${req.body.userInput}`)

  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${basePromptPrefix}${req.body.userInput}`,
    temperature: 1.1,
    max_tokens: 1100,
  });
  console.log(baseCompletion)
  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;

