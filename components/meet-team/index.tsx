type TPerson = {
  name: string
  jobTitle: string
  img: string
}

const teamPersons: TPerson[] = [
  {
    name: "John Powell",
    jobTitle: "Service Support",
    img: "/team/person_1.jpg"
  },
  {
    name: "Thomas Powell",
    jobTitle: "Marketing",
    img: "/team/person_2.jpg"
  },
  {
    name: "Helena Wilson",
    jobTitle: "Designer",
    img: "/team/person_3.jpg"
  },
  {
    name: "Samuel Palmer",
    jobTitle: "Marketing",
    img: "/team/person_4.jpg"
  }
]

export function MeetTeam() {
  return (
    <div className="wrapper mx-auto space-y-4 py-8 sm:space-y-8 md:py-16">
      <div className="space-y-1 text-center">
        <h2 className="wrapper-title">Meet Our Team Of Experts</h2>
        <p className="wrapper-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="mx-auto flex max-w-screen-xl flex-wrap justify-center gap-4 xl:gap-8">
        {teamPersons.map((person) => (
          <div key={person.name}>
            <div className="aspect-4/5 max-w-44 min-w-32 overflow-hidden rounded-md xl:max-w-64">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={person.img}
                alt={person.name}
                className="h-full w-full overflow-hidden object-cover object-center"
              />
            </div>
            <h3 className="text-lg font-medium">{person.name}</h3>
            <p className="text-sm/tight">{person.jobTitle}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
