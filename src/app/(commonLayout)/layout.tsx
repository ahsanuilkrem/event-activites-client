
import { PublicFooter } from "@/src/components/shared/PublicFooter";
import PublicNavbar from "@/src/components/shared/PublicNavbar";

const CommonLayout = ({ children } : { children: React.ReactNode }) => {
    return (
        <>  
            <PublicNavbar/>
           <div className="min-h-svh">
             {children}
           </div>
            <PublicFooter/>
        </>
    );
};

export default CommonLayout;