// src/schemas/experienceStepsSchema.ts

import { z } from "zod";

export const stepSchemas = {
  [STEPSFOREXPERIENCE.YOUR_IDEA]: z.object({
    idea: z.string().min(10, { message: "L'idée doit contenir au moins 10 caractères." }),
  }),
  [STEPSFOREXPERIENCE.WHAT_WE_ARE_LOOKING_FOR]: z.object({
    criteria: z.string().min(20, { message: "Décrivez ce que vous recherchez (min 20 caractères)." }),
  }),
  [STEPSFOREXPERIENCE.EXPERIENCE_PAGE]: z.object({
    description: z
      .string()
      .min(30, { message: "La description doit contenir au moins 30 caractères." }),
  }),
  [STEPSFOREXPERIENCE.PROGRAM_DETAILS]: z.object({
    programDetails: z
      .string()
      .min(30, { message: "Détaillez le programme (min 30 caractères)." }),
  }),
  [STEPSFOREXPERIENCE.ABOUT_YOU]: z.object({
    aboutYou: z.string().min(20, { message: "Parlez un peu de vous (min 20 caractères)." }),
  }),
  [STEPSFOREXPERIENCE.LOCATION]: z.object({
    location: z.string().min(5, { message: "L'emplacement est requis." }),
  }),
  [STEPSFOREXPERIENCE.PROVIDED_ITEMS]: z.object({
    itemsProvided: z.array(z.string()).nonempty({
      message: "Listez au moins un élément fourni.",
    }),
  }),
  [STEPSFOREXPERIENCE.WHAT_TRAVELERS_SHOULD_BRING]: z.object({
    itemsToBring: z.array(z.string()).nonempty({
      message: "Listez ce que les voyageurs doivent apporter.",
    }),
  }),
  [STEPSFOREXPERIENCE.TRAVELER_REQUIREMENTS]: z.object({
    requirements: z.string().optional(),
  }),
  [STEPSFOREXPERIENCE.TITLE]: z.object({
    title: z.string().min(5, { message: "Le titre doit contenir au moins 5 caractères." }),
  }),
  [STEPSFOREXPERIENCE.PHOTOS]: z.object({
    photoUrls: z.array(z.string().url({ message: "Lien d'image invalide." })).min(1, {
      message: "Ajoutez au moins une photo.",
    }),
  }),
  [STEPSFOREXPERIENCE.SETTINGS]: z.object({
    isPublic: z.boolean(),
    price: z.number().min(0, { message: "Le prix doit être positif." }),
  }),
  [STEPSFOREXPERIENCE.PROPOSAL_SENT]: z.object({
    confirmation: z.boolean().refine((val) => val === true, {
      message: "Vous devez confirmer l'envoi de la proposition.",
    }),
  }),
};
