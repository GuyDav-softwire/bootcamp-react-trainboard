export interface FaresAPIResponseJSON {
    numberOfAdults:        number;
    numberOfChildren:      number;
    outboundJourneys:      OutboundJourney[];
    nextOutboundQuery:     string;
    previousOutboundQuery: string;
    bookingMessages:       BookingMessages;
    isSemiFlexibleRoute:   boolean;
}
export interface BookingMessages {
    messageCentreTitle: string;
    doNotShowAgainText: string;
    messages:           any[];
}
export interface OutboundJourney {
    journeyOptionToken:       string;
    journeyId:                string;
    originStation:            DestinationStation;
    destinationStation:       DestinationStation;
    departureTime:            Date;
    arrivalTime:              Date;
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
    departureRealTime?:       Date;
}
export interface Bulletin {
    id:                number;
    title:             string;
    description:       string;
    category:          string;
    severity:          string;
    usingDefaultTitle: boolean;
}
export interface DestinationStation {
    displayName: string;
    nlc:         string;
    crs:         string;
}

export interface Leg {
    legId:                           string;
    rsid:                            string;
    origin:                          DestinationStation;
    destination:                     DestinationStation;
    type:                            string;
    mode:                            string;
    durationInMinutes:               number;
    departureDateTime:               Date;
    arrivalDateTime:                 Date;
    status:                          string;
    trainOperator:                   PrimaryTrainOperator;
    trainFacilities:                 PrimaryTrainOperator[];
    additionalFacilitiesInformation: string;
    isAzuma:                         boolean;
    firstClassDiningOption:          string;
    firstClassDiningOptionDetails:   FirstClassDiningOptionDetails;
    iptisTripIdentifier:             string;
    departureRealTime?:              Date;
    arrivalRealTime?:                Date;
}
export interface FirstClassDiningOptionDetails {
    name:        string;
    description: null;
}
export interface PrimaryTrainOperator {
    name: string;
    code: string;
}
export interface StationMessage {
    stationMessageId: string;
    crsList:          string[];
    severity:         string;
    category:         string;
    message:          string;
}
export interface Ticket {
    fareId:                      string;
    fareSignature:               string;
    fareOriginLocationName:      FareOriginLocationName;
    fareDestinationLocationName: string;
    fareSource:                  FareSource;
    ftot:                        string;
    ticketOptionToken:           string;
    ticketType:                  TicketType;
    ticketClass:                 TicketClass;
    ticketCategory:              TicketCategory;
    name:                        string;
    description:                 string;
    priceInPennies:              number;
    pricingItem:                 PricingItem;
    numberOfTickets:             number;
    quotaControlled:             QuotaControlled;
    isValidForLoyaltyCredit:     boolean;
    isValidForAdr:               boolean;
    outboundValidity:            OutboundValidity;
    inboundValidity:             InboundValidity;
    isFlexiAdvanceProduct:       boolean;
    originFlexWindowSize:        number;
    isCheapestTicket:            boolean;
    routeRestriction:            RouteRestriction;
    upgradeDetails?:             UpgradeDetails;
}
export enum FareOriginLocationName {
    LondonKingsCross = 'London Kings Cross',
    LondonTerminals = 'London Terminals',
}
export enum FareSource {
    O = 'O',
}
export enum InboundValidity {
    M0 = 'M0',
}
export enum OutboundValidity {
    D1 = 'D1',
    D2 = 'D2',
}
export interface PricingItem {
    subTotalInPennies: number;
    breakdown:         Breakdown[];
}
export interface Breakdown {
    passenger:       Passenger;
    passengerStatus: string;
    ticketCount:     number;
    costInPennies:   number;
}
export enum Passenger {
    Adult = 'adult',
}
export enum QuotaControlled {
    No = 'no',
    Yes = 'yes',
}
export interface RouteRestriction {
    restrictionCode:         string;
    restrictionDisplayName:  string;
    restrictionPrintingName: RestrictionPrintingName;
}
export enum RestrictionPrintingName {
    OnLondonNorthEasternRailwayServicesOnly = 'On London North Eastern Railway services only.',
    SpecifiedLNERTrainsConnectingServices = 'Specified LNER trains & connecting services.',
    ValidViaAnyPermittedRoute = 'Valid via any permitted route',
}
export enum TicketCategory {
    Advance = 'advance',
    Anytime = 'anytime',
    Offpeak = 'offpeak',
}
export enum TicketClass {
    First = 'first',
    Standard = 'standard',
}
export enum TicketType {
    Single = 'single',
}
export interface UpgradeDetails {
    upgradeFareId:           string;
    type:                    string;
    fareDifferenceInPennies: number;
}