export { default } from "next-auth/middleware"

// Without a default mathcer this one line will apply to next auth to entire project

// example for a matcher would be something like this
// export const config = { matcher:  ["/extra", "/dashboard"] }