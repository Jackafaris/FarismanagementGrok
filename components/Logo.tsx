import Image from "next/image";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/logo.png"
        alt="Faris Management logo"
        width={compact ? 36 : 40}
        height={compact ? 36 : 40}
        className="rounded-lg object-cover"
      />
      {!compact && (
        <div className="leading-tight">
          <div className="text-lg font-semibold tracking-tight">Faris Management</div>
          <div className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
            Saint Louis Rentals
          </div>
        </div>
      )}
    </div>
  );
}
