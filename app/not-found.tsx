import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] px-4">
      <h2 className="text-2xl font-bold text-slate-900 mb-4">Page Not Found</h2>
      <p className="text-slate-600 mb-6">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Button asChild>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  )
}
