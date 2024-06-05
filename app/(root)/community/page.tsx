import { UserFilters } from '@/constants/filters';
import LocalSearchbar from '@/components/shared/search/LocalSearchbar';
import Filter from '@/components/shared/Filter';
import { getAllUsers } from '@/lib/actions/user.actions';
import Link from 'next/link';
import UserCard from '@/components/cards/UserCard';
import { SearchParamProps } from '@/types';
import Pagination from '@/components/shared/Pagination';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Community | Dev Overflow'
};

const Community = async ({ searchParams }: SearchParamProps) => {
    const result = await getAllUsers({
        searchQuery: Array.isArray(searchParams.q) ? searchParams.q[0] : searchParams.q,
        filter: Array.isArray(searchParams.filter) ? searchParams.filter[0] : searchParams.filter,
        page: searchParams.page ? +searchParams.page : 1
    });

    return (
        <>
            <h1 className="h1-bold text-dark100_light900">Our Community</h1>

            <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
                <LocalSearchbar
                    route="/community"
                    iconPosition="left"
                    imgSrc="/assets/icons/search.svg"
                    placeholder="Search within our community"
                    otherClasses="flex-1"
                />

                <Filter
                    filters={UserFilters}
                    otherClasses="min-h-[56px] sm:min-w-[170px]"
                />
            </div>

            <section className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {result.users.length > 0 ? (
                    result.users.map((user) => (
                        <UserCard key={user._id} user={user} />
                    ))
                ) : (
                    <div className="paragraph-regular text-dark200_light800 mx-auto max-w-4xl text-center">
                        <p>No users yet.</p>
                        <Link
                            href="/sign-up"
                            className="mt-1 font-bold text-accent-blue"
                        >
                            Join to be the first
                        </Link>
                    </div>
                )}
            </section>

            {/* Pagination */}
            <div className="mt-10">
                <Pagination
                    pageNumber={searchParams?.page ? +searchParams.page : 1}
                    isNext={result.isNext}
                />
            </div>
        </>
    );
};
export default Community;
