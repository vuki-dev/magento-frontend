export default function SearchBar() {
  return (
    <input
      type="text"
      className="text-sm border border-slate-500 focus-visible:outline-none focus-visible:ring-0
                focus-visible:ring-offset-0 px-2 py-2 w-[50%] max-w-[600px] self-center"
      placeholder="Search Tires & Accessories"
    />
  );
}
