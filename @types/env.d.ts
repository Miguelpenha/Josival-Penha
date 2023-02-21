declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NEXT_PUBLIC_DOMAIN: string
        NEXT_PUBLIC_URL_FORM: string
        NEXT_PUBLIC_ACCESS_KEY_FORM: string
      }
    }
}

export {}