import { IArtist } from "@/interfaces";
import { ArtistList, HeaderSection } from "@/components";

interface Props {
  artists: IArtist[];
}

export const ArtistSection = ({ artists }: Props) => {
  return (
    <section className="py-16 px-4 xl:px-0">
      <div className="max-w-screen-xl mx-auto">
        <HeaderSection
          title="Our Artists"
          subtitle="Meet the talented artists who bring your designs to life."
        />
        <ArtistList artists={artists} />
      </div>
    </section>
  );
};
