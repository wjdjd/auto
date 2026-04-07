import { NextResponse } from 'next/server';
import { generateImage, generateTextContent, getDashboardData, saveContent } from '@/lib/services';

export async function GET() {
  const db = await getDashboardData();
  return NextResponse.json({ db });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const generated = await generateTextContent({
      niche: body.niche,
      tone: body.tone,
      direction: body.direction,
      type: body.type,
    });

    const content = await saveContent({
      niche: body.niche,
      tone: body.tone,
      direction: body.direction,
      type: body.type,
      hook: generated.hook || 'Hook not returned',
      caption: generated.caption || 'Caption not returned',
      cta: generated.cta || 'Follow for more',
      hashtags: generated.hashtags || '#autopublish',
      imagePrompt: generated.imagePrompt || '',
      imageUrl: null,
    });

    return NextResponse.json({ content });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to generate content' }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const result = await generateImage({ prompt: body.prompt });
    return NextResponse.json({ result });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to generate image' }, { status: 500 });
  }
}
