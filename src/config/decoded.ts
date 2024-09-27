export function decodeJWT(token: string) {
  try {
    return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString())
  } catch (error) {
    throw new Error("Invalid JWT token")
  }
}
