export const verifyCache = (cache: any): any | null => {
  if (!cache) return null
  try {
    return JSON.parse(cache)
  } catch (error) {
    return error
  }
}

export const saveCache = (data: any) => {
  return {
    value: JSON.stringify(data),
    expire: { EX: 60 }
  }
}
