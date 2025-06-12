import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function DocsRedirect() {
  const router = useRouter()

  useEffect(() => {
    const lang = navigator.language.startsWith('es')
      ? 'es'
      : navigator.language.startsWith('fr')
      ? 'fr'
      : navigator.language.startsWith('en')
      ? 'en'
      : 'pt' // fallback

    const target = `https://involves-stage-docs-docs.vercel.app/docs/${lang}/intro`
    window.location.replace(target)
  }, [])

  return null
}
