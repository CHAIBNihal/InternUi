import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LogIn, LogInIcon } from "lucide-react"
import React from "react"

export function LoginBtn() {
    return (
        <section className="hover:bg-white hover:text-black  py-4 rounded-2xl">
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button
                        className="font-semibold flex gap-x-1 bg-transparent text-white items-center text-sm md:text-base"
                        variant="ghost"
                    >
                        <LogIn size={16} className="md:size-[19px]" />
                        Se connecter
                    </Button>
                </AlertDialogTrigger>

                <AlertDialogContent className="sm:max-w-md">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="flex flex-col items-center gap-y-2">
                            <LogInIcon className="h-14 w-14 text-indigo-950" />
                            <p className="text-lg font-semibold">se Connectez</p>
                        </AlertDialogTitle>
                        <AlertDialogDescription className="text-center">
                            Entrez vos identifiants pour accéder à votre compte.
                        </AlertDialogDescription>
                    </AlertDialogHeader>

                    {/* Formulaire de connexion */}
                    <form className="space-y-4 py-4">
                        <div>
                            <Label className={"mb-2"} htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="exemple@email.com"
                                required
                            />
                        </div>
                        <div>
                            <Label className={"mb-2"} htmlFor="password">Mot de passe</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </form>

                    <AlertDialogFooter className="mt-2">
                        <AlertDialogCancel>Annuler</AlertDialogCancel>
                        <AlertDialogAction className="bg-orange-400 hover:bg-orange-700">
                            Se connecter
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </section>
    )
}
