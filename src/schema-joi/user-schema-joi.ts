import Joi from "joi";


export const userSchema = Joi.object({
    name_artist: Joi.string().required(),
    name_album: Joi.string().required(),
    year: Joi.date().min('1900').max('now').required()
});