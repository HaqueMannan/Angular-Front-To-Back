// Interface - model User data:
export interface User {
   firstName: string,
   lastName: string,
   age?: number,
   address?: {
      street?: string,
      city?: string,
      country?: string
   },
   image?: string,
   isActive?: boolean
}

// Adding ? next to the property name(s) makes these properties optional.