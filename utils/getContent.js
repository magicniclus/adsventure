import { CheckBadgeIcon } from "@heroicons/react/20/solid";

export const getContent = (content) => {
  switch (content.tag) {
    case "h2":
      return (
        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
          {content.content}
        </h2>
      );
    case "h3":
      return (
        <h3 className="mt-16 text-xl font-bold tracking-tight text-gray-900">
          {content.content}
        </h3>
      );
    case "h4":
      return (
        <h4 className="mt-16 text-lg font-bold tracking-tight text-gray-900">
          {content.content}
        </h4>
      );
    case "p":
      return <p className="mt-6 text-xl leading-8">{content.content}</p>;
    case "ul":
      return (
        <ul className="mt-6 text-xl leading-8 list-disc list-inside">
          {content.content.map((listItem) => (
            <div className="flex">
              <CheckBadgeIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <li className="ml-5" key={listItem.tag + listItem.content}>
                {listItem.content}
              </li>
            </div>
          ))}
        </ul>
      );
    default:
      return null;
  }
};
