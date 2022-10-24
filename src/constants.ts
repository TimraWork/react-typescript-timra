console.log('process.env.NODE_ENV =', process.env.NODE_ENV)
export const GOOGLE_CLIENT_ID =
process.env.NODE_ENV === 'development'
        ? '328002130937-d19l2vsfd9r1vmtjdar738gqs1dhnjfv.apps.googleusercontent.com'
        : '__328002130937-d19l2vsfd9r1vmtjdar738gqs1dhnjfv.apps.googleusercontent.com';