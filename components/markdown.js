import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";

// Page text from Contentful. Keeps paragraphs (unlike ConcertDescription),
// optionally giving each one a class.
export default function Markdown({ children, paragraphClassName }) {
  if (!children) return null;
  return (
    <ReactMarkdown
      remarkPlugins={[remarkBreaks]}
      components={
        paragraphClassName
          ? { p: ({ children }) => <p className={paragraphClassName}>{children}</p> }
          : undefined
      }
    >
      {children}
    </ReactMarkdown>
  );
}
