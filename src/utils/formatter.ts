import { formatDistance, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'

function captalizedFirstLetter(dateString: string) {
  if (typeof dateString !== 'string' || dateString.length === 0) return ''

  return dateString.charAt(0).toUpperCase() + dateString.slice(1)
}

export function formatterDateDistance(dateString: string) {
  const dateStringToDateFormat = parseISO(dateString)
  const date = formatDistance(dateStringToDateFormat, new Date(), {
    addSuffix: true,
    locale: ptBR,
  })
  return captalizedFirstLetter(date)
}