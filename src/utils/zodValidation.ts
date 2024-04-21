import { z } from "zod";

const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const otpRegex = /^\d{6}$/;
const regNoRegex = /^\d{1,9}$/;
const cnicRegex = /^\d{13}$/;

export const mcqFormSchema = z.object({
  question: z.string().min(3).max(300),
  correct_answer: z.string().min(2).max(100),
  incorrect_answer1: z.string().min(2).max(100),
  incorrect_answer2: z.string().min(2).max(100),
  incorrect_answer3: z.string().min(2).max(100),
});

export const loginFormSchema = z.object({
  email: z.string().min(3).max(100),
  password: z.string().min(6).max(500),
});

export const signupFormSchema = z
  .object({
    fullName: z.string().min(3).max(100), //return custom err msges
    userName: z.string().min(3).max(100),
    email: z.string().email().min(3).max(100),
    password: z.string().min(6).max(500),
    repeatPassword: z.string().min(6).max(500),
    avatar: z.any(),
    coverImage: z.any().optional(),
  })
  .superRefine(({ password, repeatPassword }, ctx) => {
    if (repeatPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["repeatPassword"],
      });
    }
  });

export type loginFormSchemaType = z.infer<typeof loginFormSchema>;
export type signupFormSchemaType = z.infer<typeof signupFormSchema>;
export type McqFormSchemaType = z.infer<typeof mcqFormSchema>;
