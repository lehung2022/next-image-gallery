import Link from "next/link";

const NihonGenerals = () => {
  return (
    <>
    <div className={`flex flex-col items-center p-10`}>
      <div className="text-yellow-50">
        This is where I will put the Server Component into practice
      </div>
         {/* Back Button */}
         <Link href="/generals">
          <button className="text-white mt-4 bg-slate-950/50 hover:bg-slate-950 px-4 py-2 rounded-lg mb-4">
            ← Back
          </button>
        </Link>
      </div>
    </>
  );
};

export default NihonGenerals;
