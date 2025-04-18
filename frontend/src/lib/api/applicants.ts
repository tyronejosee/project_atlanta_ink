import { fetcher } from "@/lib/api";
import { USE_API } from "@/config/constants";
import { IApplicantValues } from "@/interfaces";

export async function createApplicant(applicant: IApplicantValues) {
  if (USE_API) return await fetcher("/applicants", "POST", { data: applicant });
  const applicants: IApplicantValues[] = [];
  const alreadyExists = applicants.some((a) => a.email === applicant.email);
  if (!alreadyExists) {
    applicants.push(applicant);
  }
  return { status: 201 };
}
