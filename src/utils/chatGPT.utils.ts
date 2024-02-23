import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAIKEY
});


const runChatGPT = async(question: string) => {
    console.log(question);
    const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo-0613',
        messages: [
            {
                role: 'user',
                content: question
            }
        ]
    });
    return response.choices[0].message.content;
}

module.exports = runChatGPT;