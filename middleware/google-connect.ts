import { z } from "zod";

const callbackSchema = z.object({
    code: z.string(),
});

export default defineNuxtRouteMiddleware((to, from) => {
    try {
        callbackSchema.parse(to.query);
    } catch (err) {
        if (err instanceof z.ZodError) {
            return "/error";
        }
    }
});
