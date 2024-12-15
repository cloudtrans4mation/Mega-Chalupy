import { useToast } from 'vue-toastification'
import type { CountrySelectValue } from '~/types'

export enum STEPSFOREXPERIENCE {
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
    [STEPSFOREXPERIENCE.YOUR_IDEA]: 'Your Idea',                   // Votre idée
    [STEPSFOREXPERIENCE.WHAT_WE_ARE_LOOKING_FOR]: 'What We Are Looking For', // Ce que nous recherchons
    [STEPSFOREXPERIENCE.EXPERIENCE_PAGE]: 'Experience Page',       // Page de l'expérience
    [STEPSFOREXPERIENCE.PROGRAM_DETAILS]: 'Program Details',       // Au programme
    [STEPSFOREXPERIENCE.ABOUT_YOU]: 'About You',                   // À propos de vous
    [STEPSFOREXPERIENCE.LOCATION]: 'Location',                     // Emplacement
    [STEPSFOREXPERIENCE.PROVIDED_ITEMS]: 'Provided Items',         // Ce qui est fourni
    [STEPSFOREXPERIENCE.WHAT_TRAVELERS_SHOULD_BRING]: 'Traveler Requirements', // Ce que les voyageurs doivent apporter
    [STEPSFOREXPERIENCE.TRAVELER_REQUIREMENTS]: 'Traveler Conditions', // Conditions relatives aux voyageurs
    [STEPSFOREXPERIENCE.TITLE]: 'Title',                           // Titre
    [STEPSFOREXPERIENCE.PHOTOS]: 'Photos',                         // Photos
    [STEPSFOREXPERIENCE.SETTINGS]: 'Settings',                     // Paramètres
    [STEPSFOREXPERIENCE.PROPOSAL_SENT]: 'Proposal Sent',           // Proposition envoyée
  };
  

  export function useCreateExperience() {  
    const listingValues = reactive({
      category: '',
      locationValue: null as CountrySelectValue | null,
      guestCount: 1,
      theme: 1,
      bathroomCount: 1,
      imageSrc: [] as string[],  // imageSrc is an empty array of strings 
      price: 1,
      title: '',
      description: '',
    
      // Additional fields
      cotAvailability: 'true', // Default as empty string or null if optional
      ownersMessage: 'Welcome', // Default as empty string or null if optional
      childrenAllowance: 'Allowed', // Default to an allowed enum value
      cotAvailabilityChild: 'Available', // Default to an available enum value
      neighboringActivity: 'yes', // Default as empty string
      eventsAllowance: 'Allowed', // Default to an allowed enum value
      numberOfRooms: 1, // Default as 1
      squareMeterCount: 1, // Default as 1
      smokingAllowance: 'Allowed', // Default to an allowed enum value
      propertyType: 'Entire', // Default to an enum value
    
      // Selection fields
      PropertyAccessoriesSelected: 'dd',
      PropertyGuidelinesSelected: 'dd',
      RoomInfoFormSelected: 'dd',
      AccommodationSelectionSelected: 'dd',
      RoomAmenitiesSelected: 'dd',
    });
  }