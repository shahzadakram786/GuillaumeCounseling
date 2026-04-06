
import { PageHero } from "@/components/layout/PageHero";
import { leadershipData, LeadershipMember } from "@/lib/data/pages/leadership";

const MemberCard = ({ member }: { member: LeadershipMember }) => (
  <div className="bg-card rounded-lg shadow-md overflow-hidden">
    <img src={member.image} alt={member.name} className="w-full h-64 object-cover object-top" loading="lazy" />
    <div className="p-5">
      <h3 className="font-heading font-bold text-foreground text-lg">{member.name}</h3>
      <p className="text-primary text-sm font-medium mt-1">{member.title}</p>
      {member.languages && <p className="text-muted-foreground text-sm mt-2">{member.languages}</p>}
      {member.description && <p className="text-muted-foreground text-sm mt-2">{member.description}</p>}
    </div>
  </div>
);

const Leadership = () => {
  const d = leadershipData;

  return (
    <>
      

      <PageHero title={d.title} breadcrumbs={d.breadcrumbs} />

      <main id="main-content" className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8">Board Members</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {d.boardMembers.map((m) => <MemberCard key={m.name + m.title} member={m} />)}
          </div>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8">Leadership Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {d.leadershipTeam.map((m) => <MemberCard key={m.name + m.title} member={m} />)}
          </div>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">Clinical Supervisors</h2>

          <h3 className="text-lg font-heading font-semibold text-foreground mb-4">Oregon Clinical Supervisors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {d.clinicalSupervisors.oregon.map((m) => <MemberCard key={m.name} member={m} />)}
          </div>

          <h3 className="text-lg font-heading font-semibold text-foreground mb-4">California Clinical Supervisors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {d.clinicalSupervisors.california.map((m) => <MemberCard key={m.name} member={m} />)}
          </div>
        </div>
      </main>
    </>
  );
};

export default Leadership;


export const metadata = {
  title: "Leadership | Guillaume Counseling",
  description: "Meet the leadership team at Guillaume Counseling.",
};
