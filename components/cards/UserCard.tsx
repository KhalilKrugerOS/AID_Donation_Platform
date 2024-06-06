import Image from 'next/image';
import Link from 'next/link';

interface Props {
  user: {
    _id: string;
    clerkId: string;
    photo: string;
    firstName: string;
    lastName: string;
    username: string;
  };
}

const UserCard = ({ user }: Props) => {
  return (
    <div className="shadow-light100_darknone w-full max-w-xs">
      <article className="background-light900_dark200 light-border flex flex-col items-center justify-center rounded-2xl border p-8">
        <Link href={`/profile/${user.clerkId}`}>
          <Image
            src={user.photo}
            alt={user.username}
            width={100}
            height={100}
            className="rounded-full"
          />
        </Link>

        {/* User info */}
        <Link href={`/profile/${user.clerkId}`}>
          <div className="mt-4 text-center">
            <h3 className="mb-1.5 text-2xl font-semibold line-clamp-1">
              @{user.username}
            </h3>
            <p className="body-regular mt-2">
              {user.firstName} {user.lastName}
            </p>
          </div>
        </Link>
      </article>
    </div>
  );
};
export default UserCard;
