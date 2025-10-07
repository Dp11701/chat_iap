export default function AllInOneButton(props: { title: string }) {
  return (
    <div className="flex items-center justify-center w-full">
      {/* Left line + diamond */}
      <div className="flex items-center flex-1 justify-end">
        {/* line gradient từ diamond -> ra xa */}
        <div className="h-[2px] sm:w-32 w-20 bg-gradient-to-l from-emerald-500/60 to-transparent" />
        <div className="w-3 h-3 rotate-45 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.9)]" />
      </div>

      {/* Center button */}
      <button
        className="font-[500] text-[14px] leading-[20px] sm:font-[600] xl:text-[20px] xl:leading-[32px] sm:text-[18px] sm:leading-[28px] mx-4 sm:px-10 px-6 py-3 sm:rounded-[12px] rounded-[8px] text-white shadow-lg transition"
        style={{
          background:
            "linear-gradient(207.56deg, #2A9476 -29.94%, rgba(42, 55, 58, 0.15) 72.76%)",
        }}
      >
        {props.title}
      </button>

      {/* Right line + diamond */}
      <div className="flex items-center flex-1 justify-start">
        <div className="w-3 h-3 rotate-45 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.9)]" />
        {/* line gradient từ diamond -> ra xa */}
        <div className="h-[2px] sm:w-32 w-20 bg-gradient-to-r from-emerald-500/60 to-transparent" />
      </div>
    </div>
  );
}
