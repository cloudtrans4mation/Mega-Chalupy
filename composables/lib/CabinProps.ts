export interface HotelInfoProps {
    checkInTime: string;
    checkOutTime: string;
    cancellationPolicy: string;
    childrenPolicy: {
      ageRestriction: string;
      charges: string;
      additionalInfo: string;
    };
    cotPolicy: {
      ageRange: string;
      price: string;
      availability: string;
    };
    ageRestriction: string;
    paymentInfo: string;
    smokingPolicy: string;
    partyPolicy: string;
    quietHours: string;
    petPolicy: string;
  }
