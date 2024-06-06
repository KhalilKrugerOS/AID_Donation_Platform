import * as z from "zod";

export const RequestFormSchema = z.object({
    title: z.string().min(3, {
        message: "title must be at least 3 characters.",
    }),
    description: z.string().min(3, {
        message: "description must be at least 3 characters.",
    }).max(2000, {
        message: "description must be at most 400 characters.",
    }),
    location: z.string().min(3, {
        message: "location must be at least 3 characters.",
    }).max(100, {
        message: "location must be at most 400 characters.",
    }),
    imageUrl: z.string(),
    startDateTime: z.date(),
    endDateTime: z.date(),
    categoryId: z.string(),
    amountNeeded: z.string()
});


export const DonateFormSchema = z.object({
    amountDonated: z.string()
});

