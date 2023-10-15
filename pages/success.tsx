import { useRouter } from "next/router"
import { useEffect } from "react"

interface IQuery {
    name: string
    email: string
    telephone: string
}

function Success() {
    const router = useRouter()
    const { name, email, telephone } = router.query as unknown as IQuery
    
    useEffect(() => {
        if (router.query) {
            const text = `Nome: ${name}%0aE-mail: ${email}%0aTelefone: ${telephone}%0a%0aOlá, gostaria de agendar uma visita a escola! 😄`
            
            router.push(`https://api.whatsapp.com/send?phone=558194997501&text=${text}`)
        }
    }, [router.query])

    return null
}

export default Success