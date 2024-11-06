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



//working code for sidebar
 



return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={cn(
          'group/sidebar bg-[#fcf7ee] relative flex flex-col min-h-screen w-60 transition-all duration-300 ease-in-out z-[99999]',
          isMobile && "w-0"
        )}
      >
        {/* Collapse Button */}
        <div
          onClick={collapse}
          role="button"
          className={cn(
            'h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-200 dark:hover:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition',
            isMobile && "opacity-100"
          )}
        >
          <ChevronsLeft className="h-6 w-6" />
        </div>

        {/* Sidebar content */}
        <div>
          <p>Action items</p>
        </div>
        <div className="mt-4">
          <p>Documents</p>
        </div>

        {/* Resize Handle */}
        <div
          onMouseDown={handleMouseDown}
          onClick={resetWidth}
          className="opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0"
        />
      </aside>

      {/* Main Content (Navbar) */}
      <div
        ref={navbarRef}
        className={cn(
          "flex-1 transition-all duration-300 ease-in-out",
          isMobile && "w-full"
        )}
      >
        <nav className="bg-transparent px-3 py-14 w-full">
          {isCollapsed && (
            <MenuIcon onClick={resetWidth} role="button" className="h-6 w-6 text-muted-foreground" />
          )}
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
 