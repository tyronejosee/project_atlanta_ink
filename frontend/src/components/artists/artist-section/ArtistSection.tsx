import { IArtist } from "@/interfaces";
import { ArtistList, HeaderSection } from "@/components";

interface Props {
  artists: IArtist[];
}

export const ArtistSection = ({ artists }: Props) => {
  return (
    <section className="py-16">
      <div className="max-w-screen-xl mx-auto">
        <HeaderSection title="Our Artists" />
        <ArtistList artists={artists} />
      </div>
    </section>
  );
};
