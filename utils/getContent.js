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
    default:
      return null;
  }
};
