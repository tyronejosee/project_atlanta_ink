import type { ApplicantValues } from "@/types";

import { fetcher } from "@/lib/api";
import { USE_API } from "@/config/constants";

export async function createApplicant(applicant: ApplicantValues) {
  if (USE_API) return await fetcher("/applicants", "POST", { data: applicant });
  const applicants: ApplicantValues[] = [];
  const alreadyExists = applicants.some((a) => a.email === applicant.email);
  if (!alreadyExists) {
    applicants.push(applicant);
  }
  return { status: 201 };
}
