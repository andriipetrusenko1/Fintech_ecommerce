import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize OpenAI client with API key from environment variables
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    // Validate request
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'Invalid request. Messages array is required.' },
        { status: 400 }
      );
    }

    // Add system message to provide context about the financial assistant
    const systemMessage = {
      role: 'system',
      content: `You are FinAssist, a helpful financial assistant for FinTech Commerce. 
      You provide information about financial products, investment strategies, retirement planning, 
      insurance options, and general financial advice. Be professional, clear, and helpful. 
      Avoid giving specific investment recommendations or guarantees about returns. 
      Always clarify that users should consult with a financial advisor for personalized advice.
      If asked about products, mention our Premium Investment Portfolio, Comprehensive Life Insurance, 
      Retirement Planning Package, Tax Optimization Strategy, and Estate Planning Service.`
    };

    // Prepare messages for OpenAI API
    const apiMessages = [systemMessage, ...messages];

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: apiMessages,
      temperature: 0.7,
      max_tokens: 500,
    });

    // Extract and return the assistant's response
    const responseMessage = completion.choices[0].message;

    return NextResponse.json({ message: responseMessage });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request.' },
      { status: 500 }
    );
  }
}