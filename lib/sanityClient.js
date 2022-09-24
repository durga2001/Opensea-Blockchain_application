import sanityClient from '@sanity/client'

export const client = sanityClient ({
    projectId: 'x2aq4mmf',
    dataset: 'production',
    apiVersion: 'v2021-03-25',
    token:'skudSg9aKmpdfHgWRoNwRlcv7WMqmJf4VGHlZqpYCNE1d7Nx1YMkfuCXspQj3IfGc7bw8FskdhBVTAIy5Q3B2VWst7V9d4MFa7bB3NldsHqYKzwT5fw7prIhANgMqs4ADJQdRGyUFieGDFnpLl3Raa13iGo1d6eCKGQZ0UlzwTRcoI0jmh5u',
    ignoreBrowserTokenWarning: true,
    useCdn: false

})