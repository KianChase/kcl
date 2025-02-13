import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type Params = Promise<{ id: string }>;

export default async function SubmissionDetailPage({
  params
}: {
  params: Params
}) {
  const { id } = await params;
  const submission = await prisma.contactSubmission.findUnique({
    where: { id }
  });

  if (!submission) {
    notFound();
  }

  return (
    <div>
      <div className="mb-6">
        <Button
          variant="ghost"
          size="sm"
          icon={<ArrowLeft className="h-4 w-4" />}
          iconPosition="left"
          asChild
        >
          <Link href="/admin/submissions">
            Back to Submissions
          </Link>
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-2xl font-bold">{submission.subject}</h2>
          <span className={`px-2 py-1 text-sm font-semibold rounded-full ${
            submission.status === "pending"
              ? "bg-yellow-100 text-yellow-800"
              : submission.status === "replied"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}>
            {submission.status}
          </span>
        </div>

        <dl className="grid grid-cols-2 gap-x-4 gap-y-6">
          <div>
            <dt className="text-sm font-medium text-gray-500">Name</dt>
            <dd className="mt-1 text-sm text-gray-900">{submission.name}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Email</dt>
            <dd className="mt-1 text-sm text-gray-900">{submission.email}</dd>
          </div>
          <div className="col-span-2">
            <dt className="text-sm font-medium text-gray-500">Message</dt>
            <dd className="mt-1 text-sm text-gray-900 whitespace-pre-wrap">{submission.message}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">IP Address</dt>
            <dd className="mt-1 text-sm text-gray-900">{submission.ipAddress}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Date</dt>
            <dd className="mt-1 text-sm text-gray-900">
              {format(submission.createdAt, "PPpp")}
            </dd>
          </div>
          <div className="col-span-2">
            <dt className="text-sm font-medium text-gray-500">User Agent</dt>
            <dd className="mt-1 text-sm text-gray-900">{submission.userAgent}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
} 