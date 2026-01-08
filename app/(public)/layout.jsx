import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Navbar/Navbar";

export default function PublicLayout({ children }) {
  return (
    <div className="relative">
      <Navbar />


      <main className="min-h-[90vh] overflow-hidden">
        {children}




        <Footer />
      </main>

    </div>
  );
}