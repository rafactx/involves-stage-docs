import { useEffect } from 'react'

export default function DocsRedirect() {
  useEffect(() => {
    const lang = navigator.language.startsWith('es')
      ? 'es'
      : navigator.language.startsWith('fr')
      ? 'fr'
      : navigator.language.startsWith('en')
      ? 'en'
      : 'pt'

    window.location.replace(`https://involves-stage-docs-docs.vercel.app/docs/${lang}/intro`)
  }, [])

  return null
}
