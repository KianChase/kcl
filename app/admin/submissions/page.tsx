import { prisma } from "@/lib/prisma";
import { formatDistanceToNow } from "date-fns";
import { SubmissionSearch } from "@/components/admin/SubmissionSearch";

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
  const where = {
    AND: [
      {
        OR: query
          ? [
              { name: { contains: query, mode: "insensitive" } },
              { email: { contains: query, mode: "insensitive" } },
              { subject: { contains: query, mode: "insensitive" } },
            ]
          : undefined,
      },
      status ? { status } : undefined,
    ].filter(Boolean),
  };

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
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Subject
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {submissions.map((submission) => (
              <tr key={submission.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{submission.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{submission.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{submission.subject}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    submission.status === "pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : submission.status === "replied"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}>
                    {submission.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {formatDistanceToNow(submission.createdAt, { addSuffix: true })}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href={`/admin/submissions/${submission.id}`} className="text-red-600 hover:text-red-900">
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-6 flex justify-center gap-2">
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
      )}

      {submissions.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No submissions found.
        </div>
      )}
    </div>
  );
} 