
import type { Listing, Reservation } from '~/types'

export interface ImageProps {
    src: string;
    alt: string;
    className?: string;
  }
  
  export interface DestinationProps {
    title: string;
    iconSrc: string;
  }


  export type ListingCardProps = {
    listing: Listing
    reservation?: Reservation
    disabled?: boolean
    actionLabel?: string
    actionId?: string
    totalPrice?: number
  }