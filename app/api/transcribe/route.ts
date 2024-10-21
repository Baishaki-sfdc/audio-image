import { NextResponse } from 'next/server';
   import OpenAI from 'openai';

   const openai = new OpenAI({
     apiKey: process.env.OPENAI_API_KEY,
   });

   export async function POST(request: Request) {
     try {
       const formData = await request.formData();
       const audioFile = formData.get('audio') as File;

       if (!audioFile) {
         return NextResponse.json({ error: 'No audio file provided' }, { status: 400 });
       }

       console.log('Attempting to transcribe audio...');
       const transcription = await openai.audio.transcriptions.create({
         file: audioFile,
         model: 'whisper-1',
       });

       console.log('Transcription successful:', transcription.text);
       return NextResponse.json({ transcript: transcription.text });
     } catch (error: any) {
       console.error('Error in transcribe API:', error);
       
       let errorMessage = 'An unknown error occurred';
       if (error instanceof OpenAI.APIError) {
         errorMessage = error.message;
       } else if (error instanceof Error) {
         errorMessage = error.message;
       }

       return NextResponse.json({ error: errorMessage }, { status: 500 });
     }
   }