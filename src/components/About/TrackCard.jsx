import { Play } from "lucide-react";
import { useEffect, useState } from "react";

const BACKEND_URL = "https://spotify-api-backend.vercel.app"; // Cambia esto por tu URL real en Vercel
const PLAYLIST_ID = "41XJfIkkyQDJQSd6kSON8y";

export const TrackCard = () => {
  const [track, setTrack] = useState(null);

  const getRandomTrack = async () => {
    try {
      // Hacemos la solicitud al backend en Vercel
      const response = await fetch(
        `${BACKEND_URL}/api/playlist/${PLAYLIST_ID}`
      );
      const data = await response.json();

      if (data.items && data.items.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.items.length);
        const randomTrack = data.items[randomIndex].track;
        setTrack(randomTrack);
      }
    } catch (error) {
      console.error("Error obteniendo la canción:", error);
    }
  };

  useEffect(() => {
    getRandomTrack();
    const interval = setInterval(getRandomTrack, 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-full w-full items-center justify-between gap-4 p-4 md:text-sm lg:text-md">
      {track ? (
        <>
          <div className="relative aspect-square h-[56px] rounded-full">
            <div className="absolute bottom-0 left-0 right-0 top-0 z-20 m-auto h-8 w-8 rounded-full border border-white/20 bg-transparent outline outline-1 outline-offset-4 outline-white/20 dark:border-white/10 dark:outline-white/10"></div>
            <div className="absolute bottom-0 left-0 right-0 top-0 z-20 m-auto h-1 w-1 rounded-full bg-white dark:bg-neutral-900"></div>

            <img
              src={track.album.images[0].url}
              alt={track.name}
              className="absolute bottom-0 left-0 right-0 top-0 z-10 m-auto aspect-square h-8 w-8 animate-[spin_5s_linear_infinite] rounded-full object-cover"
            />
            <div className="absolute aspect-square h-[56px] rounded-full border border-white bg-black shadow-md outline outline-1 outline-offset-0 outline-zinc-200 ring-1 ring-white/10 dark:border-white/10 dark:outline-[#1a1a1a]"></div>
          </div>

          <div className="w-full overflow-hidden">
            <a
              href={track.external_urls.spotify}
              className="hover:animate-marquee block w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold lg:text-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              {track.name}
            </a>
            <p className="hover:animate-marquee w-full overflow-hidden text-ellipsis whitespace-nowrap text-xs opacity-80 lg:text-sm">
              {track.artists.map((artist) => artist.name).join(", ")}
            </p>
          </div>

          <a
            href={track.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-[#fafafa15] p-2 transition duration-300 hover:bg-[#fafafa2f]"
          >
            <Play size={15} />
          </a>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};
