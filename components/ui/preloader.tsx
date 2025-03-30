export const PreloaderData = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin z-20"></div>
        </div>
    );
};

export const PreloaderAuthentication = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
};
