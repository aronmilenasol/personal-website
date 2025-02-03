import { ExternalLink } from "lucide-react";

export const WorkingProject = ({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link?: string;
}): JSX.Element => {
  return (
    <div className="mb-4 bg-lighter shadow-md border-2 border-base p-4 sm:p-6 rounded-2xl">
      <p className="font-semibold text-xl sm:text-2xl md:text-3xl mb-2">
        {title}
      </p>
      <p className="text-dark sm:text-lg md:text-xl">{description}</p>
      {link && (
        <div className="mt-4 flex items-center space-x-2">
          <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark font-semibold sm:text-lg md:text-xl hover:text-darker transition-colors duration-300"
          >
            Link
          </a>
        </div>
      )}
    </div>
  );
};
