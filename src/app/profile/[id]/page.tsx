export default function profilePageWrap({params}: any) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <p className="test-4xl">Profile Page
                <span className="p-2 bg-orange-500 rounded text-black ml-2">{params.id}</span>
            </p>
        </div>
    )
}