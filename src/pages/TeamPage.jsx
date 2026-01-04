import Team from "../components/team/Team";

import { useWorkContext } from "../context/workTrackContext";

const TeamPage = () => {
  const { teams } = useWorkContext();

  return <Team teams={teams} />;
};

export default TeamPage;

