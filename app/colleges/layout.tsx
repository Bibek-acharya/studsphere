import CollegeNavbar from "@/components/college/college-navbar"

export default function CollegesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <CollegeNavbar />
      {children}
    </>
  )
}
