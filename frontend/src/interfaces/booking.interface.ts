export interface IBookingValues {
  firstName: string;
  lastName: string;
  phone: string;
  notes: string;
  budget: string;
  placement: string;
  hasWorkInProgress: boolean;
  firstTimeSession: boolean;
  file: FileList;
}

export interface IBookingQueryParams {
  phone?: string;
  firstTime?: boolean;
}
