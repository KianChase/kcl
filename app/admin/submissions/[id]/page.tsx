import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { format } from "date-fns";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/admin/StatusBadge";


interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function SubmissionDetailPage({ params }: PageProps) {
  const { id } = await params;
  const submission = await prisma.contactSubmission.findUnique({
    where: { id }
  });

  if (!submission) {
    notFound();
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/submissions">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Submissions
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">Submission Details</h1>
        </div>
        <StatusBadge status={submission.status} />
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="px-6 py-4 border-b">
          <h2 className="text-lg font-medium">Contact Information</h2>
        </div>

        <dl className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div>
            <dt className="text-sm font-medium text-gray-500">Name</dt>
            <dd className="mt-1 text-sm text-gray-900">{submission.name}</dd>
          </div>
          
          <div>
            <dt className="text-sm font-medium text-gray-500">Email</dt>
            <dd className="mt-1 text-sm text-gray-900">
              <a 
                href={`mailto:${submission.email}`}
                className="text-red-600 hover:text-red-900"
              >
                {submission.email}
              </a>
            </dd>
          </div>

          <div>
            <dt className="text-sm font-medium text-gray-500">Subject</dt>
            <dd className="mt-1 text-sm text-gray-900">{submission.subject}</dd>
          </div>

          <div>
            <dt className="text-sm font-medium text-gray-500">Submitted</dt>
            <dd className="mt-1 text-sm text-gray-900">
              {format(submission.createdAt, "PPpp")}
            </dd>
          </div>

          <div className="col-span-2">
            <dt className="text-sm font-medium text-gray-500">Message</dt>
            <dd className="mt-1 text-sm text-gray-900 whitespace-pre-wrap">
              {submission.message}
            </dd>
          </div>

          <div>
            <dt className="text-sm font-medium text-gray-500">IP Address</dt>
            <dd className="mt-1 text-sm text-gray-900">{submission.ipAddress}</dd>
          </div>

          <div>
            <dt className="text-sm font-medium text-gray-500">User Agent</dt>
            <dd className="mt-1 text-sm text-gray-900 truncate" title={submission.userAgent ?? ""}>
              {submission.userAgent}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
} 