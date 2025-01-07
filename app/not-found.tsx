import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-y-6 bg-primary-50">
      <h2 className="text-2xl font-bold tracking-widest text-primary-800">
        Not Found
      </h2>
      <p className="text-lg tracking-wider text-primary-600">
        Could not find requested resource
      </p>
      <Link
        href="/"
        className="rounded-lg border-2 border-accent bg-primary-100 px-4 py-2 text-primary-600 transition-colors hover:bg-accent hover:text-primary-100"
      >
        Return Home
      </Link>
    </div>
  );
}
