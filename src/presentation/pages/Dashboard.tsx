





import CardStats from "../components/CardStats";
import useGetLoggedUserHook from "../hook/users/useGetLoggedUserHook";
import useLogoutHook from "../hook/users/useLogoutHook";

const Dashboard = () => {
    const token = localStorage.getItem("token") || "";

    const { data, isLoading, isError } = useGetLoggedUserHook(token);
    const { logout, isLoggingOut } = useLogoutHook();

    if (isLoading) {
        return <p>Chargement des informations utilisateur...</p>;
    }

    if (isError) {
        return <p>Erreur lors de la récupération des informations utilisateur.</p>;
    }

    // 🔹 Gestion de l'affichage même après déconnexion
    const user = data || { nom: "Visiteur", prenom: "", email: "N/A", telephone: "N/A", adresse: "N/A", sexe: "N/A" };

    return (
        <div className="p-2 fixed top-75 left-80 mt-12 z-80">
            <h2 className="text-3xl font-bold">Dashboard</h2>
            <div className="grid grid-cols-4 gap-4 my-6">
                <CardStats title="Total Sales" value="$10.54K" color="bg-yellow-500" />
                <CardStats title="Orders" value="1,056" color="bg-blue-500" />
                <CardStats title="Unique Visits" value="5,420" color="bg-green-500" />
                <CardStats title="Returning Users" value="1,650" color="bg-purple-500" />
            </div>

            <div className="logged-user-view">
                <h1>Bienvenue, {user.nom} {user.prenom} !</h1>
                <ul>
                    <li>Email : {user.email}</li>
                    <li>Téléphone : {user.telephone}</li>
                    <li>Adresse : {user.adresse}</li>
                    <li>Sexe : {user.sexe}</li>
                    {data && token && (
                        <li>
                            <button onClick={() => logout()} disabled={isLoggingOut}>
                                {isLoggingOut ? "Déconnexion en cours..." : "Se déconnecter"}
                            </button>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;