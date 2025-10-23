import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";

const Shops = ({ shops }) => {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Shop Lists
                    </h2>
                    <Link href={route("shops.create")} className="px-3 py-1 bg-slate-800 text-white rounded-md hover:bg-slate-800">
                        Create
                    </Link>
                </div>
            }
        >
            <Head title="All Shops" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Shops goes here</div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Shops;
