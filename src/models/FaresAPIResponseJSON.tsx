export interface FaresAPIResponseJSON {
    numberOfAdults:        number;
    numberOfChildren:      number;
    isSemiFlexibleRoute:   boolean;
    outboundJourneys:      OutboundJourney[];
    inboundJourneys:       OutboundJourney[];
    nextOutboundQuery:     string;
    previousOutboundQuery: string;
    nextInboundQuery:      string;
    previousInboundQuery:  string;
    bookingMessages:       BookingMessages;
}

export interface BookingMessages {
    messageCentreTitle: string;
    doNotShowAgainText: string;
    messages:           Message[];
}

export interface Message {
    id:                       number;
    title:                    string;
    message:                  string;
    messageDismissText:       string;
    showBookingFormOnDismiss: boolean;
}

export interface OutboundJourney {
    journeyOptionToken:       string;
    journeyId:                string;
    originStation:            DestinationStation;
    destinationStation:       DestinationStation;
    departureTime:            Date;
    arrivalTime:              Date;
    departureRealTime:        Date;
    arrivalRealTime:          Date;
    status:                   string;
    primaryTrainOperator:     PrimaryTrainOperator;
    legs:                     Leg[];
    tickets:                  Ticket[];
    journeyDurationInMinutes: number;
    isFastestJourney:         boolean;
    isOvertaken:              boolean;
    bulletins:                Bulletin[];
    stationMessages:          StationMessage[];
    isEligibleForLoyalty:     boolean;
}

export interface Bulletin {
    id:                number;
    title:             string;
    description:       string;
    category:          string;
    url:               string;
    severity:          string;
    usingDefaultTitle: boolean;
}

export interface DestinationStation {
    displayName: string;
    crs:         string;
    nlc:         string;
}

export interface Leg {
    type:                             string;
    legId:                            string;
    rsid?:                            string;
    mode:                             string;
    origin:                           DestinationStation;
    destination:                      DestinationStation;
    durationInMinutes:                number;
    departureDateTime?:               Date;
    arrivalDateTime?:                 Date;
    departureRealTime?:               Date;
    arrivalRealTime?:                 Date;
    status?:                          string;
    trainOperator?:                   PrimaryTrainOperator;
    trainFacilities?:                 PrimaryTrainOperator[];
    additionalFacilitiesInformation?: string;
    reservedSeats?:                   ReservedSeat[];
    isAzuma?:                         boolean;
    liveJourneyId?:                   string;
    trainInformation?:                TrainInformation;
    firstClassDiningOption?:          string;
    firstClassDiningOptionDetails?:   FirstClassDiningOptionDetails;
    iptisTripIdentifier?:             string;
}

export interface FirstClassDiningOptionDetails {
    name:        string;
    description: string;
}

export interface ReservedSeat {
    coachId:        string;
    seatNumber:     string;
    isCountedPlace: boolean;
    attributes:     Attributes;
}

export interface Attributes {
    facing:                  string;
    tableSeat:               boolean;
    windowSeat:              boolean;
    wheelchairSpace:         boolean;
    wheelchairCompanionSeat: boolean;
}

export interface PrimaryTrainOperator {
    code: string;
    name: string;
}

export interface TrainInformation {
    trainName:   string;
    direction:   string;
    templateUrl: string;
    coaches:     Coach[];
}

export interface Coach {
    coachClass:    string;
    coachId:       string;
    facilityIcons: string[];
}

export interface StationMessage {
    stationMessageId: string;
    crsList:          string[];
    severity:         string;
    category:         string;
    message:          string;
}

export interface Ticket {
    ticketOptionToken:           string;
    name:                        string;
    description:                 string;
    priceInPennies:              number;
    cojPriceInPennies:           number;
    pricingItem:                 PricingItem;
    ticketType:                  string;
    ticketClass:                 string;
    ticketCategory:              string;
    numberOfTickets:             number;
    ticketsRemaining:            number;
    fareId:                      string;
    fareSignature:               string;
    fareOriginLocationName:      string;
    fareDestinationLocationName: string;
    fareSource:                  string;
    ftot:                        string;
    upgradeDetails:              UpgradeDetails;
    quotaControlled:             string;
    isValidForLoyaltyCredit:     boolean;
    isValidForAdr:               boolean;
    isCojOriginalJourney:        boolean;
    isIncludedInOriginalTicket:  boolean;
    isFullyReserved:             boolean;
    isCheapestTicket:            boolean;
    outboundValidity:            string;
    inboundValidity:             string;
    isFlexiAdvanceProduct:       boolean;
    originFlexWindowSize:        number;
    routeRestriction:            RouteRestriction;
}

export interface PricingItem {
    breakdown:                 PricingItemBreakdown[];
    addOns:                    AddOn[];
    discounts:                 Discounts;
    subTotalInPennies:         number;
    includedAdminFeeInPennies: number;
    deltaFareInPennies:        number;
}

export interface AddOn {
    name:          string;
    count:         number;
    costInPennies: number;
}

export interface PricingItemBreakdown {
    passenger:           string;
    passengerStatus:     string;
    ticketCount:         number;
    costInPennies:       number;
    discountDescription: string;
    adminFeeInPennies:   number;
}

export interface Discounts {
    preDiscountSubTotalInPennies: number;
    totalValueInPennies:          number;
    breakdown:                    DiscountsBreakdown[];
}

export interface DiscountsBreakdown {
    name:           string;
    valueInPennies: number;
    numberOfUnits:  number;
    discountType:   string;
}

export interface RouteRestriction {
    restrictionCode:         string;
    restrictionDisplayName:  string;
    restrictionPrintingName: string;
}

export interface UpgradeDetails {
    upgradeFareId:           string;
    type:                    string;
    fareDifferenceInPennies: number;
}