import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Suspense } from 'react';
import Image from 'next/image';

export default async function ProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // As if Database Response
  const userDb = [
    {
      id: "jameboy",
      name: "Jameboy Escartin",
      section: "BSIT - 3A",
      email: "escartinjameboy@gmail.com",
      hobbies: ["Chess", "Guitar", "Hobby 3"]
    },
    {
      id: "ian",
      name: "Ian Faith Fernandez",
      section: "BSIT - 3A",
      email: "ian@example.com",
      hobbies: ["Coding", "Design", "Music", "Drawing"],
      profilePicture: "https://scontent.fceb3-1.fna.fbcdn.net/v/t39.30808-6/476007034_935148135491399_4441949445563775660_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHCvhoZnbl2Kg_nm75NKk2V_lsfSI7ymib-Wx9IjvKaJtxSam8ylRgJd2YhHFdofL9F3lwzmO2n9dZrqude6QT4&_nc_ohc=HjTiUXrXiEEQ7kNvwHREoNp&_nc_oc=AdmHo8vIqKdCXWZcKDrrm4LPSWO0GJnw6SpLEuC-Xnr7HZaIUMLU_9mJRqe7afY-b78&_nc_zt=23&_nc_ht=scontent.fceb3-1.fna&_nc_gid=ytwetgw9sRo7qZROQYT-hQ&oh=00_Afshavui6g7IP4mYu_0bX-EfCl6vSdTPYHfSLiLuFMK_4w&oe=698C1E65"
    }
  ]

  for (const currentSlug of slug) {
    if (currentSlug === "hobbies") {
      return (
        <div className="border p-4 mb-4 rounded-md">
          <h1>Hobby Page</h1>
          {userDb[0].hobbies.map((hobby) => (
            <ul key={hobby}>
              <li>{hobby}</li>
            </ul>
          ))}
        </div>
      )
    }
  }

  // Validation
  const checkValidUser: Boolean = userDb[0].id === slug[0];
  console.log(checkValidUser)
  // If not Valid User
  if (!checkValidUser) {
    return (
      <div className="border p-4 mb-4 rounded-md">
        Not Found User
      </div>
    )
  }

  // If Valid User -> Render actual page
  const userData = userDb.find(user => user.id === slug[0]);
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container mx-auto p-6">
        <div key={userData?.id} className="border p-4 mb-4 rounded-md">
          <div className="flex flex-col items-center justify-center">
            {userData?.profilePicture && (
              <div className="mb-6">
                <Image
                  src={userData.profilePicture}
                  alt={userData.name}
                  width={200}
                  height={200}
                  className="rounded-full border-4 border-gray-300"
                  priority
                />
              </div>
            )}
            <h1 className="text-3xl font-bold text-center mb-2">{userData?.name}</h1>
            <h2 className="text-xl text-gray-600 text-center mb-4">{userData?.section}</h2>
            <p className='mb-4 text-center'>Email: {userData?.email}</p>
            <Link href={`./${slug[0]}/hobbies`}>
              <Button>View Hobbies</Button>
            </Link>
          </div>
        </div>
      </div>
    </Suspense>
  )
}