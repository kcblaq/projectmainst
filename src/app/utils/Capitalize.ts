export function capitalizeFirstLetter(word:string) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export function capitalizeName(firstName: string, lastName:string) {
    const capitalizedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    const capitalizedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    const fullName = capitalizedFirstName + ' ' + capitalizedLastName;
    
    return fullName;
  }


  export function capitalizeInitials(firstName: string | undefined, lastName: string | undefined) {
    if (!firstName || !lastName) {
        return ''; 
    }

    const capitalizedFirstName = firstName.charAt(0).toUpperCase();
    const capitalizedLastName = lastName.charAt(0).toUpperCase();
    return capitalizedFirstName + capitalizedLastName;
}
