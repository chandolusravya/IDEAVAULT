//not really required
"use client"
import { useUser } from "@clerk/nextjs";
import Sidebar from "@/components/Sidebar";
import { useRouter } from "next/navigation";


const MainLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    const { user, isLoaded } = useUser();
    const router = useRouter();

    

    // Redirect to login page if user is not authenticated
    if (isLoaded && !user) {
       
            router.push('/sign-in');
        return null; // Render nothing while redirecting
        
    }

    return (
        <div>
            {isLoaded && user && (
              
                <div className="h-full flex dark:bg-[#1F1F1F]">
                 <Sidebar/>
                
                    {/* Add your sidebar or navigation here */}
                    <main className="flex-1 h-full overflow-y-auto">{children}</main>
                    </div>
             
            )}
        </div>
    );
}

export default MainLayout;
