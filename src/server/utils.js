import { iterate } from '../utils'

export function extractHeaders ({ headers }) {
  const response = {}
  iterate(Object.keys(headers), (header) => {
    response[header.toLowerCase()] = headers[header]
  })
  return response
}
