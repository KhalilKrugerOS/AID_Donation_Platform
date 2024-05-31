import Image from "next/image";
import profilePic from './3662.jpg';
import location from './location.svg';
import calender from './calendar.svg';
import link from './link.svg';
import Link from "next/link";
import { getJoinedDate } from '@/lib/utils';
import { URLProps } from '@/types/index.d';
// import { auth } from '@clerk/nextjs';
import { useAuth } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { getUserInfo } from '@/lib/actions/user.actions';
import ProfileLink from "../../../../components/shared/ProfileLinks";
import { FaPlus } from 'react-icons/fa'; // Import the plus icon from react-icons

const ProfilePage = async ({ params, searchParams }: URLProps) => {

    const { userId: clerkId } = useAuth();
    const userInfo = await getUserInfo({ userId: params.id });

    return ((
        <div>
            <div style={{
                border: '2px solid #ccc', // Couleur et épaisseur de la bordure
                padding: '20px', // Marge intérieure
                borderRadius: '10px', // Bordure arrondie
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',// Ombre
                marginTop: '150px' // Marge en haut
            }}>






                <div className="flex flex-col-reverse items-start justify-between sm:flex-row container mt-16 pt-20">
                    <div className="relative flex flex-col items-start gap-4 lg:flex-row">
                        <div className="relative w-36 h-36"> {/* Ensure the container is square */}
                            <Image
                                src={profilePic}
                                alt="Profile Picture"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-full shadow-lg" // Rounded and shadow classes
                            />
                            <label
                                htmlFor="profile"
                                className="absolute bottom-0 right-0 flex h-8.5 w-8.5 cursor-pointer items-center justify-center rounded-full bg-primary text-white hover:bg-opacity-90 sm:bottom-2 sm:right-2"
                            >
                                <svg
                                    className="fill-current"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4.76464 1.42638C4.87283 1.2641 5.05496 1.16663 5.25 1.16663H8.75C8.94504 1.16663 9.12717 1.2641 9.23536 1.42638L10.2289 2.91663H12.25C12.7141 2.91663 13.1592 3.101 13.4874 3.42919C13.8156 3.75738 14 4.2025 14 4.66663V11.0833C14 11.5474 13.8156 11.9925 13.4874 12.3207C13.1592 12.6489 12.7141 12.8333 12.25 12.8333H1.75C1.28587 12.8333 0.840752 12.6489 0.512563 12.3207C0.184375 11.9925 0 11.5474 0 11.0833V4.66663C0 4.2025 0.184374 3.75738 0.512563 3.42919C0.840752 3.101 1.28587 2.91663 1.75 2.91663H3.77114L4.76464 1.42638ZM5.56219 2.33329L4.5687 3.82353C4.46051 3.98582 4.27837 4.08329 4.08333 4.08329H1.75C1.59529 4.08329 1.44692 4.14475 1.33752 4.25415C1.22812 4.36354 1.16667 4.51192 1.16667 4.66663V11.0833C1.16667 11.238 1.22812 11.3864 1.33752 11.4958C1.44692 11.6052 1.59529 11.6666 1.75 11.6666H12.25C12.4047 11.6666 12.5531 11.6052 12.6625 11.4958C12.7719 11.3864 12.8333 11.238 12.8333 11.0833V4.66663C12.8333 4.51192 12.7719 4.36354 12.6625 4.25415C12.5531 4.14475 12.4047 4.08329 12.25 4.08329H9.91667C9.72163 4.08329 9.53949 3.98582 9.4313 3.82353L8.43781 2.33329H5.56219Z"
                                        fill=""
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M7.00004 5.83329C6.03354 5.83329 5.25004 6.61679 5.25004 7.58329C5.25004 8.54979 6.03354 9.33329 7.00004 9.33329C7.96654 9.33329 8.75004 8.54979 8.75004 7.58329C8.75004 6.61679 7.96654 5.83329 7.00004 5.83329ZM4.08337 7.58329C4.08337 5.97246 5.38921 4.66663 7.00004 4.66663C8.61087 4.66663 9.91671 5.97246 9.91671 7.58329C9.91671 9.19412 8.61087 10.5 7.00004 10.5C5.38921 10.5 4.08337 9.19412 4.08337 7.58329Z"
                                        fill=""
                                    />
                                </svg>
                                <input
                                    type="file"
                                    name="profile"
                                    id="profile"
                                    className="sr-only"
                                />
                            </label>
                        </div>

                        <div className="mt-3">
                            <h2 className="font-bold mb-1.5 text-2xl font-semibold text-black dark:text-white">{userInfo.firstname} {userInfo.lastname} </h2>
                            <p className="font-bold">@{userInfo.username}</p>

                            <div className="mt-5 flex flex-wrap items-center justify-start gap-5">
                                {/* Location */}
                                {userInfo.location && (
                                    <ProfileLink
                                        imgUrl={location}
                                        title={userInfo.location}
                                    />
                                )}

                                {/* Portfolio Website */}
                                {userInfo.socialMediaLink && (
                                    <ProfileLink
                                        imgUrl={link}
                                        href={userInfo.socialMediaLink}
                                        title={userInfo.socialMediaLink}
                                    />
                                )}

                                {/* Joined Date */}
                                <ProfileLink
                                    imgUrl={calender}
                                    title={getJoinedDate(userInfo.joinedAt)}
                                />
                            </div>
                            <div className="mt-6 pl-10 mx-auto max-w-180  text-center">
                                <h4 className="font-semibold text-black dark:text-white">
                                    À propos de moi
                                </h4>
                                {userInfo.bio && (
                                    <>{userInfo.bio}</>
                                )}

                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end max-sm:mb-5 max-sm:w-full sm:mt-3">
                        <Link href="#">
                            <Button className="mt-20 flex items-center paragraph-medium bg-gray-500 text-white min-h-[46px] min-w-[175px] hover:bg-gray-600">
                                <FaPlus className="mr-2" /> {/* Plus icon with margin-right */}
                                Ajouter un post
                            </Button>
                        </Link>
                    </div>
                    <div className="flex jusitify-end max-sm:mb-5 max-sm:w-full sm:mt-3">
                        {/* if signed in add clerk edit */}
                        <Link href="/Settings">
                            {/* edit profile ref */}
                            <Button className="mt-20 paragraph-medium btn-secondary min-h-[46px] min-w-[175px]">
                                Modifier le profil
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Box under information */}
            <div style={{
                border: '2px solid #ccc', // Couleur et épaisseur de la bordure
                padding: '20px', // Marge intérieure
                borderRadius: '10px', // Bordure arrondie
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',// Ombre
                marginTop: '20px' // Marge en haut
            }}>
                <h4 className="font-semibold text-black dark:text-white mb-4">Badges et Certifications</h4>
                {/* Add content for the box here */}
                <p>les badges...</p>
            </div>
            {/* Box under information */}
            <div style={{
                border: '2px solid #ccc', // Couleur et épaisseur de la bordure
                padding: '20px', // Marge intérieure
                borderRadius: '10px', // Bordure arrondie
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',// Ombre
                marginTop: '20px' // Marge en haut
            }}>
                <h4 className="font-semibold text-black dark:text-white mb-4">Posts</h4>
                {/* Add content for the box here */}
                <p>Content of My Posts...</p>
            </div>
        </div>
    );
};
export default ProfilePage;