interface ContentCardProps {
  title: string;
  content: string;
  children?: React.ReactNode; // Optional children to be displayed between the title and content
}

// ContentCard is a reusable component that displays a title, optional children, and content text.
// This component could be used to display various types of content across the app.
const ContentCard: React.FC<ContentCardProps> = ({
  title,
  content,
  children,
}) => {
  // CSS class names for the title and content
  const headerStyling = "text-3xl relative truncate";
  const contentStyling = "text-xl";

  return (
    <main className="card">
      {/* Decorative element above the title */}
      <div className="header-art" />
      {/* Title of the card */}
      <h2 className={headerStyling}>{title}</h2>
      {/* Optional children, which can be another component or JSX */}
      {children}
      {/* Content of the card */}
      <p className={contentStyling}>{content}</p>
    </main>
  );
};

export default ContentCard;
