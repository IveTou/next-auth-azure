/* import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about',
} */

/* export { default } from "next-auth/middleware"

export const config = {
  matcher: ["/dashboard"],
}
*/
 
import { withAuth } from "next-auth/middleware"
 
 export default withAuth({
  secret: process.env.AZURE_AD_CLIENT_SECRET
})

export const config = {
  matcher: ["/((?!$).*)"],
}


