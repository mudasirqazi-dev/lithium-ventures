import { Icon, PaginationRow } from "../controls";
import { Metadata } from "../types";
import imgPrev from "../media/prev.png";
import imgNext from "../media/next.png";
import imgFirst from "../media/first.png";
import imgLast from "../media/last.png";

type Props = {
  data: Metadata | undefined;
  onNext: () => void;
  onPrev: () => void;
  onFirst: () => void;
  onLast: () => void;
};

function Pagination({ data, onNext, onPrev, onFirst, onLast }: Props) {
  return (
    <PaginationRow>
      <Icon src={imgFirst} alt="first" onClick={onFirst} />
      <Icon src={imgPrev} alt="previous" onClick={onPrev} />
      <div>
        Page {data?.page} of {data?.totalCount}
      </div>
      <Icon src={imgNext} alt="next" onClick={onNext} />
      <Icon src={imgLast} alt="last" onClick={onLast} />
    </PaginationRow>
  );
}

export default Pagination;
