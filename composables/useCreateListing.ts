import { useToast } from 'vue-toastification'
import type { CountrySelectValue } from '~/types'
import { toRaw } from 'vue';
 
export enum STEPS {
  GETTINGSTARTED = 0,
  CATEGORY = 1,
  ACCESSORIES = 2,
  SPECIFICATION = 3,
  HOSTINGOPTIONS = 4,
  ROOMAMENTIES = 5,
  THINGS = 6,
  IMAGES = 7,
  INFO = 8,
  LOCATION = 9,
  TYPE = 10,
  DESCRIPTION = 11,
  PRICE = 12,
  PUBLISH = 13
}

export const STEP_LABELS = {
  [STEPS.GETTINGSTARTED]: 'GETTING STARTED',
  [STEPS.CATEGORY]: 'Type',
  [STEPS.THINGS]: 'Amenities',
  [STEPS.IMAGES]: 'Photos',
  [STEPS.LOCATION]: 'Location',
  [STEPS.TYPE]: 'Hosting',
  [STEPS.INFO]: 'Details',
  [STEPS.DESCRIPTION]: 'Description',
  [STEPS.PRICE]: 'Price',
  [STEPS.PUBLISH]: 'Finish up',
};


const toast = useToast()
const STORAGE_KEY = 'listingValues'
const EXPIRATION_KEY = 'listingValuesExpiration'
const STEPS_KEY = 'listingSteps'

export function useCreateListing() {
  const listingValues = reactive({
    category: '',
    locationValue: null as CountrySelectValue | null,
    guestCount: 1,
    roomCount: 1,
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
    PropertyAccessoriesSelected: '',
    PropertyGuidelinesSelected: '',
    RoomInfoFormSelected: '',
    AccommodationSelectionSelected: '',
    RoomAmenitiesSelected: '',

    MapLibreLocation: '',        // New function for map location
    FullAddress: '',             // New function for full address
  });


  const isLoading = ref(false)
  const steps = ref(STEPS.GETTINGSTARTED)

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
    if (steps.value === STEPS.PUBLISH && !validDescription()) return
    steps.value++
    saveToLocalStorage()
  }

  function validDescription() {
    if (
      typeof listingValues.title !== 'string' ||
      listingValues.title.trim().length < 3
    ) {
      errors.title = 'Title must be at least 3 characters'
      return false
    } else if (
      typeof listingValues.description.trim() !== 'string' ||
      listingValues.description.trim().length < 10 ||
      listingValues.description.trim().length > 400
    ) {
      errors.description = 'Description must be between 10 and 400 characters long'
      return false
    }

    errors.title = ''
    errors.description = ''
    return true
  }

  function validPrice() {
    if (typeof listingValues.price !== 'number' || listingValues.price < 1) {
      errors.price = 'Price must be a number greater than 0'
      return false
    }
    errors.price = ''
    return true
  }

  async function createListing() {
    if (steps.value !== STEPS.PUBLISH) return
    if (!validPrice()) return

    try {
      isLoading.value = true
      const res = await $fetch('/api/v1/listings/create', {
        method: 'POST',
        body: listingValues,
      })
      if (res.statusCode === 201) {
        toast.success('Listing created!')
        clearLocalStorage()
        return navigateTo('/')
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.data.message)
    } finally {
      isLoading.value = false
    }
  }

  function categorySelected(category: string) {
    listingValues.category = category
    saveToLocalStorage()
  }

  function locationSelected(location: CountrySelectValue) {
    listingValues.locationValue = location
    saveToLocalStorage()
  }

  function imagePublicId(imagePublicId: string) {
    listingValues.imagePublicId = imagePublicId
  }

  function add(title: string) {
    if (title === 'Guests') {
      listingValues.guestCount++
    } else if (title === 'Rooms') {
      listingValues.roomCount++
    } else {
      listingValues.bathroomCount++
    }
    saveToLocalStorage()
  }

  function reduce(title: string) {
    if (title === 'Guests' && listingValues.guestCount > 1) {
      listingValues.guestCount--
    } else if (title === 'Rooms' && listingValues.roomCount > 1) {
      listingValues.roomCount--
    } else if (title === 'Bathrooms' && listingValues.bathroomCount > 1) {
      listingValues.bathroomCount--
    }
    saveToLocalStorage()
  }

  function saveToLocalStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(listingValues))
    localStorage.setItem(STEPS_KEY, steps.value.toString())
    localStorage.setItem(EXPIRATION_KEY, (Date.now() + 15 * 60 * 1000).toString())
  }

  function loadFromLocalStorage() {
    const savedValues = localStorage.getItem(STORAGE_KEY)
    const savedSteps = localStorage.getItem(STEPS_KEY)
    const expiration = localStorage.getItem(EXPIRATION_KEY)

    if (savedValues && savedSteps && expiration && Date.now() < parseInt(expiration)) {
      Object.assign(listingValues, JSON.parse(savedValues))
      steps.value = parseInt(savedSteps)
    } else {
      clearLocalStorage()
    }
  }

  function clearLocalStorage() {
    localStorage.removeItem(STORAGE_KEY)
    localStorage.removeItem(STEPS_KEY)
    localStorage.removeItem(EXPIRATION_KEY)
  }
  ///////////////////////////////////
  // Function to set PropertyAccessoriesSelected
  function setPropertyAccessoriesSelected(accessories: any) {
    listingValues.PropertyAccessoriesSelected = accessories;
    saveToLocalStorage()

  }

  // Function to set PropertyGuidelinesSelected
  function setPropertyGuidelinesSelected(guidelines: string) {
    listingValues.PropertyGuidelinesSelected = guidelines;
    saveToLocalStorage()

  }

  function setMapLibreLocation(MapLibreLocation: any) {
    listingValues.MapLibreLocation = MapLibreLocation;
    console.log(listingValues.MapLibreLocation)
    saveToLocalStorage()

  }

 
  function setFullAddress(fullAddress: any) {
    listingValues.FullAddress = fullAddress;
    saveToLocalStorage()

  }

  // Function to set RoomInfoFormSelected
  function setRoomInfoFormSelected(roomInfo: any) {
    listingValues.RoomInfoFormSelected = roomInfo;
    saveToLocalStorage()

  }

  // Function to set AccommodationSelectionSelected
  function setAccommodationSelectionSelected(accommodation: any) {
    listingValues.AccommodationSelectionSelected = toRaw(accommodation);
    saveToLocalStorage()

  }

  // Function to set RoomAmenitiesSelected
  function setRoomAmenitiesSelected(amenities: any) {
    listingValues.RoomAmenitiesSelected =  toRaw(amenities); // Convert formValues to raw data
    saveToLocalStorage()
  }

  /////////////////////////////////////
  if (import.meta.client) {
    loadFromLocalStorage()
  }

  return {
    listingValues,
    isLoading,
    steps,
    errors,
    onBack,
    onNext,
    add,
    reduce,
    categorySelected,
    locationSelected,
    createListing,
    imagePublicId,
    setPropertyAccessoriesSelected,
    setPropertyGuidelinesSelected,
    setRoomInfoFormSelected,
    setAccommodationSelectionSelected,
    setRoomAmenitiesSelected,
    setMapLibreLocation,
    setFullAddress
  }
}
