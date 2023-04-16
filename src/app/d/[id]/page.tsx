import { Devvit as SingleDevvit } from '@/components/Devvit';

const Devvit = ({ params: { id: devvitId } }: { params: { id: string } }) => {
  return <SingleDevvit id={devvitId} />;
};

export default Devvit;
