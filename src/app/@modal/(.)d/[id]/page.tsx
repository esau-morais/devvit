import { Devvit } from '@/components/Devvit';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/Dialog';

const DevvitPreview = ({
  params: { id: devvitId },
}: {
  params: { id: string };
}) => {
  return (
    <Dialog id={devvitId}>
      <DialogContent>
        <Devvit id={devvitId} />
      </DialogContent>
    </Dialog>
  );
};

export default DevvitPreview;
