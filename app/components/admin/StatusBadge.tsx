interface StatusBadgeProps {
  status: string;
  className?: string;
}

export function StatusBadge({ status, className = "" }: StatusBadgeProps) {
  const colors = {
    replied: "bg-green-100 text-green-800",
    spam: "bg-red-100 text-red-800",
    pending: "bg-yellow-100 text-yellow-800"
  };

  return (
    <span className={`px-3 py-1 inline-flex text-sm font-medium rounded-full ${colors[status as keyof typeof colors]} ${className}`}>
      {status}
    </span>
  );
} 