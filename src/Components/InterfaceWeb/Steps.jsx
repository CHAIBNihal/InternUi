import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function Steps() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="text-cyan-700 text-4xl font-bold text-center mb-8">
                Les &#232;tapes de votre demande
            </h1>

            <section className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="mt-2">
                    <h2 className="text-3xl font-extrabold leading-snug text-gray-800">
                        Voici toutes les proc&#232;dures <br />
                        de votre demande
                    </h2>
                </div>

                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                >
                    <AccordionItem value="item-1">
                        <AccordionTrigger>1 - Remplir le formulaire de demande</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-gray-700">
                            <p>
                                Pour envoyer une demande, veuillez remplir tous les champs du formulaire et v&#232;rifier que toutes vos informations sont correctes.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>2 - V&#232;rification de la demande</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-gray-700">
                            <p>
                                Notre responsable v&#232;rifie l&apos;&#232;ligibilit&#232; de votre demande.
                            </p>
                            <p>
                                Si vous êtes accept&#232;e, vous recevrez un email avec vos identifiants et pourrez vous connecter à votre compte.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>3 - Choisir le thème qui vous correspond</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-gray-700">
                            <p>
                                Avant tout, vous choisirez votre th&#232;me. Ensuite, vous serez prêt·e à commencer votre p&#232;riode de stage et à mettre en pratique vos acquis.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>
        </section>
    );
}
