export interface RegisterForm {
    personalInfo: {
        email: string,
        password: string,
        gender: string
    },
    cardHolder: string,
    cardNumber: string,
    validUntil: string,
    termsAndConditions: boolean
}