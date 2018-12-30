// Interface - model User data:
export interface User {
   firstName: string,
   lastName: string,
   email: string,
   isActive?: boolean,
   registered?: any,
   hide?: boolean
}

// Adding ? next to the property name(s) makes these properties optional.