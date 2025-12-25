
import { z } from "zod";

export const createReviewSchema = z.object({
        joinEventId: z.uuid({
            error: 'join Event Id is required',
        }),
        rating: z.number({
            error: 'Rating is required',
        }),
        comment: z.string({
            error: 'Comment is required',
        })
});