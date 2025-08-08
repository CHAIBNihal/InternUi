import React from 'react'
import Dashboard from "../../assets/Dashboard/admin.jpg"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../components/ui/table"
import { invoices } from '@/Constants/Menu'
import ModernDigitalClock from '../RightSideContent/ModernDigitalClock'
import NewRequests from '../RightSideContent/NewRequests'

const GlobalContent = () => {
    return (
        <div className='mt-10 px-4'>
            <div className="grid lg:grid-cols-3 gap-4 pr-6">

                {/* Carte image avec overlay */}
                <div className='relative rounded-4xl shadow-lg lg:ml-10  w-[320px]  max-w-sm overflow-hidden h-[240px]'>
                    <img
                        className='h-full w-full object-cover'
                        src={Dashboard}
                        alt="Dashboard"
                    />
                    <div className='absolute bottom-0 w-full backdrop-blur-xl bg-black/40 text-white px-4 py-2 flex justify-between items-center'>
                        <div>
                            <h3 className='text-lg font-semibold'>Emma</h3>
                            <h5 className='text-sm'>Responsable Stagiaire</h5>
                        </div>

                        <div></div>
                    </div>
                </div>

                {/* Tableau des dépôts */}
                <div className='lg:col-span-1 bg-neutral-200/30 backdrop-blur-2xl rounded-3xl shadow-md w-full p-4'>
                    <h5 className='text-lg font-semibold mb-2'>Nouveaux Dépôts</h5>
                    <Table>
                        <TableCaption>Liste des nouveaux Projects déposer.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Project </TableHead>
                                <TableHead>Statut</TableHead>
                                <TableHead>Date</TableHead>

                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {invoices.map((invoice) => (
                                <TableRow key={invoice.invoice}>
                                    <TableCell className="font-medium">{invoice.invoice}</TableCell>
                                    <TableCell>{invoice.paymentStatus}</TableCell>
                                    <TableCell>{invoice.paymentMethod}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>

                    </Table>
                </div>
                <div className='p-4 bg-black/25 space-y-2  rounded-4xl'>
                    <NewRequests />
                    <ModernDigitalClock />

                </div>

            </div>
        </div>
    )
}

export default GlobalContent
