import { Request, Response } from "express";
import Groq from "groq-sdk";

const groq = new Groq({
  
  apiKey: process.env.GROQ_API_KEY!,
});

export const getCareerRecommendation = async (
  req: Request,
  res: Response
) => {
  try {
    const { skills, experience, interests } = req.body;

    const prompt = `
You are an AI Career Advisor.

Skills:
${skills}

Experience:
${experience}

Interests:
${interests}

Suggest the best career.

Include:
1. Best Career
2. Why
3. Skills to learn next

Keep it short.
`;

    const chat = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    res.send({
      success: true,
      recommendation: chat.choices[0].message.content,
    });

  } catch (error: any) {
    console.error(error);

    res.status(500).send({
      success: false,
      message: "AI recommendation failed.",
    });
  }
};

export const generateCoverLetter = async (
  req: Request,
  res: Response
) => {
  try {
    const { jobTitle, skills, experience } = req.body;

    const prompt = `
Write a professional cover letter.

Job Title:
${jobTitle}

Skills:
${skills}

Experience:
${experience}

Keep it around 200 words.
`;

    const chat = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    res.send({
      success: true,
      coverLetter: chat.choices[0].message.content,
    });

  } catch (error) {
    console.error(error);

    res.status(500).send({
      success: false,
      message: "Cover letter generation failed.",
    });
  }
};