import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export async function analyzeAnswer(question: string, answer: string): Promise<{
  score: number;
  feedback: string;
}> {
  const prompt = `
    Question: ${question}
    Answer: ${answer}
    
    Please analyze this interview answer and provide:
    1. A score from 0-10
    2. Detailed feedback explaining the strengths and areas for improvement
    
    Format your response as JSON with 'score' and 'feedback' fields.
  `;

  const completion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: 'gpt-3.5-turbo',
    response_format: { type: 'json_object' }
  });

  return JSON.parse(completion.choices[0].message.content);
}