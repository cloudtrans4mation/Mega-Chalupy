import { useToast } from 'vue-toastification'
import type { CountrySelectValue } from '~/types'

export enum STEPS {
    YOUR_IDEA = 0,                 // Votre idée
    WHAT_WE_ARE_LOOKING_FOR = 1,   // Ce que nous recherchons
    EXPERIENCE_PAGE = 2,           // Page de l'expérience
    PROGRAM_DETAILS = 3,           // Au programme
    ABOUT_YOU = 4,                 // À propos de vous
    LOCATION = 5,                  // Emplacement
    PROVIDED_ITEMS = 6,            // Ce qui est fourni
    WHAT_TRAVELERS_SHOULD_BRING = 7, // Ce que les voyageurs doivent apporter
    TRAVELER_REQUIREMENTS = 8,     // Conditions relatives aux voyageurs
    TITLE = 9,                     // Titre
    PHOTOS = 10,                   // Photos
    SETTINGS = 11,                 // Paramètres
    PROPOSAL_SENT = 12             // Proposition envoyée
  }
  

  export const STEP_LABELS = {
    [STEPS.YOUR_IDEA]: 'Your Idea',                   // Votre idée
    [STEPS.WHAT_WE_ARE_LOOKING_FOR]: 'What We Are Looking For', // Ce que nous recherchons
    [STEPS.EXPERIENCE_PAGE]: 'Experience Page',       // Page de l'expérience
    [STEPS.PROGRAM_DETAILS]: 'Program Details',       // Au programme
    [STEPS.ABOUT_YOU]: 'About You',                   // À propos de vous
    [STEPS.LOCATION]: 'Location',                     // Emplacement
    [STEPS.PROVIDED_ITEMS]: 'Provided Items',         // Ce qui est fourni
    [STEPS.WHAT_TRAVELERS_SHOULD_BRING]: 'Traveler Requirements', // Ce que les voyageurs doivent apporter
    [STEPS.TRAVELER_REQUIREMENTS]: 'Traveler Conditions', // Conditions relatives aux voyageurs
    [STEPS.TITLE]: 'Title',                           // Titre
    [STEPS.PHOTOS]: 'Photos',                         // Photos
    [STEPS.SETTINGS]: 'Settings',                     // Paramètres
    [STEPS.PROPOSAL_SENT]: 'Proposal Sent',           // Proposition envoyée
  };
  