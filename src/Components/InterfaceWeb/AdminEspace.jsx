import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "react-router-dom"
import SRM from "../../assets/Dashboard/SRM.png"
import { UserRoundCog } from "lucide-react"

export default function AdminEspace() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center  p-4">
            {/* Logo */}


            {/* Carte connexion */}
            <Card className="w-full max-w-md bg-white/70 backdrop-blur-lg shadow-xl border border-white/30 rounded-2xl transition-all hover:shadow-2xl">
                <CardHeader>
                    <CardTitle className="text-center flex justify-between text-lG items-center  font-extrabold text-gray-800">
                         <div className="flex items-center gap-x-2 mt-2">
                            <UserRoundCog size={19} />
                            Espace Administrateur
                        </div>
                        <img src={SRM} alt="LOGO" className="h-14 w-30  animate-collapsible-up" />
                       
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-5">
                        {/* Email */}
                        <div>
                            <Label className="mb-1 block text-gray-700 font-medium" htmlFor="email">
                                Email
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="exemple@email.com"
                                required
                                className="border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                            />
                        </div>

                        {/* Mot de passe */}
                        <div>
                            <Label className="mb-1 block text-gray-700 font-medium" htmlFor="motDePasse">
                                Mot de passe
                            </Label>
                            <Input
                                id="motDePasse"
                                type="password"
                                placeholder="••••••••"
                                required
                                className="border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                            />
                        </div>

                        {/* Bouton Valider */}
                        <Button
                            type="submit"
                            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold transition-all duration-200"
                        >
                            Connexion
                        </Button>

                        {/* Lien retour */}
                        <div className="text-center mt-2">
                            <Link to="/" className="text-blue-600 hover:underline text-sm">
                                Retour à l'accueil
                            </Link>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </section>
    )
}
