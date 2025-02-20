import { prisma } from "@/lib/prisma";
import { formatDistanceToNow } from "date-fns";
import { SubmissionSearch } from "@/components/admin/SubmissionSearch";
import { Prisma } from "@prisma/client";

const ITEMS_PER_PAGE = 10;

interface PageProps {
  searchParams: Promise<{
    q?: string;
    status?: string;
    page?: string;
  }>;
}

export default async function SubmissionsPage({ searchParams }: PageProps) {
  // Resolve the searchParams promise
  const params = await searchParams;

  const page = Number(params.page) || 1;
  const query = params.q || "";
  const status = params.status || "";

  // Build filter conditions
  const where: Prisma.ContactSubmissionWhereInput = {
    AND: [] as Prisma.ContactSubmissionWhereInput[]
  };

  // Add search conditions if query exists
  if (query) {
    (where.AND as Prisma.ContactSubmissionWhereInput[]).push({
      OR: [
        { name: { contains: query, mode: 'insensitive' } },
        { email: { contains: query, mode: 'insensitive' } },
        { subject: { contains: query, mode: 'insensitive' } }
      ]
    });
  }

  // Add status filter if selected
  if (status) {
    (where.AND as Prisma.ContactSubmissionWhereInput[]).push({ status });
  }

  // If no conditions, remove AND array
  if ((where.AND as Prisma.ContactSubmissionWhereInput[]).length === 0) {
    delete where.AND;
  }

  // Get total count for pagination
  const total = await prisma.contactSubmission.count({ where });
  const totalPages = Math.ceil(total / ITEMS_PER_PAGE);

  // Get paginated results
  const submissions = await prisma.contactSubmission.findMany({
    where,
    orderBy: {
      createdAt: "desc",
    },
    skip: (page - 1) * ITEMS_PER_PAGE,
    take: ITEMS_PER_PAGE,
  });

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Contact Form Submissions</h2>
      
      <SubmissionSearch />

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Subject
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {submissions.map((submission) => (
              <tr key={submission.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {submission.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{submission.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{submission.subject}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    submission.status === 'replied' 
                      ? 'bg-green-100 text-green-800'
                      : submission.status === 'spam'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {submission.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                    {formatDistanceToNow(submission.createdAt, { addSuffix: true })}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <a 
                    href={`/admin/submissions/${submission.id}`}
                    className="text-red-600 hover:text-red-900"
                  >
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-700">
                Showing {(page - 1) * ITEMS_PER_PAGE + 1} to{" "}
                {Math.min(page * ITEMS_PER_PAGE, total)} of {total} results
              </div>
              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <a
                    key={pageNum}
                    href={`/admin/submissions?page=${pageNum}${
                      query ? `&q=${query}` : ""
                    }${status ? `&status=${status}` : ""}`}
                    className={`px-4 py-2 rounded-lg ${
                      page === pageNum
                        ? "bg-red-600 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {pageNum}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {submissions.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No submissions found.
          </div>
        )}
      </div>
    </div>
  );
} 