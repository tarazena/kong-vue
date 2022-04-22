export interface Service {
  id: string
  name: string
  description: string
  versions: {
    id: string
    name: string
    description: string
  }[]
}
