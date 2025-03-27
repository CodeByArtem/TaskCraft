export default function UserProfile({ user }: { user: { name: string; email: string } }) {
    return (
        <div className="p-4 border rounded">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <button>Logout</button>
        </div>
    );
}
