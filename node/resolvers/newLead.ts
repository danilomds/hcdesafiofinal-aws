import type { LeadInput } from '../typings/custom'

interface Args {
  lead: LeadInput
}

export const newLead = (
  _: any,
  { lead }: Args,
  { clients: { lead: Lead } }: Context
) => Lead.newLead(lead)
