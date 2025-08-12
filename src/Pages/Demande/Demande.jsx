import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "react-router-dom"
import SRM from "../../assets/Dashboard/SRM.png"
import { LoginBtn } from "@/Components/InterfaceWeb/LoginBtn"
export default function DemandeStageForm() {
    return (
        <section>
            <div className="bg-indigo-950 p-2 rounded-full flex justify-between  w-full">
                <div className="p-2">
                    <img className="h-16 w-16 " src={SRM} alt="LOGO SRM" />
                </div>
                <div className=" mr-5 flex p-2 items-center">
                  <LoginBtn/>
                </div>
            </div>
            <div className="flex justify-center items-center min-h-screen  p-4">
                <Card className="w-full max-w-lg shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-center text-2xl font-bold">
                            Formulaire de Demande de Stage
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-4">
                            {/* Nom */}
                            <div >
                                <Label className="mb-1" htmlFor="nom">Nom complet</Label>
                                <Input id="nom" placeholder="Votre nom complet" required />
                            </div>

                            {/* Email */}
                            <div >
                                <Label className="mb-1" htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="exemple@email.com"
                                    required
                                />
                            </div>

                            {/* Mot de passe */}
                            <div >
                                <Label className="mb-1" htmlFor="motDePasse">Mot de passe</Label>
                                <Input
                                    id="motDePasse"
                                    type="password"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>

                            {/* Établissement */}
                            <div >
                                <Label className="mb-1" htmlFor="etablissement">Établissement</Label>
                                <Input
                                    id="etablissement"
                                    placeholder="Nom de l'établissement"
                                    required
                                />
                            </div>

                            {/* Année universitaire */}
                            <div >
                                <Label className="mb-1" htmlFor="anneeUniversitaire">Année universitaire</Label>
                                <Input
                                    id="anneeUniversitaire"
                                    placeholder="2024-2025"
                                    required
                                />
                            </div>

                            {/* Période de stage */}
                            <div >
                                <Label className="mb-1" htmlFor="periodeStage">Période de stage</Label>
                                <Input
                                    id="periodeStage"
                                    placeholder="Ex: Juin - Août 2025"
                                    required
                                />
                            </div>

                            {/* Niveau universitaire */}
                            <div >
                                <Label className="mb-1" htmlFor="niveau">Niveau universitaire</Label>
                                <Input
                                    id="niveau"
                                    placeholder="Ex: Licence 3, Master 1..."
                                    required
                                />
                            </div>

                            {/* Bouton Valider */}
                            <Button type="submit" className="w-full">
                                Valider
                            </Button>

                            {/* Lien retour */}
                            <div className="text-center mt-2">
                                <Link to="/" className="text-blue-600 hover:underline">
                                    Retour à l'accueil
                                </Link>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
