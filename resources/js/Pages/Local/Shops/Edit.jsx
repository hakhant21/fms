import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

const Edit = ({ shop }) => {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Edit Shop
                    </h2>
                    <Link href={route("shops.index")} className="px-3 py-1 bg-slate-800 text-white rounded-md hover:bg-slate-800">
                        Back
                    </Link>
                </div>
            }
        >
            <Head title="Edit Shop" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Shops Edit Form Goes here</div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;
