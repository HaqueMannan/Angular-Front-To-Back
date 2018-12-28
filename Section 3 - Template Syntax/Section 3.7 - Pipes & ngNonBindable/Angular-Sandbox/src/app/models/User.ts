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
   isActive?: boolean,
   balance?: number,
   registered?: any
}

// Adding ? next to the property name(s) makes these properties optional.