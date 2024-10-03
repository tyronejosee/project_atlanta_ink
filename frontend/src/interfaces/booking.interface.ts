export interface IBookingValues {
  firstName: string;
  lastName: string;
  phone: string;
  notes: string;
  artist: string;
  budget: string;
  placement: string;
  hasWorkInProgress: boolean;
  firstTimeSession: boolean;
  file: FileList;
}

export interface IBookingQueryParams {
  artist?: string;
  firstName?: string;
  firstTime?: boolean;
}
