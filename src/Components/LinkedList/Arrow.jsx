export default function Arrow() {
    return (
        <>
            {/* Vertical line for mobile */}
            <div className="lg:hidden flex flex-col items-center">
                <div className="relative">
                    <div className="bg-blue-500 w-2 h-20 "></div>
                </div>
            </div>

            {/* Horizontal line for larger screens */}
            <div className="hidden lg:flex">
                <div className="flex items-center">
                    <div className="relative">
                        <div className="bg-blue-500 w-20 h-2"></div>
                    </div>
                </div>
            </div>
        </>
    );
}
