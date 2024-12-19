import { useToast } from 'vue-toastification'
import type { CountrySelectValue } from '~/types'

export enum STEPSFOREXPERIENCE {
  GETTINGSTARTED = 0,              // Step 1: Getting Started
  YOUR_IDEA = 1,                   // Step 2: Your Idea
  WHAT_WE_ARE_LOOKING_FOR = 2,     // Step 3: What We Are Looking For
  EXPERIENCE_PAGE = 3,             // Step 4: Experience Page
  PROGRAM_DETAILS = 4,             // Step 5: Program Details
  ABOUT_YOU = 5,                   // Step 6: About You
  LOCATION = 6,                    // Step 7: Location
  PROVIDED_ITEMS = 7,              // Step 8: Provided Items
  WHAT_TRAVELERS_SHOULD_BRING = 8, // Step 9: What Travelers Should Bring
  TRAVELER_REQUIREMENTS = 9,       // Step 10: Traveler Requirements
  TITLE = 10,                      // Step 11: Title
  PHOTOS = 11,                     // Step 12: Photos
  SETTINGS = 12,                   // Step 13: Settings
  PROPOSAL_SENT = 13               // Step 14: Proposal Sent
}



export const STEP_LABELS = {


  [STEPSFOREXPERIENCE.GETTINGSTARTED]: 'Getting Started ',                   // Votre idée

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

const STORAGE_KEY = 'experienceValues';
const EXPIRATION_KEY = 'experienceValuesExpiration';
const STEPS_KEY = 'experienceSteps';


export function useCreateExperience() {
  const ExperienceValues = reactive({
    // Basic Information
    id: '', // Unique ID (typically generated)
    userId: '', // User ID reference
    title: '',
    description: '',
    category: '',
    imageSrc: '', // Main image source
    imagePublicId: '', // Optional public ID for images

    // Experience-Specific Fields
    duration: 60, // Default duration in minutes
    groupSize: 1, // Default max participants
    pricePerPerson: 0, // Price per person
    location: '',
    meetingPoint: '',

    // Additional Details
    language: '', // Default language of experience
    providedItems: '', // Items provided by host
    travelerRequirements: '', // Traveler requirements
    whatToBring: '', // Suggested items for travelers to bring

    // Guidelines and Rules
    ageRestriction: '', // Age restrictions, if any
    cancellationPolicy: '', // Cancellation policy
    safetyGuidelines: '', // Safety tips or rules

    // Time-Related Fields
    availableDates: '', // JSON string for available dates
    startTime: '', // Experience start time
    endTime: '', // Experience end time

    // Selection Fields
    experienceAccessoriesSelected: '', // Accessories selection
    experienceGuidelinesSelected: '', // Guidelines selection

    // Metadata
    createdAt: new Date(), // Default to now
    updatedAt: new Date(), // Auto-updates when modified
  });


  const isLoading = ref(false)
  const steps = ref(STEPSFOREXPERIENCE.GETTINGSTARTED)

  const errors = reactive<{ [key: string]: string }>({
    title: '',
    description: '',
    price: '',
  })

  function onBack() {
    steps.value--
    saveToLocalStorage()
  }

  function onNext() {
    if (steps.value === STEPSFOREXPERIENCE.PROPOSAL_SENT ) return
    steps.value++
    saveToLocalStorage()
  }

  

  // function add(title: string) {
  //   if (title === 'Guests') {
  //     ExperienceValues.guestCount++
  //   } else if (title === 'Rooms') {
  //     ExperienceValues.roomCount++
  //   } else {
  //     ExperienceValues.bathroomCount++
  //   }
  //   saveToLocalStorage()
  // }

  // function reduce(title: string) {
  //   if (title === 'Guests' && ExperienceValues.guestCount > 1) {
  //     ExperienceValues.guestCount--
  //   } else if (title === 'Rooms' && ExperienceValues.roomCount > 1) {
  //     ExperienceValues.roomCount--
  //   } else if (title === 'Bathrooms' && ExperienceValues.bathroomCount > 1) {
  //     ExperienceValues.bathroomCount--
  //   }
  //   saveToLocalStorage()
  // }

  
  function saveToLocalStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ExperienceValues))
    localStorage.setItem(STEPS_KEY, steps.value.toString())
    localStorage.setItem(EXPIRATION_KEY, (Date.now() + 15 * 60 * 1000).toString())
  }
  // Return ExperienceValues for use in Vue components
  //    return { ExperienceValues };

  return {
    ExperienceValues,
    isLoading,
    steps,
    errors,
    onBack,
    onNext,
    // add,
    // reduce,
    // categorySelected,
    // locationSelected,
    // createListing,
    // imagePublicId,
    // setPropertyAccessoriesSelected,
    // setPropertyGuidelinesSelected,
    // setRoomInfoFormSelected,
    // setAccommodationSelectionSelected,
    // setRoomAmenitiesSelected,
  }
}

