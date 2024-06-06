import * as z from "zod";

export const RequestFormSchema = z.object({
  title: z.string().min(3, {
    message: "title must be at least 3 characters.",
  }),
  description: z
    .string()
    .min(3, {
      message: "description must be at least 3 characters.",
    })
    .max(400, {
      message: "description must be at most 400 characters.",
    }),
  location: z
    .string()
    .min(3, {
      message: "location must be at least 3 characters.",
    })
    .max(400, {
      message: "location must be at most 400 characters.",
    }),
  imageUrl: z.string(),
  startDateTime: z.date(),
  endDateTime: z.date(),
  categoryId: z.string(),
  amountNeeded: z.string(),
});

export const EditProfileSchema = z.object({
  phoneNumber: z.string().min(10, {
    message: "Numéro de Téléphone must be at least 10 characters.",
  }),
  bio: z
    .string()
    .min(3, {
      message: "BIO must be at least 3 characters.",
    })
    .max(400, {
      message: "BIO must be at most 400 characters.",
    }),
  location: z
    .string()
    .min(3, {
      message: "Emplacement must be at least 3 characters.",
    })
    .max(400, {
      message: "Emplacement must be at most 400 characters.",
    }),
  category: z.string().nonempty({
    message: "A category must be selected.",
  }),
  socialMediaLink: z.string().url({
    message: "Invalid URL format for social media link.",
  }),
});
